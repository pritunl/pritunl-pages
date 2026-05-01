import type { Repository, Installer } from "../types"
import { highlight } from "../lib/shiki"
import RepositorySelector from "./RepositorySelector"

interface Props {
	id: string,
	installTitle: string,
	installDescription: string,
	repositories: Repository[]
	installers?: { macos?: Installer; windows?: Installer }
}

const distroLabels: Record<string, string> = {
	arch: "Arch Linux",
	amazon: "Amazon Linux",
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
	"26.04": "zippy",
	"25.10": "questing",
	"25.04": "plucky",
	"24.10": "oracular",
	"24.04": "noble",
	"22.04": "jammy",
	"20.04": "focal",
}

const mongoDebianVersionNames: Record<string, string> = {
	"14": "bookworm",
	"13": "bookworm",
	"12": "bookworm",
	"11": "bookworm",
	"10": "bookworm",
	"26.04": "noble",
	"25.10": "noble",
	"25.04": "noble",
	"24.10": "noble",
	"24.04": "noble",
	"22.04": "jammy",
	"20.04": "focal",
}

const dnfPaths: Record<string, string> = {
	amazon: "amazonlinux",
	oracle: "oraclelinux",
	alma: "almalinux",
	rocky: "oraclelinux",
	fedora: "fedora",
}

const mongoDnfPaths: Record<string, string> = {
	amazon: "amazon",
	oracle: "redhat",
	alma: "redhat",
	rocky: "redhat",
	fedora: "fedora",
}

const mongoDnfVersions: Record<string, string> = {
	"7": "8",
	"8": "8",
	"9": "9",
	"10": "9",
	"2023": "2023",
}

const mongoGpgVersions: Record<string, string> = {
	"8.0": "8.0",
	"8.2": "8.0",
}

function getRepoLabel(repo: Repository): string {
	const label = distroLabels[repo.distribution] || repo.distribution
	if (repo.version) {
		return `${label} ${repo.version}`
	}
	return label
}

