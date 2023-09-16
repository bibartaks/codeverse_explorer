import React from "react"
import Image from "next/image"

export default function page() {
  return (
    <div className="min-h-[100vh] ">
      <div className="container m-auto py-[10rem] flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-5">About Us</h1>
          <p className="leading-[200%] text-justify max-w-[900px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi qui
            unde ducimus. Debitis, similique? Rerum eos ullam totam quod odio
            fugit ducimus odit perspiciatis minima cumque consequatur voluptatum
            id fuga molestiae, sed deleniti sit quasi asperiores vitae quis
            earum, magnam reprehenderit, exercitationem ex! Neque dolorum
            commodi minus nulla eius architecto autem et ex ullam perferendis
            facere corporis necessitatibus odit exercitationem similique velit
            reiciendis quam, veritatis rem! Voluptatibus esse tempore doloribus
            in amet aut repudiandae, nemo voluptates ut, velit quisquam
            obcaecati pariatur aspernatur quidem dolorem hic alias quasi dolor
            laborum, iure corrupti earum! Nihil, error fugit sint molestiae,
            eaque deserunt vel laborum minima tempore fuga molestias quae odio
            quasi ipsa voluptatum id! Nisi laborum facilis iste! Vel nulla fuga
            dolor libero, labore consequatur magnam sapiente quae dolore
            suscipit ea, reprehenderit commodi sit nam beatae, placeat optio in
            deserunt maiores. Expedita, vero cum. Ab laudantium nemo minima
            minus at? Aspernatur excepturi ea beatae. Consequuntur tempore qui
            praesentium aspernatur quos quasi voluptates aperiam tenetur
            reiciendis necessitatibus. Ea quidem ipsa accusantium itaque atque
            quos suscipit voluptatum sapiente dolorum illo neque repellendus
            mollitia sequi asperiores consequatur voluptatem architecto amet
            nulla nemo, aliquid ex facilis dolor fuga? Ea maxime magni
            voluptatibus. Deleniti facere quam deserunt. Odio!
          </p>
        </div>
        <div>
          <Image
            src="/about_us_image.jpg"
            height={500}
            width={500}
            alt="fuck you"
          />
        </div>
      </div>
    </div>
  )
}
