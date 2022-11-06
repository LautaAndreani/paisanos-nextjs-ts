import Featured from "../Featured/Featured"
import MainMovie from "../MainMovie/MainMovie"
import NavBar from "../NavBar/Navbar"

export default function HomeApp() {
  return (
    <div>
      <NavBar />
      <MainMovie />
      <Featured />
    </div>
  )
}
