'use client';

import AuthService from "~/services/auth.service";
import Button from "../Button";

export default function LogoutButton() {
  return (
    <Button onClick={AuthService.logout}>Logout</Button>
  )
}
