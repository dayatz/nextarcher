'use client';

import Button from "~/components/Button";
import AuthService from "~/services/auth.service";

export default function LogoutButton() {
  return (
    <Button onClick={AuthService.logout}>Logout</Button>
  )
}
