import HomeApp from "../components/Home/Home"

import { getData } from "../api/api"
// Models
import { BaseResponse, Trailers } from "../models/types"
type Props = { movies: BaseResponse[], trailers: Trailers}

export default function Home({ movies, trailers }: Props) {
  return <HomeApp movie={movies} trailers={trailers}/>
}

export const getStaticProps = async () => {
  const movies = await getData("/movies")
  const trailers = await getData('/trailers')

  if (!movies || !trailers) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      movies,
      trailers
    },
    revalidate: 60,
  }
}
