import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component Test', () => {
	test('Show title', () => {
		render(<App />)
		expect(screen.getByText('Where are you located?')).toBeDefined()
	})
})
