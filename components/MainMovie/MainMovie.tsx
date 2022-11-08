import Image from "next/image"
import { mainMovie, trailers } from "../../mocks/mock"
import MovieDetail from "../MovieDetail/MovieDetail"

export default function MainMovie() {
  return (
    <div className="flex flex-col relative">
      <MovieDetail movie={mainMovie} />
    </div>
  )
}
