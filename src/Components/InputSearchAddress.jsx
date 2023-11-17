import { useState } from 'react'
import mapPin from '../assets/map-pin.png'
import {
	LoadScript,
	Autocomplete,
	StandaloneSearchBox,
} from '@react-google-maps/api'
import { AddressUpdated } from './AddressUpdated'
import { OutOfDeliveryArea } from './OutOfDeliveryArea'
import { validatePostalCode } from '../Utils/functions'
const apiKey = import.meta.env.VITE_GOOGLE_APP_API_KEY
const libraries = ['places']

export const InputSearchAddress = () => {
	const [autocomplete, setAutocomplete] = useState(null)
	const [showAddressUpdated, setShowAddressUpdated] = useState(false)
	const [showOutOfDeliveryArea, setShowOutOfDeliveryArea] = useState(false)

	const onLoad = (autocomplete) => {
		setAutocomplete(autocomplete)
	}

	const onPlaceChanged = () => {
		if (autocomplete !== null) {
			const matchesZipCode = validatePostalCode(autocomplete.getPlace()) // Function that sends object with address information and check if it exists in "zips permitidos.txt"
			if (matchesZipCode) setShowAddressUpdated(true)
			// Shows "Address updated" popup if zip code was found in "zips permitidos.txt"
			else setShowOutOfDeliveryArea(true) // Shows "Out of Delivery Area" popup if zip code was not found in "zips permitidos.txt"
		} else {
			console.log('Autocomplete is not loaded yet!')
		}
	}

	return (
		<div className='relative py-14'>
			{/* show popups */}
			{showAddressUpdated && (
				<AddressUpdated setShowAddressUpdated={setShowAddressUpdated} />
			)}
			{showOutOfDeliveryArea && (
				<OutOfDeliveryArea
					setShowOutOfDeliveryArea={setShowOutOfDeliveryArea}
				/>
			)}
			{/* components of library @react-google-maps/api */}
			<LoadScript
				id='script-loader'
				googleMapsApiKey={apiKey}
				libraries={libraries}
			>
				<Autocomplete
					fields={['address_components']} // filters relevant properties to evaluate zip code (address_components)
					onLoad={onLoad}
					onPlaceChanged={onPlaceChanged}
					className='text-3xl'
				>
					<StandaloneSearchBox>
						<input
							type='text'
							className='shadow w-full py-5 pl-14 pr-5 font-bold text-xl leading-tight focus:outline-none focus:shadow-outline'
						/>
					</StandaloneSearchBox>
				</Autocomplete>
			</LoadScript>
			{/* div that contain map-pin image */}
			<div className='absolute inset-y-0 left-0 flex items-center pl-4'>
				<img id='img' src={mapPin} className='h-7 w-6'></img>
			</div>
		</div>
	)
}
