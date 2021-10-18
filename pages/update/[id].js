import React, { useState } from "react"
import Alert from "@mui/material/Alert"
import { useRouter } from "next/router"

export default function Update() {
  const [fileInputState, setFileInputState] = useState("")
  const [previewSource, setPreviewSource] = useState("")
  const [selectedFile, setSelectedFile] = useState()
  const [successMsg, setSuccessMsg] = useState("")
  const [errMsg, setErrMsg] = useState("")

  const router = useRouter()

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]
    previewFile(file)
    setSelectedFile(file)
    setFileInputState(e.target.value)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (e) => {
    e.preventDefault()
    if (!selectedFile) return
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = () => {
      uploadImage(reader.result)
    }
    reader.onerror = () => {
      console.error("AHHHHHHHH!!")
      setErrMsg("something went wrong!")
    }
  }

  const { id } = router.query

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch(`/api/update/${id}`, {
        method: "PUT",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
      setFileInputState("")
      setPreviewSource("")
      setSuccessMsg("Image uploaded successfully")
    } catch (err) {
      console.error(err)
      setErrMsg("Something went wrong!")
    }
  }
  return (
    <div>
      <h1 className="title">Upload an Image</h1>
      {errMsg && <Alert severity="error">{errMsg} </Alert>}
      {successMsg && <Alert severity="success">{successMsg} </Alert>}

      <form onSubmit={handleSubmitFile} className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <input type='text" name="title' />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  )
}