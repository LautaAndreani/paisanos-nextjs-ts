import { BaseResponse } from "../models/types"

const BASE_URL = "https://paisa-challange.herokuapp.com/api/v1/paisaflix"

export async function getData(query: string = "movies"): Promise<BaseResponse[] | undefined> {
  try {
    const data = await fetch(`${BASE_URL}/${query}`)
    const response = await data.json()
    // return response.data
    return {}
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message)
    }
  }
}
