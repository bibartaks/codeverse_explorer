import Landing from "./components/Landing/Landing"
import Navbar from "./components/Navbar/"
import PopularPosts from "./components/PopularPosts/PopularPosts"

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <PopularPosts />
    </>
  )
}
