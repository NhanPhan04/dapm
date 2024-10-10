import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './index.css'

const UpButton = ({title}) => {
    return<div className='UpButton-wrapper'>
         <Button variant="contained" color='#FA6819' endIcon={<SendIcon />}>
         {title}
      </Button>
    </div>
}
export default UpButton