import Link from "next/link";
import UserButton from "./UserButton";
import { FiHome, FiPlusSquare } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav className="h-14 border-t shadow-sm border-t-slate-300 fixed bottom-0 w-full flex items-center bg-white">
      <Link prefetch href="/" className="flex-1 h-full grid place-items-center bg-slate-200 border-t-2 border-[var(--color-primary)]">
        <FiHome size={24} color="var(--color-primary)" />
      </Link>
      <Link prefetch href="/new" className="flex-1 h-full grid place-items-center border-t border-transparent hover:bg-slate-100">
        <FiPlusSquare size={24} color="var(--color-primary)" />
      </Link>
      <Link href="/settings" className="flex-1 h-full grid place-items-center border-t border-transparent">
        {/* @ts-expect-error Async Server Component */}
        <UserButton />
      </Link>
    </nav>
  )
}
