import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#F2F2F2] grid w-full overflow-hidden">
      <Head>
        <title>Skilled</title>
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
