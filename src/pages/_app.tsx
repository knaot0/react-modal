import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AlertProvider } from '../components/alert/src/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AlertProvider>
      <Component {...pageProps} />
    </AlertProvider>
  )
}
export default MyApp
