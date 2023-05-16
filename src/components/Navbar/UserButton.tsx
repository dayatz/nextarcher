import AuthService from "~/services/auth.service";
import { FiUser } from 'react-icons/fi'

export default async function UserButton() {
  const u = await AuthService.getUser()
  return (
    <FiUser size={24} color="var(--color-primary)" />  
  )
}
