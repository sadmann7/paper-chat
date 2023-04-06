import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"

import { Layout } from "@/components/layouts/layout"
import ToastWrapper from "@/components/toast-wrapper"
import "@/styles/globals.css"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>)

  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {getLayout(<Component {...pageProps} />)}
        <ToastWrapper />
      </ThemeProvider>
    </>
  )
}
