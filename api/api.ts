import type { MovieDetail } from "../models/types"

const BASE_URL = "https://paisa-challange.herokuapp.com/api/v1/paisaflix"

export async function getData(query: string = "movies"): Promise<MovieDetail[] | undefined> {
	try {
		const data = await fetch(`${BASE_URL}${query}`)
		const response = await data.json()
		return response.data
	} catch (e) {
		if (e instanceof Error) {
			console.error(e.message)
		}
	}
}
