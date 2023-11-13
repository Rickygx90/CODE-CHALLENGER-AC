import mapPin from '../assets/map-pin.png'

export const InputGoogle = () => {
	const handleChange = (e) => {
		const { value } = e.target
		console.log(value)
	}
	return (
		<div className='relative py-14'>
			<input
				type='text'
				className='shadow w-full py-5 pl-14 pr-5 text-gray-800 font-medium text-2xl leading-tight focus:outline-none focus:shadow-outline'
				onChange={handleChange}
			/>
			<div className='absolute inset-y-0 left-0 flex items-center pl-4'>
				<img id='img' src={mapPin} className='h-7 w-6'></img>
			</div>
		</div>
	)
}
