import React, { useEffect, useState } from "react"
// import { Image } from "cloudinary-react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { loadImages } from "../redux/actions/imageActions"
import Image from "next/image"

export default function Home() {
  const dispatch = useDispatch()
  const [imageIds, setImageIds] = useState([])

  const image = useSelector((state) => state.image)
  const { loading, error, imageArray } = image

  console.log(imageArray)

  useEffect(() => {
    dispatch(loadImages())
  }, [])

  const imageUpdate = async (id) => {
    console.log(id)
    // var str = encodeURIComponent(id)
    // str.replace("ofu/", "")

    // console.log(str)

    const { data } = await axios.put(`/api/update/${id}`)
  }

  return (
    <div>
      <h1 className="title">Cloudinary Gallery</h1>
      <div className="gallery">
        {imageArray &&
          imageArray.map((image, index) => (
            <div key={index}>
              {/* <Image
                key={index}
                cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                publicId={imageId.images.public_id}
                width="300"
                crop="scale"
              /> */}
              <Image
                src={image?.images[0]?.url || "/v3.png"}
                alt={image.images.public_name}
                height={100}
                width={300}
              />
              <button onClick={() => imageUpdate(image._id)}>Update</button>
            </div>
          ))}
      </div>
    </div>
  )
}
