import nc from "next-connect"
import connectDB from "../../../connectDB"
import { imageUpdate } from "../../../contollers/imageCont"

import onError from "../../../middlewares/errors"

const router = nc({ onError })

connectDB()

router.put(imageUpdate)

export default router
