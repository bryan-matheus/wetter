import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {MapPinIcon} from '@heroicons/react/24/solid';

export function Home() {
	const [temperature, setTemperature] = useState(20);
	const [city, setCity] = useState('London');
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
							{country}
						</p>
					</div>
				</motion.div>

				<label className={'relative block w-full'}>
					<span className={'sr-only'}>Search</span>
					<input className={'outline-none w-full py-4 pl-12 rounded bg-gray-200 text-gray-900 hover:outline-gray-400 focus:outline-gray-500 placeholder:text-gray-400'}
						type={'text'}
						autoFocus={false}
						placeholder={'Add your city'}/>
					<MapPinIcon className={'absolute inset-y-4 left-4 h-6 w-6 text-gray-400'}/>
				</label>
			</section>
		</main>
	);
}
