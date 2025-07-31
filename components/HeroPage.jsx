'use client'

import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Contact', href: '#' },
]

const HeroPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=sky&shade=400"
              alt="NCF Robotics Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold tracking-wide text-sky-400">NCF Robotics</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-sky-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-medium text-sky-400 hover:text-white">
              Login <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-[#1e293b] p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-sky-400">NCF Robotics</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-300"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-300 hover:text-sky-400"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="block text-base font-medium text-sky-400 hover:text-white">
                Login
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <main className="relative px-6 pt-32 pb-20 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
            Building the Future with <span className="text-sky-400">Intelligent Machines</span>
          </h1>
          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Welcome to NCF Robotics — pushing the boundaries of automation, AI, and human innovation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="rounded-md bg-sky-400 px-5 py-2.5 text-sm font-semibold text-[#0f172a] shadow-md hover:bg-sky-300 transition"
            >
              Get Started
            </a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
              Learn More →
            </a>
          </div>

          {/* Spline Embed with modern glass effect */}
          <div className="mt-16 relative max-w-6xl mx-auto rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
            <Spline scene="https://prod.spline.design/70Y85EO9ECpfi6pA/scene.splinecode" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroPage
