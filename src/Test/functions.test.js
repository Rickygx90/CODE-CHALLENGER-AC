import { describe, test, expect } from 'vitest'
import { validatePostalCode } from '../Utils/functions'

const placeCorrect = {
	address_components: [
		{
			long_name: '11213',
			short_name: '11213',
			types: ['postal_code'],
		},
		{
			long_name: 'Brooklyn',
			short_name: 'Brooklyn',
			types: ['sublocality_level_1', 'sublocality', 'political'],
		},
		{
			long_name: 'Kings County',
			short_name: 'Kings County',
			types: ['administrative_area_level_2', 'political'],
		},
		{
			long_name: 'Nueva York',
			short_name: 'NY',
			types: ['administrative_area_level_1', 'political'],
		},
		{
			long_name: 'Estados Unidos',
			short_name: 'US',
			types: ['country', 'political'],
		},
	],
}

const placeIncorrect = {
	address_components: [
		{
			long_name: 'Guayacanes',
			short_name: 'Guayacanes',
			types: ['sublocality_level_1', 'sublocality', 'political'],
		},
		{
			long_name: 'Guayaquil',
			short_name: 'Guayaquil',
			types: ['locality', 'political'],
		},
		{
			long_name: 'Guayas',
			short_name: 'Guayas',
			types: ['administrative_area_level_1', 'political'],
		},
		{
			long_name: 'Ecuador',
			short_name: 'EC',
			types: ['country', 'political'],
		},
		{
			long_name: '12345',
			short_name: '12345',
			types: ['postal_code'],
		},
	],
}

describe('Functions.js', () => {
	test('Validate postal code into Zips permitidos', () => {
		const result = validatePostalCode(placeCorrect)
		expect(result).toBe(true)
	})

	test('Validate zip code outside of Zips permitidos', () => {
		const result = validatePostalCode(placeIncorrect)
		expect(result).toBe(false)
	})
})
