import { useRouter } from "next/router";

export default function Movie () {
    const {query: { id }} = useRouter()
    return (
        /* TODO Add MovieDetail */
        <div>
        I'm a movie
    </div> )
}