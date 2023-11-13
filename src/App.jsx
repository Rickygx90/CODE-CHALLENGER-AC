function App() {
	return (
		<div className='m-16 bg-slate-100 flex justify-center'>
			<div className='flex flex-col m-8 w-1/4'>
				<h2 className='text-4xl m-8 font-medium flex justify-center'>
					Where are you located?
				</h2>
				<p className='text-2xl font-medium flex justify-center m-2'>
					So we know where to drop off the stuff
				</p>
				<div className='flex justify-center m-2'>
					<p className='text-xl text-slate-500 text-center w-1/2'>
						We won&apos;t share your address with your ex (or whoever).
					</p>
				</div>

				<input
					type='text'
					className='border border-gray-300 text-gray-900 text-sm rounded-lg'
				/>
			</div>
		</div>
	)
}

export default App
