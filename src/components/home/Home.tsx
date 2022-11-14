import type {ChangeEventHandler} from 'react';
import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {MapPinIcon} from '@heroicons/react/24/solid';
import {useQuery} from '@tanstack/react-query';
import {useDebouncedValue} from '@mantine/hooks';
import {fetchWeather} from '../../api/fetch';

export function Home() {
	const [search, setSearch] = useState('');
	const [debouncedSearch] = useDebouncedValue<string>(search, 200);

	const {data: weather} = useQuery({
		queryKey: ['weather', debouncedSearch],
		queryFn: async () => fetchWeather(debouncedSearch),
		enabled: debouncedSearch.length > 1,
	});

	const temperature = weather?.main?.temp ?? 21;
	const city = weather?.name ?? 'London';
	const country = weather?.sys?.country ?? 'GB';

	const onChange: ChangeEventHandler<HTMLInputElement> = e => {
		setSearch(e.target.value);
	};

	return (
		<main className={'min-h-screen flex justify-center items-center antialiased w-screen'}>
			<section className={'p-6 flex flex-col gap-8 max-w-2xl w-full'}>
				<motion.div className={'flex justify-center items-center gap-4 w-full'}
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
						placeholder={'Add your city'}
						value={search}
						onChange={onChange}/>
					<MapPinIcon className={'absolute inset-y-4 left-4 h-6 w-6 text-gray-400'}/>
				</label>
			</section>
		</main>
	);
}
