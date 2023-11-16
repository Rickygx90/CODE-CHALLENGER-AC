import { InputSearchAddress } from './Components/InputSearchAddress'

function App() {
	return (
		<div className='m-12 h-full bg-slate-100 flex justify-center'>
			<div className='flex flex-col m-5 desktop:w-1/2 tablet:w-full'>
				<h2 className='text-4xl m-8 font-medium flex justify-center text-center'>
					Where are you located?
				</h2>
				<p className='text-2xl font-medium flex justify-center m-2 text-center'>
					So we know where to drop off the stuff
				</p>
				<div className='flex justify-center m-2'>
					<p className='text-xl text-slate-500 text-center w-1/2'>
						We won&apos;t share your address with your ex (or whoever).
					</p>
				</div>
				<InputSearchAddress />
			</div>
		</div>
	)
}

export default App
