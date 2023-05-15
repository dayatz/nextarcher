import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import AuthService from "~/services/auth.service";

export default async function UserButton() {
  const u = await AuthService.getUser()
  return (
    <div>
      <span>{u.name}</span>
      <LogoutButton />
    </div>
  )
}
