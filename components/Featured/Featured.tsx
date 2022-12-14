import Image from "next/image"
import Link from "next/link"
import { MovieDetail } from "../../models/types"

type Props = { movies: MovieDetail[] }
export default function Featured({ movies }: Props) {
	return (
		<section className="featured text-white  w-11/12 m-auto">
			<div className="flex items-center justify-between">
				<h2 className="text-5xl font-medium">Featured</h2>
				<p className="text-yellow">View more</p>
			</div>
			<div className="featured-content grid grid-cols-3 grid-rows-2 gap-4 mt-6">
				{movies.map((res, index) => (
					<span className={`min-w-full min-h-full h-fit overflow-hidden relative ${index === 0 ? "col-span-2" : ""}`} key={res._id}>
						<Link href={`/movie/${res._id}`}>
							<span className="gradient bg-gradient-to-t from-black to-transparent h-full w-full absolute top-0"></span>
							<div className="h-full w-full absolute top-0 flex flex-col justify-between p-4">
								<span className="badge w-fit py-3 px-6 rounded-full bg-yellow text-black">{res.genre}</span>
								<div className="flex flex-col gap-4">
									<div className="flex gap-4 items-center">
										<Image src="/icons/clock.svg" alt="duration icon" width={30} height={30} />
										<span className="text-gray">{res.duration}</span>
										<Image src="/icons/eye.svg" alt="views icon" width={30} height={40} className="w-auto h-4" />
										<span className="text-gray">{res.views}k views</span>
									</div>
									<h3 className="text-3xl font-medium">{res.name}</h3>
								</div>
							</div>
							<Image src={res.coverImage} alt={res.name} width={1900} height={1000} priority className="object-cover" />
						</Link>
					</span>
				))}
			</div>
		</section>
	)
}
