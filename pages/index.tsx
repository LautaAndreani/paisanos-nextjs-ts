import HomeApp from "../components/Home/Home"

import { getData } from "../api/api"
// Models
import { BaseResponse } from "../models/types"
type Props = { data: BaseResponse[] }

export default function Home({ data }: Props) {
  return <HomeApp />
}

export const getStaticProps = async () => {
  const data = await getData("/movies")

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}
