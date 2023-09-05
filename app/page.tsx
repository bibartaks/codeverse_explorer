import Blogs from "./components/Blogs/Blogs"
import Landing from "./components/Landing"
import LandingFooter from "./components/LandingFooter/LandingFooter"
import Navbar from "./components/Navbar/"
import PopularPosts from "./components/PopularPosts"

export default function Home() {
  return (
    <>
      <Landing />
      <PopularPosts />
      <Blogs />
      <LandingFooter />
    </>
  )
}
