import type { AuthOptions, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        phone: { type: 'text'},
        password: { type: 'password'},
      },
      async authorize(creds) {
        console.log('------------------')
        console.log({ auth: creds })

        // get user
        if (creds?.phone.includes('err')) {
          throw new Error('invalid credentials.')
        }
        const user: User = {
          id: '123',
          name: 'myname',
          email: 'my@email.com'
        }
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)

export {
  handler as GET,
  handler as POST
}
