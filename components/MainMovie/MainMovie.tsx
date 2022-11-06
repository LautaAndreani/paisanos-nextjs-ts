import Image from "next/image"
import { mainMovie, trailers } from "../../mocks/mock"

export default function MainMovie() {
  return (
    <div className="flex flex-col text-white relative">
      <div className="flex">
        <section className="flex w-1/2 min-h-screen">
          <div className="left-container m-auto min-h-[60%] min-w-full pl-20">
            <h2 className="text-8xl font-bold">{mainMovie.name}</h2>
            <span className="text-yellow text-3xl">★★★★☆</span>
            <p className="max-w-[30rem] mt-10 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et voluptate quas unde consequatur amet perspiciatis
              libero non perferendis molestiae. Sunt ut incidunt harum quod possimus nobis optio maiores aperiam.
            </p>
            <ul className="flex flex-col gap-4 mt-10 font-medium">
              <li>Genre: {mainMovie.genre}</li>
              <li>Duration: {mainMovie.duration}</li>
              <li>Rating: {mainMovie.rating}</li>
            </ul>
            <button className="font-bold text-2xl rounded-full w-1/2 p-10 bg-yellow text-black mt-10 transition hover:bg-yellow">
              Watch now
            </button>
          </div>
        </section>
        <section className="movie-right min-h-screen h-full w-1/2 relative">
          <span className="gradient bg-gradient-to-r from-black to-transparent h-full w-full absolute top-0"></span>
          <Image src={mainMovie.coverImage} alt={mainMovie.name} width={1200} height={1000} priority />
        </section>
      </div>

      <section className="min-w-full min-h-[20rem] pl-20 -mt-80 relative">
        <h2 className="text-4xl">Trailers</h2>
        <div className="carousel flex mt-6 justify-evenly">
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
