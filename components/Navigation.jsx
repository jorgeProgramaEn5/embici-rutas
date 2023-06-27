import Link from "next/link";

export function Navigation() {
  return (
    <div>
        <header className="bg-gray-dark text-gray-light">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="logo" />
                    </Link>
                </div>
                
                <div className="lg:flex lg:gap-x-12">
                    <Link href="/" className="text-sm md:mr-4 mr-2 font-semibold leading-6 text-gray-900">Home</Link>
                    <Link href="/about" className="text-sm md:mr-4 mr-2 font-semibold leading-6 text-gray-900">About</Link>
                    <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">Services</Link>
                </div>
            </nav>
        </header>
  </div>
  )
}
