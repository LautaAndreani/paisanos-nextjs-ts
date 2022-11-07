import Image from "next/image"
import { mainMovie, trailers } from "../../mocks/mock"
import MovieDetail from "../MovieDetail/MovieDetail"

export default function MainMovie() {
	return (
		<div className="flex flex-col relative">
      <MovieDetail movie={mainMovie}/>

			<section className="min-w-full min-h-[20rem] pl-20 -mt-80 relative">
				<h2 className="text-4xl text-white">Trailers</h2>
				<div className="carousel flex mt-6 justify-evenly text-white">
					{trailers.map((trailer, index) => {
						return (
							<span className="relative" key={trailer._id}>
								<Image
									src={trailer.trailerImage}
									alt="movie trailer cover"
									width={320}
									height={300}
									className="object-cover transition hover:scale-105"
								/>
								<span className="absolute right-0 text-3xl -bottom-5">{`0${index + 1}`}</span>
							</span>
						)
					})}
				</div>
			</section>
		</div>
	)
}
