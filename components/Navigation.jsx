import Link from "next/link";

export function Navigation() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
            </ul>
        </nav>
  </div>
  )
}
