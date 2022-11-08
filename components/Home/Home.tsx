import type { MovieDetail, Trailers } from "../../models/types"

import Featured from "../Featured/Featured"
import MainMovie from "../MainMovie/MainMovie"

type Props = {
	movie: MovieDetail[],
	trailers: Trailers
}

export default function HomeApp({ movie }: Props) {
	return (
		<div>
			<MainMovie />
			<Featured />
		</div>
	)
}
