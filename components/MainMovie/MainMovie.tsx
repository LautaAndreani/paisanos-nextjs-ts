import Image from "next/image"

const mock = {
  _id: "614283e7fafdff084b66e527",
  name: "Blade Runner",
  genre: "Action",
  duration: 190,
  rating: 4.5,
  views: 2500,
  coverImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/c_scale,q_64,w_669/v1631745380/APICHALLANGE/blade_ndzgpn.png",
  trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer_s2u8kt.png",
}

const trailers = [
  {
    _id: "614285ec4fdb7108daae17bd",
    trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer5_o9bfjt.png",
  },
  {
    _id: "6142861d4fdb7108daae17be",
    trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer2_w38qvq.png",
  },
  {
    _id: "614286a44fdb7108daae17bf",
    trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer4_d7sy5h.png",
  },
  {
    _id: "614286ee4fdb7108daae17c0",
    trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer3_euxvzy.png",
  },
  {
    _id: "6142872b4fdb7108daae17c1",
    trailerImage: "https://res.cloudinary.com/dvmll0ruo/image/upload/v1631747585/APICHALLANGE/trailer_s2u8kt.png",
  },
]
export default function MainMovie() {
  return (
    <div className="flex flex-col text-white relative">
      <div className="flex">
        <section className="flex w-1/2 min-h-screen">
          <div className="left-container m-auto min-h-[60%] min-w-full pl-20">
            <h2 className="text-8xl font-bold">{mock.name}</h2>
            <span className="text-yellow-300 text-3xl">★★★★☆</span>
            <p className="max-w-[30rem] mt-10 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis et voluptate quas unde consequatur amet perspiciatis
              libero non perferendis molestiae. Sunt ut incidunt harum quod possimus nobis optio maiores aperiam.
            </p>
            <ul className="flex flex-col gap-4 mt-10 font-medium">
              <li>Genre: {mock.genre}</li>
              <li>Duration: {mock.duration}</li>
              <li>Rating: {mock.rating}</li>
            </ul>
            <button className="font-bold text-2xl rounded-full w-1/2 p-10 bg-yellow-300 text-black mt-10 transition hover:bg-yellow-400">
              Watch now
            </button>
          </div>
        </section>
        <section className="movie-right min-h-screen h-full w-1/2 relative">
          <span className="gradient bg-gradient-to-r from-black to-transparent min-h-screen h-full w-full absolute top-0"></span>
          <Image src={mock.coverImage} alt={mock.name} width={1200} height={1000} />
        </section>
      </div>

      <section className="min-w-full min-h-[20rem] pl-20 -mt-80 relative">
        <h2 className="text-4xl">Trailers</h2>
        <div className="carousel flex mt-6 justify-evenly">
          {trailers.map((trailer, index) => {
            return (
              <span className="relative">
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
