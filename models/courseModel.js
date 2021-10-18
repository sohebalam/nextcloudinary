import mongoose from "mongoose"

const { ObjectId } = mongoose.Schema

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    content: {
      type: {},
      minlength: 200,
    },
    video: {},
    free_preview: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)
const imageSchema = new mongoose.Schema({
  public_id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
    },
    // slug: {
    //   type: String,
    //   lowercase: true,
    // },
    // description: {
    //   type: {},
    //   minlength: 200,
    //   required: true,
    // },
    // price: {
    //   type: Number,
    //   default: 9.99,
    // },
    // images: [imageSchema],
    images: [imageSchema],
    // category: String,
    // published: {
    //   type: Boolean,
    //   default: false,
    // },
    // paid: {
    //   type: Boolean,
    //   default: true,
    // },
    // instructor: {
    //   type: ObjectId,
    //   ref: "User",
    //   required: true,
    // },
    // lessons: [lessonSchema],
  },
  { timestamps: true }
)

export default mongoose.models.Course || mongoose.model("Course", courseSchema)
