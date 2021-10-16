import Course from "../models/courseModel"
import cloudinary from "../utils/cloudinary"

export const uploadImage = async (req, res) => {
  // console.log(req.body.data)

  const fileStr = req.body.data
  const result = await cloudinary.uploader.upload(fileStr, {
    folder: "ofu",
  })
  console.log(result)

  //   console.log(result)

  let imagesLinks = []

  imagesLinks.push({
    public_id: result.public_id,
    url: result.secure_url,
  })

  console.log("imageLinks", imagesLinks)
  req.body.images = imagesLinks

  // console.log()

  const course = await Course.create(req.body)

  res.status(200).json({
    success: true,
    course,
  })
}
export const imageDelete = async (req, res) => {
  console.log(req.method)

  return
}

export const getImages = async (req, res) => {
  console.log(req.method)

  const { resources } = await cloudinary.search
    .expression("folder:ofu")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()

  const publicIds = resources.map((file) => file.public_id)
  res.send(publicIds)
}
