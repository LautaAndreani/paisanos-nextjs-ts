import HomeApp from "../components/Home/Home"

import { getData } from "../api/api"
// Models
import type { MovieDetail, Trailers } from "../models/types"
type Props = { movies: MovieDetail[]; trailers: Trailers[]; mainMovie: MovieDetail }

export default function Home({ movies, trailers, mainMovie }: Props) {
	return <HomeApp movies={movies} trailers={trailers} mainMovie={mainMovie} />
}

export const getStaticProps = async () => {
	const movies = await getData("/movies")
	const trailers = await getData("/trailers")
	const mainMovie = await getData("/hero")

	if (!movies || !trailers || !mainMovie) {
		return {
			notFound: true,
		}
	}
	return {
		props: {
			movies,
			trailers,
			mainMovie,
		},
		revalidate: 60,
	}
}
