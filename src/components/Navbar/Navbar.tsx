import Link from "next/link";
import UserButton from "./UserButton";
import { FiHome, FiPlusSquare } from 'react-icons/fi'
import ActiveLink from "~/components/ActiveLink";

export default function Navbar() {
  return (
    <nav className="h-14 border-t shadow-sm border-t-slate-300 fixed bottom-0 w-full flex items-center bg-white">
      <ActiveLink href="/">
        <FiHome size={24} color="var(--color-primary)" />
      </ActiveLink>
      <ActiveLink href="/new">
        <FiPlusSquare size={24} color="var(--color-primary)" />
      </ActiveLink>
      <ActiveLink href="/settings">
        {/* @ts-expect-error Async Server Component */}
        <UserButton />
      </ActiveLink>
    </nav>
  )
}
