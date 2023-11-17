import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AddressUpdated } from '../Components/AddressUpdated'

describe('AddressUpdated Component Test', () => {
	test('Show title', () => {
		render(<AddressUpdated />)
		expect(screen.getByText('Address updated')).toBeDefined()
	})

	test('Show UNDERSTOOD button', () => {
		render(<AddressUpdated />)
		expect(screen.getAllByText('UNDERSTOOD')).toBeDefined()
	})
})
