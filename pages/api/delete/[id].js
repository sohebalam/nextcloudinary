import nc from "next-connect"
import connectDB from "../../../connectDB"
import { imageDelete, deleteNestedArray } from "../../../contollers/imageCont"

import onError from "../../../middlewares/errors"

const router = nc({ onError })

connectDB()

router.delete(deleteNestedArray)

export default router
