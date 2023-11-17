import { zips } from './zips' // Import postal code array

// Function that sends object with address information and check if it exists in "zips permitidos.txt"
export const validatePostalCode = (place) => {
	// place.address_components is an array that containt information about address (library, bank, city_hall, etc)
	for (const addressComponent of place.address_components) {
		if (addressComponent.types[0] === 'postal_code') {
			// We are only interested in information related to the zip code
			const result = zips.find(
				(e) => e.toString() === addressComponent.long_name.toString()
			)
			// If the result exists, it means that the zip code has been found in "zips permitidos.txt" and we return true
			if (result) return true
		}
	}
	// If the result does not exist, it means that the zip code was not found in "zips permitidos.txt" and we return false
	return false
}
