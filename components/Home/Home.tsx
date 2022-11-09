import type { MovieDetail, Trailers } from "../../models/types"

import Featured from "../Featured/Featured"
import MainMovie from "../MainMovie/MainMovie"

type Props = {
	movies: MovieDetail[]
	trailers: Trailers[]
	mainMovie: MovieDetail
}

export default function HomeApp({ movies, trailers, mainMovie }: Props) {
	return (
		<div>
			<MainMovie mainMovie={mainMovie} trailers={trailers} />
			<Featured movies={movies} />
		</div>
	)
}
