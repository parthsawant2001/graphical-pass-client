import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
// import '../styles/Pswd.css';
// import ContextProvider from '../Components/Context.jsx';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
