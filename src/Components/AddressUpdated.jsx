import PropTypes from 'prop-types'

export const AddressUpdated = ({ setShowAddressUpdated }) => {
	return (
		<div className='flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 desktop:mt-40 tablet:mt-20 phone:mt-12'>
			<div className='mx-auto max-w-2xl'>
				<div className='flex flex-col bg-white'>
					<button
						className='flex justify-end p-6'
						onClick={() => setShowAddressUpdated(false)}
					>
						<span className='h-6 w-6 text-xl'>✖</span>
					</button>

					<div className='flex justify-center p-5'>
						<h3 className='text-3xl font-semibold'>Address updated</h3>
					</div>

					<div className='flex flex-col justify-center p-6'>
						<p className='font-medium text-xl text-center'>
							New address added to your account
						</p>
						<p className='my-10 text-lg text-center'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad in
							quasi nisi nobis, dolor quibusdam fugiat. Est cumque eum
							blanditiis asperiores, officia assumenda repellendus ea, ratione
							perspiciatis maiores qui veritatis.
						</p>
					</div>
					<div className='flex justify-center desktop:p-6 tablet:p-2'>
						<button
							className='bg-red-300 text-white active:bg-red-400 font-bold uppercase text-xl w-1/2 py-3 rounded-3xl mr-1 mb-1 desktop:mt-14 tablet:mt-2'
							type='button'
							onClick={() => setShowAddressUpdated(false)}
						>
							UNDERSTOOD
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

AddressUpdated.propTypes = {
	setShowAddressUpdated: PropTypes.func,
}
