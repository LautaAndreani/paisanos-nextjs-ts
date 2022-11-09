import Image from "next/image"
import type { Trailers as TrailersType } from "../../models/types"

type Props = {
	trailer: TrailersType
	index?: number
}
export default function Trailers({ trailer, index }: Props) {
	const hasIndex = index ? `0${index}` : null
	return (
		<span className="relative" key={trailer._id}>
			<Image src={trailer.trailerImage} alt="movie trailer cover" width={320} height={300} className="object-cover transition hover:scale-105" />
			<span className="absolute right-0 text-3xl -bottom-5">{hasIndex}</span>
		</span>
	)
}
