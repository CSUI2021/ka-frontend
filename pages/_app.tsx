import React from 'react'
import '../app/styles/globals.css'
import '../app/utils/fontawesome'
import { AppPropsWithLayoutInterface } from '../app/interfaces/AppPropsWithLayout,interface'
import LayoutController from '../app/layout/LayoutController'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function MyApp({ Component, pageProps }: AppPropsWithLayoutInterface) {
	return (
		<LayoutController Component={Component}>
			<Component {...pageProps} />
		</LayoutController>
	)
}
export default MyApp
