import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InputSearchAddress } from '../Components/InputSearchAddress'

describe('InputSearchAddress Component Test', () => {
	test('Show Loading...', () => {
		render(<InputSearchAddress />)
		expect(screen.getByText('Loading...')).toBeDefined()
	})
	test('Show placeholder Search address...', () => {
		render(<InputSearchAddress />)

		setTimeout(() => {
			expect(screen.findByPlaceholderText('Search address...'))
		}, '2000')
	})
})
