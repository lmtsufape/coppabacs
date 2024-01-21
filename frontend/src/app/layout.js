"use client";

import { Metadata } from 'next';
import { Inter } from 'next/font/google'
import './globals.css'
import PrivateRoute from '@/components/PrivateRoute';
import ProviderQuery from '@/components/ProviderQuery';
import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from '@/functions/checkIsPublicRoute';
import ProviderRedux from '@/components/ProviderRedux';


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
    <html lang="en">
      <body className={inter.className}>
          <ProviderQuery>
              <ProviderRedux>
                {isPublicPage && children}
                {!isPublicPage && (
                  <PrivateRoute>
                    {children}
                  </PrivateRoute>
                )}
                
              </ProviderRedux>
            </ProviderQuery>     
      </body>
    </html>
  )
}