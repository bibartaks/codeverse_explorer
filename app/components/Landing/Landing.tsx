import Link from "next/link"
import Image from "next/image"

export default function Landing() {
  console.log(process.env.API_KEY)

  return (
    // <header className="h-[80vh] px-5 bg-[#142850] text-white">
    <header className="h-[80vh] px-5 bg-[#27005D] text-white">
      <div className="container  m-auto h-[100%] flex  justify-between items-center px-5">
        <div>
          <h1 className="text-3xl lg:text-7xl xll:text-7xl xll:text-7xl mb-5">
            Stay curious.
          </h1>
          <p className="lg:max-w-[600px] xl:max-w-[600px] xll:max-w-[600px] leading-[200%] text-sm lg:text-[1rem] xll:text-[1rem] xl:text-[1rem] lg:text-1xl mb-7">
            Dive into the boundless universe of programming and technology with
            CodeVerse Explorer, your passport to a world of digital discovery.
          </p>
          <Link
            className="bg-white px-4 py-2 text-black rounded-full hover:opacity-[0.8] text-sm lg:text-[1rem] xl:text-[1rem] xll:text-[1rem]"
            href="/"
          >
            Start reading
          </Link>
        </div>
        <div>
          {/* <Image
            src="/landing_img.jpg.avif"
            height={700}
            width={700}
            alt="Landing Image"
          /> */}
          {/* <div className="h-[400px] w-[400px] bg-green-400 blur-[100px] z-[-1]"></div> */}
        </div>
      </div>
    </header>
  )
}
