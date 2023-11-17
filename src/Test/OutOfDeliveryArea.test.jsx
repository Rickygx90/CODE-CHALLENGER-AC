import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { OutOfDeliveryArea } from '../Components/OutOfDeliveryArea'

describe('AddressUpdated Component Test', () => {
	test('Show title', () => {
		render(<OutOfDeliveryArea />)
		expect(screen.getByText('Out of Delivery Area')).toBeDefined()
	})

	test('Show UNDERSTOOD button', () => {
		render(<OutOfDeliveryArea />)
		expect(screen.getAllByText('UNDERSTOOD')).toBeDefined()
	})
})
