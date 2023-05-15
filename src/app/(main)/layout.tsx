import '../globals.css'

import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'
import Navbar from '~/components/Navbar'
import Providers from '~/components/Providers'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Archer',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  if (!session?.user) {
    return redirect('/login')
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='max-w-lg mx-auto h-full'>
            {children}
          </div>
          <Navbar />
        </Providers>
      </body>
    </html>
  )
}
