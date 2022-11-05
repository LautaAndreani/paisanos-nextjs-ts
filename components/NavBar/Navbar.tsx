import Image from "next/image"

export default function NavBar() {
  return (
    <header>
      <nav className="flex justify-between items-center w-full p-6 text-white">
        <div className="flex items-center gap-10">
          <h1 className="text-4xl font-bold">PaisaFlix</h1>
          <div className="left-links">
            <ul className="flex gap-8">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <figure>
            <button>
              <Image src="/icons/search.svg" alt="search icon" width="20" height="20" />
            </button>
          </figure>
          <figure>
            <button>
              <Image src="/avatars/user.png" alt="avatar profile" width="40" height="40" />
            </button>
          </figure>
          <p className="font-bold">Soy Paisanx</p>
        </div>
      </nav>
    </header>
  )
}
