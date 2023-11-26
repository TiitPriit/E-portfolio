import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
	return (
		<div className='bg-white'>
			<Navbar/>
			<Component {...pageProps} />
			<Analytics />
		</div>
	)
}

export default MyApp
