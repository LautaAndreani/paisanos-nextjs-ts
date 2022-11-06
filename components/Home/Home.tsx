import Featured from "../Featured/Featured"
import Footer from "../Footer/Footer"
import MainMovie from "../MainMovie/MainMovie"
import NavBar from "../NavBar/Navbar"

export default function HomeApp() {
	return (
		<div>
			<NavBar />
			<MainMovie />
			<Featured />
			<Footer />
		</div>
	)
}
