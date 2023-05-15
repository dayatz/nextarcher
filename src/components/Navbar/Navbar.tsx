import UserButton from "./UserButton";

export default function Navbar() {
  return (
    <div className="h-14 border-t shadow-sm border-t-slate-300 fixed bottom-0 w-full">
      <h1>Navbar</h1>

      {/* @ts-expect-error Async Server Component */}
      <UserButton />
    </div>
  )
}
