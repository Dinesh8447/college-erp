import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { HiInformationCircle } from 'react-icons/hi';
import { Alert, Progress } from 'flowbite-react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { app } from '../../firebase'
import defaultimage from '../assets/profile.jpg'


export default function ImageProfile({ setimagefileurl, imagefileurl }) {

  const [imagefile, setimagefile] = useState(null)
  const [imagefileuploadprocess, setimagefileuploadprocess] = useState(null)
  const [imagefileuploaderror, setimagefileuploaderror] = useState(null)
  const filepickerref = useRef()

  useEffect(() => {
    if (imagefile) {
      uploadimage()
    }
  }, [imagefile])

  console.log(imagefileuploadprocess)

  const uploadimage = async () => {
    const storage = getStorage(app)
    const filename = new Date().getTime() + imagefile.name
    const storageref = ref(storage, filename)
    const uploadtask = uploadBytesResumable(storageref, imagefile);
    uploadtask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setimagefileuploadprocess(progress.toFixed(0))
      },
      (error) => {
        setimagefileuploaderror('Could not upload image (File must be less then 2mb)')
        setimagefileuploadprocess(null)
      },
      () => {
        getDownloadURL(uploadtask.snapshot.ref).then((downloadURL) => {
          setimagefileurl(downloadURL)
          setimagefileuploaderror(null)
          setimagefileuploadprocess(null)
        })
      }
    )
  }

  const handleimagechange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setimagefile(file)
      setimagefileurl(URL.createObjectURL(file))
    }
  }

  return (
    <div>
        <input type="file" accept='image/*' hidden ref={filepickerref} onChange={handleimagechange} />
        <div className=" flex  justify-center  cursor-pointer overflow-hidden">
          <img onClick={() => filepickerref.current.click()} className={` ${imagefileuploadprocess && imagefileuploadprocess < 100 &&  'opacity-60'} rounded-full w-40 h-40 m-3 object-cover border-8 border-[lightgray] `} src={imagefileurl || defaultimage} alt="img" />
        </div>

        {imagefileuploadprocess && (
            <Progress progress={imagefileuploadprocess} 
            progressLabelPosition="inside"
            textLabel="uploading"
            textLabelPosition="outside"
            size="lg"
            labelProgress
            labelText
            color="purple" />
        )}

       {imagefileuploaderror ? (
         <Alert className='mt-5' color="failure" icon={HiInformationCircle}>
          <span className="font-medium">{imagefileuploaderror}</span>
        </Alert>
       ) : null} 
    </div>
  )
}
