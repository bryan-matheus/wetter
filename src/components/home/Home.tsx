import React, {useState} from 'react';
import {motion} from 'framer-motion';

export function Home() {
	const [temperature, setTemperature] = useState(20);
	const [city, setCity] = useState('London');
	const [state, setState] = useState('England');
	const [country, setCountry] = useState('GB');

	return (
		<main className={'min-h-screen flex justify-center items-center antialiased'}>
			<section className={'p-6 flex flex-col gap-8'}>
				<motion.div className={'flex justify-center items-center gap-4'}
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 0.5, type: 'tween'}}>
					<strong className={'text-8xl font-medium text-gray-900'}>
						{temperature}°C
					</strong>
					<div className={'pl-4 border-l-4 border-gray-900'}>
						<h2 className={'text-5xl font-bold text-gray-900'}>
							{city}
						</h2>
						<p className={'text-5xl font-normal text-gray-900'}>
							{state}, {country}
						</p>
					</div>
				</motion.div>

			</section>
		</main>
	);
}