function generateCommands(repo: Repository): string {
	const gpgKey = "https://raw.githubusercontent.com/pritunl/pgp/master/pritunl_repo_pub.asc"
	const gpgKeyId = "7568D9BB55FF9E5287D586017AE645C0CF8E292A"

	switch (repo.distribution) {
		case "arch":
			return `sudo tee -a /etc/pacman.conf << EOF
[pritunl]
Server = https://repo.pritunl.com/stable/pacman
EOF

curl -fsSL ${gpgKey} \\
  | sudo pacman-key --add -
sudo pacman-key --lsign-key ${gpgKeyId}
sudo pacman -Sy
sudo pacman -S --noconfirm ${repo.package}`

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
gpgkey=${gpgKey}
EOF

sudo dnf -y install ${repo.package}`

		case "ubuntu":
			return `sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb [signed-by=/usr/share/keyrings/pritunl.gpg] https://repo.pritunl.com/stable/apt ${debianVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo apt update
sudo apt install ${repo.package}`

		case "debian":
			return `sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb [signed-by=/usr/share/keyrings/pritunl.gpg] https://repo.pritunl.com/stable/apt ${debianVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo apt update
sudo apt install ${repo.package}`

		default:
			return ""
	}
}

function generateCommandsVpn(repo: Repository): string {
	const gpgKey = "https://raw.githubusercontent.com/pritunl/pgp/master/pritunl_repo_pub.asc"
	const gpgKeyId = "7568D9BB55FF9E5287D586017AE645C0CF8E292A"

	switch (repo.distribution) {
		case "arch":
			return `sudo tee -a /etc/pacman.conf << EOF
[pritunl]
Server = https://repo.pritunl.com/stable/pacman
EOF

curl -fsSL ${gpgKey} \\
  | sudo pacman-key --add -
sudo pacman-key --lsign-key ${gpgKeyId}
sudo pacman -Sy
sudo pacman -S --noconfirm ${repo.package} wireguard-tools

sudo systemctl enable mongodb ${repo.package}
sudo systemctl start mongodb ${repo.package}`

		case "amazon":
		case "oracle":
		case "alma":
		case "rocky":
		case "fedora":
			return `sudo tee /etc/yum.repos.d/mongodb-org.repo << EOF
[mongodb-org]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/${mongoDnfPaths[repo.distribution]}/${mongoDnfVersions[repo.version]}/mongodb-org/${repo.mongoVersion}/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-${mongoGpgVersions[repo.mongoVersion!]}.asc
EOF

sudo tee /etc/yum.repos.d/pritunl.repo << EOF
[pritunl]
name=Pritunl Stable Repository
baseurl=https://repo.pritunl.com/stable/yum/${dnfPaths[repo.distribution]}/${repo.version}/
gpgcheck=1
enabled=1
gpgkey=${gpgKey}
EOF

sudo ${repo.version === "7" ? "yum" : "dnf"} -y remove iptables-services
sudo systemctl stop firewalld.service
sudo systemctl disable firewalld.service

sudo ${repo.version === "7" ? "yum" : "dnf"} -y install ${repo.package} mongodb-org pritunl-openvpn wireguard-tools
sudo systemctl enable mongod ${repo.package}
sudo systemctl start mongod ${repo.package}`

		case "ubuntu":
			return `sudo tee /etc/apt/sources.list.d/mongodb-org.list << EOF
deb [ signed-by=/usr/share/keyrings/mongodb-server-${mongoGpgVersions[repo.mongoVersion!]}.gpg ] \\
https://repo.mongodb.org/apt/ubuntu ${mongoDebianVersionNames[repo.version]}/mongodb-org/${repo.mongoVersion} multiverse
EOF

sudo tee /etc/apt/sources.list.d/openvpn.list << EOF
deb [ signed-by=/usr/share/keyrings/openvpn-repo.gpg ] \\
https://build.openvpn.net/ubuntu/openvpn/stable ${debianVersionNames[repo.version]} main
EOF

sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb [signed-by=/usr/share/keyrings/pritunl.gpg] https://repo.pritunl.com/stable/apt ${debianVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
curl -fsSL https://www.mongodb.org/static/pgp/server-${mongoGpgVersions[repo.mongoVersion!]}.asc \\
  | sudo gpg -o /usr/share/keyrings/mongodb-server-${mongoGpgVersions[repo.mongoVersion!]}.gpg --dearmor --yes
curl -fsSL https://swupdate.openvpn.net/repos/repo-public.gpg \\
  | sudo gpg -o /usr/share/keyrings/openvpn-repo.gpg --dearmor --yes
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo apt --assume-yes install gnupg
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo ufw disable
sudo apt update
sudo apt install ${repo.package} mongodb-org wireguard-tools
sudo systemctl enable mongod ${repo.package}
sudo systemctl start mongod ${repo.package}`

		case "debian":
			return `sudo tee /etc/apt/sources.list.d/mongodb-org.list << EOF
deb [ signed-by=/usr/share/keyrings/mongodb-server-${mongoGpgVersions[repo.mongoVersion!]}.gpg ] \\
https://repo.mongodb.org/apt/debian ${mongoDebianVersionNames[repo.version]}/mongodb-org/${repo.mongoVersion} main
EOF

sudo tee /etc/apt/sources.list.d/openvpn.list << EOF
deb [ signed-by=/usr/share/keyrings/openvpn-repo.gpg ] \\
https://build.openvpn.net/debian/openvpn/stable ${debianVersionNames[repo.version]} main
EOF

sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb [signed-by=/usr/share/keyrings/pritunl.gpg] https://repo.pritunl.com/stable/apt ${debianVersionNames[repo.version]} main
EOF

sudo apt --assume-yes install gnupg
curl -fsSL https://www.mongodb.org/static/pgp/server-${mongoGpgVersions[repo.mongoVersion!]}.asc \\
  | sudo gpg -o /usr/share/keyrings/mongodb-server-${mongoGpgVersions[repo.mongoVersion!]}.gpg --dearmor --yes
curl -fsSL https://swupdate.openvpn.net/repos/repo-public.gpg \\
  | sudo gpg -o /usr/share/keyrings/openvpn-repo.gpg --dearmor --yes
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo apt --assume-yes install gnupg
curl -fsSL ${gpgKey} \\
  | sudo gpg -o /usr/share/keyrings/pritunl.gpg --dearmor --yes

sudo ufw disable
sudo apt update
sudo apt install ${repo.package} mongodb-org wireguard-tools
sudo systemctl enable mongod ${repo.package}
sudo systemctl start mongod ${repo.package}`

		default:
			return ""
	}
}

export default async function Repositories({ id, installTitle, installDescription, repositories, installers }: Props) {
	const entries = await Promise.all(
		repositories.map(async (repo) => {
			var commands: string
			if (repo.type === "vpn") {
				commands = generateCommandsVpn(repo)
			} else {
				commands = generateCommands(repo)
			}
			const highlightedHtml = await highlight(commands, "bash")
			return {
				label: getRepoLabel(repo),
				distribution: repo.distribution,
				commands,
				highlightedHtml,
			}
		})
	)

	return (
		<div id={id} className="relative isolate px-6 lg:px-8">
			<div className="mx-auto max-w-4xl">
				<h2 className="text-center text-4xl font-medium tracking-tight text-balance text-white sm:text-5xl">
					{installTitle}
				</h2>
				<p className="mx-auto mt-6 max-w-xl text-center text-lg/8 text-pretty text-gray-400">
					{installDescription}
				</p>
				<RepositorySelector entries={entries}/>
				{installers && (installers.macos || installers.windows) && (
					<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
						{installers.macos && (
							<div className="rounded-lg bg-white/2.5 ring-1 ring-inset ring-white/10 p-6 text-center">
								<h3 className="text-2xl font-semibold text-white">{installers.macos.label}</h3>
								<p className="mt-1 text-sm text-gray-400">v{installers.macos.version}</p>
								<div className="mt-2 inline-flex flex-col items-stretch gap-3">
									<a
										href={installers.macos.hashUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center rounded-md bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-colors"
									>
										SHA-256 Checksum
									</a>
									<a
										href={installers.macos.url.replace("$version", installers.macos.version)}
										className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 transition-colors"
									>
										Download Pkg
									</a>
								</div>
							</div>
						)}
						{installers.windows && (
							<div className="rounded-lg bg-white/2.5 ring-1 ring-inset ring-white/10 p-6 text-center">
								<h3 className="text-2xl font-semibold text-white">{installers.windows.label}</h3>
								<p className="mt-1 text-sm text-gray-400">v{installers.windows.version}</p>
								<div className="mt-2 inline-flex flex-col items-stretch gap-3">
									<a
										href={installers.windows.hashUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center rounded-md bg-white/5 px-4 py-2 text-sm font-semibold text-gray-300 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-colors"
									>
										SHA-256 Checksum
									</a>
									<a
										href={installers.windows.url.replace("$version", installers.windows.version)}
										className="inline-flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 transition-colors"
									>
										Download Installer
									</a>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	)
}
