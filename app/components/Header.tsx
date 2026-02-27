'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import * as Lucide from 'lucide-react'

import Link from 'next/link'
import Image from 'next/image'

import pritunlLogo from '../assets/pritunl.png'

import type { ProductConfig } from '../types'

export default function Header({ config }: { config: ProductConfig }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{config.name}</span>
            <Image src={pritunlLogo} alt="Pritunl Logo" className="h-10 w-auto"/>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
						<Lucide.Menu aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {config.navigation.map((item) =>
            item.external ? (
              <a key={item.name} href={item.href} target="_blank" className="text-sm/6 font-semibold text-white">
                {item.name}
              </a>
            ) : (
              <Link key={item.name} href={item.href} className="text-sm/6 font-semibold text-white">
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <Link href="/log-in" className="text-sm/6 font-semibold text-white">Log in</Link>
          <Link href="/sign-up" className="rounded-md bg-indigo-500 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Sign Up
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{config.name}</span>
              <Image src={pritunlLogo} alt="Pritunl Logo" className="h-9 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Close menu</span>
							<Lucide.X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/30">
              <div className="space-y-2 py-6">
                {config.navigation.map((item) =>
                  item.external ? (
                    <a key={item.name} href={item.href} target="_blank" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                      {item.name}
                    </a>
                  ) : (
                    <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                      {item.name}
                    </Link>
                  )
                )}
              </div>
              <div className="py-6">
                <Link href="/log-in" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
                  Log in
                </Link>
                <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
