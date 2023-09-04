import Blogs from "./components/Blogs/Blogs"
import Landing from "./components/Landing"
import Navbar from "./components/Navbar/"
import PopularPosts from "./components/PopularPosts"

export default function Home() {
  return (
    <>
      <Landing />
      <PopularPosts />
      <Blogs />
    </>
  )
}
