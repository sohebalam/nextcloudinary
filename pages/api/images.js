import nc from "next-connect"
import connectDB from "../../connectDB"

import onError from "../../middlewares/errors"
import { getImages } from "../../contollers/imageCont"

const router = nc({ onError })

connectDB()

router.get(getImages)

export default router
