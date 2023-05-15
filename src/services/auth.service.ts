import { getServerSession } from 'next-auth'
import { signIn, signOut } from 'next-auth/react'
import { redirect } from 'next/navigation'

const AuthService = {
  login({ phone, password }: {
    phone: string,
    password: string
  }) {
    const result = signIn('credentials', {
      redirect: false,
      phone, password
    })
    /*
     * {
     *   ok: boolean,
     *   ...
     * }
    */
    return result
  },

  logout() {
    signOut({ redirect: true, callbackUrl: '/login' })
  },

  async getUser() {
    const session = await getServerSession()
    return session?.user ?? redirect('/')

  }
}

export default AuthService
