"use client";

import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import PrivateRoute from '@/components/PrivateRoute';
import ProviderQuery from '@/components/ProviderQuery';
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute';
import ProviderRedux from '@/components/ProviderRedux';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


const inter = Inter({ subsets: ['latin'] })

//export const metadata= {
//  title: 'Coppabacs',
//  description: 'Banco de sementes',
//}
//Substituir dentro do body

export default function RootLayout({ children}) {

  const pathName = usePathname();
  const isPublicPage = checkIsPublicRoute(pathName);
  return (
    <html lang="pt-br">
      <head>
        <title>Coppabacs - Bancos de Sementes</title>
        <meta name="description" content="Plataforma de gerenciamento do banco de sementes da Coppabacs." />
        <html lang="pt-br" />
      </head>
      <body className={inter.className}>
        <ProviderQuery>
          <ProviderRedux>
            <Header/>
            {isPublicPage && children}
            {!isPublicPage && (
              <PrivateRoute>
                {children}
              </PrivateRoute>
            )}
            <Footer />
          </ProviderRedux>
        </ProviderQuery>
      </body>
    </html>
  )
}