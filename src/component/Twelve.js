import React,{useState} from 'react'
//craete the file uploader component that alow user to upload



function Twelve() {

    const [file,setFile]= useState(null);

    const handleFileChange = (e) =>{
        const selectedfile = e.target.files[0];
        setFile(selectedfile);
    }
  return (
    <div>
      <input type='file' accept='images/*' onChange={handleFileChange} />
      {file && <img src ={URL.createObjectURL(file)} alt ='uploaded' />}
    </div>
  )
}

export default Twelve;
