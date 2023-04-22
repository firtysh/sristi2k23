import Head from 'next/head'
import Navbar from '@/components/Navbar'
export default function Home() {
	return (
		<>
			<Head>
				<title>SRISTI 2023</title>
				<meta name="description" content="The Content" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Navbar />
		</>
	)
}
