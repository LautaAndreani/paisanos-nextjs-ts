import Image from 'next/image'
import { MovieDetail as MovieProps } from '../../models/types'
type Props = {
    movie: MovieProps
}

export default function MovieDetail({ movie }: Props) {
    return (
        <div className="flex text-white">
        <section className="flex w-1/2 min-h-screen">
            <div className="left-container m-auto min-h-[60%] min-w-full pl-20">
                <h2 className="text-8xl font-bold">{movie.name}</h2>
                <span className="text-yellow text-3xl">★★★★☆</span>
                <p className="max-w-[30rem] mt-10 leading-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et voluptate quas unde consequatur amet perspiciatis libero non
                    perferendis molestiae. Sunt ut incidunt harum quod possimus nobis optio maiores aperiam.
                </p>
                <ul className="flex flex-col gap-4 mt-10 font-medium">
                    <li>Genre: {movie.genre}</li>
                    <li>Duration: {movie.duration}</li>
                    <li>Rating: {movie.rating}</li>
                </ul>
                <button className="font-bold text-2xl rounded-full w-1/2 p-10 bg-yellow text-black mt-10 transition hover:bg-yellow">Watch now</button>
            </div>
        </section>
        <section className="movie-right min-h-screen h-full w-1/2 relative">
            <span className="gradient bg-gradient-to-r from-black to-transparent h-full w-full absolute top-0"></span>
            <Image src={movie.coverImage} alt={movie.name} width={1200} height={1000} priority />
        </section>
    </div>
    )
}