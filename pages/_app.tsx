import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// Agregar configuracion especifica de React
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
