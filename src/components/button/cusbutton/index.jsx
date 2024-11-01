import React from "react";

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const CusButton = ({title,func}) => {
    return<div className="buttonwrapper ml-6 w-10/12 gap-2 uppercase flex bg-orange items-center justify-center font-semibold rounded-md py-2 text-white" onClick={func}>
        <DriveFolderUploadIcon/>
        <p>{title}</p>
    </div>
}
export default CusButton