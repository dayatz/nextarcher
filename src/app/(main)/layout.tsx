import '../globals.css'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Plus_Jakarta_Sans } from 'next/font/google'

import Providers from '~/components/Providers'
import Navbar from '../../components/Navbar/Navbar'

const font = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '700'] })

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
      <body className={font.className}>
        <Providers>
          <div className='max-w-lg mx-auto h-full px-6 pt-9 pb-20 overflow-auto'>
            {children}
          </div>
          <Navbar />
        </Providers>
      </body>
    </html>
  )
}
