import React from "react";
import './index.css'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const CusButton = ({title,func}) => {
    return<div className="buttonwrapper gap-2 uppercase flex bg-orange items-center justify-center font-semibold rounded-md py-2 text-white" onClick={func}>
        <DriveFolderUploadIcon/>
        <p>{title}</p>
    </div>
}
export default CusButton