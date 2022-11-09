import MovieDetail from "../MovieDetail/MovieDetail"

import type { MovieDetail as MovieProps, Trailers } from "../../models/types"
type Props = { mainMovie: MovieProps; trailers: Trailers[] }

export default function MainMovie({ mainMovie, trailers }: Props) {
	return (
		<div className="flex flex-col relative">
			<MovieDetail movie={mainMovie} trailers={trailers} />
		</div>
	)
}
