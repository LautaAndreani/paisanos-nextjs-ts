import { GetStaticProps } from "next"
import { getData } from "../../api/api"
import MovieDetail from "../../components/MovieDetail/MovieDetail"

import { type MovieDetail as PropDetail } from "../../models/types"
type Props = { movie: PropDetail }

export default function Movie({ movie }: Props) {
	return (
		<div>
			<MovieDetail movie={movie} />
		</div>
	)
}

export const getStaticPaths = async () => {
	const movies = await getData("/movies")

	return {
		paths: movies?.map(movie => ({ params: { id: movie._id } })),
		fallback: "blocking",
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const movie = await getData(`/movies/${params?.id}`)

	return {
		props: { movie },
		revalidate: 120,
	}
}
