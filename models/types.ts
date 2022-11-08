export interface BaseResponse {
    _id: string,
    name: string,
    genre: string,
    duration: number,
    rating: number,
    views: number,
    coverImage: string,
    trailerImage:string
}

export interface MovieDetail {
    _id: string,
    name: string,
    genre: string,
    duration: number,
    rating: number,
    views: number,
    coverImage: string,
    trailerImage: string,
}

export interface Trailers {
    _id: string,
    trailerImage: string
}