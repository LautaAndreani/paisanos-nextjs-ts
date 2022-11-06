import Image from "next/image"

export default function Footer() {
	return (
		<footer className="text-white w-11/12 m-auto mt-20 py-10 mb-10 flex flex-wrap">
			<div className="flex flex-col gap-10 w-1/3">
				<h3 className="text-5xl font-medium">Paisaflix</h3>
				<span>
					<p>Join Newsletters</p>
					<div className="input flex justify-between items-center border py-3 w-[17rem] px-2 rounded-md mt-4 border-[#404040]">
						<input type="text" placeholder="Insert your mail here" className="bg-transparent placeholder:text-[#77777f] outline-none" />
						<button className="py-2 px-5 h-12 bg-yellow rounded-md">
							<figure>
								<img src="/icons/arrow.svg" alt="send newsletter icon" />
							</figure>
						</button>
					</div>
				</span>
			</div>

			<div className="flex gap-60">
				<ul className="flex flex-col justify-between">
					<li className="font-medium text-xl">Product</li>
					<li>
						<a href="">Movies</a>
					</li>
					<li>
						<a href="">TV Shows</a>
					</li>
					<li>
						<a href="">Videos</a>
					</li>
				</ul>
				<ul className="flex flex-col justify-between">
					<li className="font-medium text-xl">Media Group</li>
					<li>
						<a href="">Nice Studio</a>
					</li>
					<li>
						<a href="">Nice News</a>
					</li>
					<li>
						<a href="">Nice TV</a>
					</li>
				</ul>
				<ul className="flex flex-col justify-between">
					<li className="font-medium text-xl">Sitemap</li>
					<li>
						<a href="">About</a>
					</li>
					<li>
						<a href="">Careers</a>
					</li>
					<li>
						<a href="">Press</a>
					</li>
				</ul>
			</div>
			<div className="min-w-3/4 w-3/4 mt-20 flex justify-end p-4">
				<span className="flex gap-10">
					<figure className="flex gap-4 items-center">
						<Image src="/icons/location.svg" alt="location icon" width={20} height={20} className="w-4 h-auto" />
						<figcaption>8819 Enrique Martinez, Bs As., 90280</figcaption>
					</figure>
					<figure className="flex gap-4 items-center">
						<Image src="/icons/email.svg" alt="location icon" width={20} height={20} className="w-5 h-auto" />
						<figcaption>hola@paisanos.io</figcaption>
					</figure>
					<figure className="flex gap-4 items-center">
						<Image src="/icons/phone.svg" alt="location icon" width={20} height={20} className="w-5 h-auto" />
						<figcaption>+271 386-647-3637</figcaption>
					</figure>
				</span>
			</div>
		</footer>
	)
}
