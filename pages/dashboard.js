import React, { useEffect, useState } from "react"
import { Image } from "cloudinary-react"
import axios from "axios"

export default function Home() {
  const [imageIds, setImageIds] = useState([])
  const loadImages = async () => {
    try {
      const { data } = await axios.get("/api/images")
      // console.log("res", res)
      // const data = await res.json()
      console.log("data", data)
      setImageIds(data)

      console.log("imageIds", imageIds)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    loadImages()
  }, [])
  return (
    <div>
      <h1 className="title">Cloudinary Gallery</h1>
      <div className="gallery">
        {imageIds &&
          imageIds.map((imageId, index) => (
            <Image
              key={index}
              cloudName={process.env.REACT_APP_CLOUDINARY_NAME}
              publicId={imageId}
              width="300"
              crop="scale"
            />
          ))}
      </div>
    </div>
  )
}
