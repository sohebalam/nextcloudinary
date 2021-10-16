import nc from "next-connect"
import connectDB from "../../connectDB"

import onError from "../../middlewares/errors"
import { uploadImage } from "../../contollers/imageCont"

const router = nc({ onError })

connectDB()

router.post(uploadImage)

export default router
