'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'

import Button from "~/components/Button";
import Input from "~/components/Input";
import AuthService from '~/services/auth.service';

type FormValues = {
  phone: string,
  password: string
}

export default function LoginForm() {
  const { handleSubmit, register } = useForm<FormValues>()

  const router = useRouter()
  const onSubmit = async (values: FormValues) => {
    const result = await AuthService.login({
      phone: values.phone,
      password: values.password
    })
    router.replace('/')
    console.log(result)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="phone">Nomor HP</label>
        <Input id="phone" autoFocus {...register('phone')} placeholder="081..." required />
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="password">Password</label>
        <Input type="password" id="psasword" {...register('password')} required />
      </div>
      <div className="mt-4">
        <Button type="submit" variant="primary" className="w-full">Login</Button>
      </div>
    </form>
  )
}
