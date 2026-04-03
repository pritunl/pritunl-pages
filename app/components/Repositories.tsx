"use client"

import { useState, type ComponentType, type SVGProps } from "react"
import type { Repository, RepositoryDistribution } from "../types"
import ArchLinux from "../icons/ArchLinux"
import AlmaLinux from "../icons/AlmaLinux"
import RockyLinux from "../icons/RockyLinux"
import Debian from "../icons/Debian"
import OracleLinux from "../icons/OracleLinux"
import Fedora from "../icons/Fedora"
import Ubuntu from "../icons/Ubuntu"

interface Props {
	repositories: Repository[]
}

const distroIcons: Record<RepositoryDistribution, ComponentType<SVGProps<SVGSVGElement>>> = {
	arch: ArchLinux,
	alma: AlmaLinux,
	rocky: RockyLinux,
	debian: Debian,
	oracle: OracleLinux,
	fedora: Fedora,
	ubuntu: Ubuntu,
}

const distroLabels: Record<string, string> = {
	arch: "Arch Linux",
	alma: "AlmaLinux",
	rocky: "Rocky Linux",
	debian: "Debian",
	oracle: "Oracle Linux",
	fedora: "Fedora",
	ubuntu: "Ubuntu",
}

const debianVersionNames: Record<string, string> = {
	"14": "forky",
	"13": "trixie",
	"12": "bookworm",
	"11": "bullseye",
	"10": "buster",
}

const ubuntuVersionNames: Record<string, string> = {
	"26.04": "zippy",
	"25.10": "questing",
	"25.04": "plucky",
	"24.10": "oracular",
	"24.04": "noble",
	"22.04": "jammy",
	"20.04": "focal",
}

const dnfPaths: Record<string, string> = {
	oracle: "oraclelinux",
	alma: "almalinux",
	rocky: "rockylinux",
	fedora: "fedora",
}

function getRepoLabel(repo: Repository): string {
	const label = distroLabels[repo.distribution] || repo.distribution
	if (repo.version) {
		return `${label} ${repo.version}`
	}
	return label
}

function generateCommands(repo: Repository): string {
	const gpgKey = "7568D9BB55FF9E5287D586017AE645C0CF8E292A"

	switch (repo.distribution) {
		case "arch":
			return `sudo tee -a /etc/pacman.conf << EOF
[pritunl]
Server = https://repo.pritunl.com/stable/pacman
EOF

sudo pacman-key --keyserver hkp://keyserver.ubuntu.com -r ${gpgKey}
sudo pacman-key --lsign-key ${gpgKey}
sudo pacman -Sy
sudo pacman -S ${repo.package}`

		case "oracle":
		case "alma":
		case "rocky":
		case "fedora":
			return `sudo tee /etc/yum.repos.d/pritunl.repo << EOF
[pritunl]
name=Pritunl Stable Repository
baseurl=https://repo.pritunl.com/stable/yum/${dnfPaths[repo.distribution]}/${repo.version}/
gpgcheck=1
enabled=1
gpgkey=https://raw.githubusercontent.com/pritunl/pgp/master/pritunl_repo_pub.asc
EOF

sudo dnf -y install ${repo.package}`

		case "ubuntu":
			return `sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb https://repo.pritunl.com/stable/apt ${ubuntuVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
gpg --keyserver hkp://keyserver.ubuntu.com --recv-keys ${gpgKey}
gpg --armor --export ${gpgKey} | sudo tee /etc/apt/trusted.gpg.d/pritunl.asc
sudo apt update
sudo apt install ${repo.package}`

		case "debian":
			return `sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb [signed-by=/usr/share/keyrings/pritunl.gpg] https://repo.pritunl.com/stable/apt ${debianVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
curl -fsSL https://raw.githubusercontent.com/pritunl/pgp/master/pritunl_repo_pub.asc | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo apt update
sudo apt install ${repo.package}`

		default:
			return ""
	}
}

export default function Repositories({ repositories }: Props) {
	const [selected, setSelected] = useState(0)
	const commands = generateCommands(repositories[selected])

	return (
		<div id="install" className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<p className="text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
					Installation
				</p>
				<p className="mx-auto mt-6 max-w-xl text-center text-lg/8 text-pretty text-gray-400">
					Select your distribution to view installation instructions.
				</p>
				<div className="mt-8 grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-2">
					{repositories.map((repo, i) => {
						const Icon = distroIcons[repo.distribution]
						return (
							<button
								key={i}
								onClick={() => setSelected(i)}
								className={`inline-flex items-center justify-center gap-x-2 rounded-md px-1 py-2 text-sm font-semibold transition-colors cursor-pointer ${
									selected === i
										? "bg-indigo-500 text-white shadow-xs"
										: "bg-white/5 text-gray-300 ring-1 ring-inset ring-white/10 hover:bg-white/10"
								}`}
							>
								<Icon aria-hidden="true" className="h-4 w-4" />
								{getRepoLabel(repo)}
							</button>
						)
					})}
				</div>
				<div className="mt-6 rounded-lg bg-white/2.5 ring-1 ring-inset ring-white/10 overflow-hidden">
					<div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
						<span className="text-sm font-medium text-gray-400">
							{getRepoLabel(repositories[selected])}
						</span>
						<button
							onClick={() => navigator.clipboard?.writeText(commands)}
							className="text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
						>
							Copy
						</button>
					</div>
					<pre className="p-4 overflow-x-auto">
						<code className="text-sm leading-relaxed text-gray-300 whitespace-pre">
							{commands}
						</code>
					</pre>
				</div>
			</div>
		</div>
	)
}
