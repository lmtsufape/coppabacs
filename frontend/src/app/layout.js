"use client";

import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import PrivateRoute from '@/components/PrivateRoute';
import ProviderQuery from '@/components/ProviderQuery';
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute';
import { UserProvider } from '@/components/UserProvider';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

//export const metadata= {
//  title: 'Coppabacs',
//  description: 'Banco de sementes',
//}
//Substituir dentro do body

export default function RootLayout({
  children,
}) {

  const pathName = usePathname();
  const isPublicPage = checkIsPublicRoute(pathName);
  return (
    <html lang="pt-br">
      <Head>
        <title>Coppabacs - Bancos de Sementes</title>
        <meta name="description" content="Plataforma de gerenciamento do banco de sementes da Coppabacs." />
        <html lang="pt-br" />
      </Head>
      <body className={inter.className}>
        <ProviderQuery>
          <UserProvider>
            {isPublicPage && children}
            {!isPublicPage && (
              <PrivateRoute>
                {children}
              </PrivateRoute>
            )}

          </UserProvider>
        </ProviderQuery>
      </body>
    </html>
  )
}