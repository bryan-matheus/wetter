import React, {Fragment} from 'react';
import Head from 'next/head';
import {Home} from '../components/home/Home';

export default function Page() {
	return (
		<Fragment>
			<Head>
				<title>Wetter — Your Source for Local Weather, Climate Updates</title>
				<link rel={'icon'} href={'/favicon.ico'} />
				<meta name='viewport' content='width=device-width, initial-scale=1'/>

				<meta name='title' content='Wetter — Your Source for Local Weather, Climate Updates'/>
				<meta name='description' content='Stay up-to-date with the latest climate change news, local weather forecasts and more. Wetter provides detailed meteorological information for the entire world.'/>

				<meta property='og:type' content='website'/>
				<meta property='og:url' content='https://metatags.io/'/>
				<meta property='og:title' content='Wetter — Your Source for Local Weather, Climate Updates'/>
				<meta property='og:description' content='Stay up-to-date with the latest climate change news, local weather forecasts and more. Wetter provides detailed meteorological information for the entire world.'/>
				<meta property='og:image' content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'/>

				<meta property='twitter:card' content='summary_large_image'/>
				<meta property='twitter:url' content='https://metatags.io/'/>
				<meta property='twitter:title' content='Wetter — Your Source for Local Weather, Climate Updates'/>
				<meta property='twitter:description' content='Stay up-to-date with the latest climate change news, local weather forecasts and more. Wetter provides detailed meteorological information for the entire world.'/>
				<meta property='twitter:image' content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'/>
			</Head>
			<Home/>
		</Fragment>
	);
}
