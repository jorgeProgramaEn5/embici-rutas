"use client"
import Link from "next/link";
import Lottie from "lottie-react";
import animation_lk2rmye7 from "public/assets/animation_lk2rmye7.json"

export function Navigation() {
  return (
        <div className=" shadow-lg bg-gray text-gray-light overflow-hidden">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        {/* <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" /> */}
                        <Lottie
                            animationData={animation_lk2rmye7}
                            height={70}
                            width={70}
                            className="lottie"
                        />
                    </Link>
                </div>
                
                <div className="lg:flex lg:gap-x-12">
                    <Link href="/team" className="text-sm md:mr-4 mr-2 font-semibold leading-6 text-gray-900">Our Team</Link>
                    <Link href="/about" className="text-sm md:mr-4 mr-2 font-semibold leading-6 text-gray-900">About</Link>
                    <Link href="/products" className="text-sm font-semibold leading-6 text-gray-900">Products</Link>
                </div>
            </nav>
        </div>
  )
}
