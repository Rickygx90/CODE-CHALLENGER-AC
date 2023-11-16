import PropTypes from 'prop-types'

export const OutOfDeliveryArea = ({ setShowOutOfDeliveryArea }) => {
	return (
		<div className='flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 desktop:mt-40 tablet:mt-20 phone:mt-12'>
			<div className='mx-auto max-w-2xl'>
				<div className='flex flex-col bg-white'>
					<button
						className='flex justify-end p-6'
						onClick={() => setShowOutOfDeliveryArea(false)}
					>
						<span className='h-6 w-6 text-xl'>✖</span>
					</button>

					<div className='flex justify-center p-5'>
						<h3 className='text-3xl font-semibold'>Out of Delivery Area</h3>
					</div>

					<div className='flex flex-col justify-center p-6'>
						<p className='font-medium text-xl text-center'>
							&quot;Wherever I go, there Iam.&quot;
						</p>
						<p className='mt-10 text-lg text-center'>
							Sadly, this quote is not true for us. In other words, we are not
							operating in your area (yet), but things change everyday.
						</p>
						<p className='mt-5 mb-10 text-lg text-center'>
							Sign up to our newsletter to get notified.
						</p>
					</div>
					<div className='flex justify-center desktop:p-6 tablet:p-2'>
						<button
							className='bg-red-300 text-white active:bg-red-400 font-bold text-lg w-1/2 py-3 rounded-3xl mr-1 mb-5 desktop:mt-14 tablet:mt-2'
							type='button'
							onClick={() => setShowOutOfDeliveryArea(false)}
						>
							UNDERSTOOD
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

OutOfDeliveryArea.propTypes = {
	setShowOutOfDeliveryArea: PropTypes.func,
}
