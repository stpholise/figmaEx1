import { useDropzone } from 'react-dropzone'
import { useState } from 'react'

const Dropzone = () => {
  const [file, setFile ] = useState([])

  
    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles)
       
        setFile(acceptedFiles)
        // Do something with the files
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
              const binaryStr = reader.result
              console.log(binaryStr)
              console.log(file.path)
            }
            reader.readAsArrayBuffer(file)
            console.log(file)
          })
      }
      const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'text/plain': ['.txt'],
            'application/pdf': ['.pdf'],
            'application/msword': ['.doc'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
          },
          maxSize: 5242880, // Example: limit to 5 MB
          maxFiles: 1
      })
    

  return (
    <div>
         <div {...getRootProps()} style={{width: '100%', height: '202vh',  display:'flex', alignItems:'center', background:( isDragActive? 'red' : 'green') }}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag drop some files here, or click to select files</p>
      }
    </div>
    <p> {file} </p>

    <a href="geeksforgeeks.png" download="GFG">
        <button type="button">Download</button>
    </a>
    </div>
  )
}

export default Dropzone