import Course from "../models/courseModel"
import cloudinary from "../utils/cloudinary"

export const uploadImage = async (req, res) => {
  console.log(req.method)

  const images = req.body.images
  let imagesLinks = []

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "ofu",
    })

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    })
  }
  req.body.images = imagesLinks

  const course = await Course.create(req.body)

  res.status(200).json({
    success: true,
    course,
  })
}
