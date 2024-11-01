import TextBaseNor from '../../components/text/normal/text-base'
import TextBaseSemi from '../../components/text/semibold/text-base'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TextLgSemi from '../../components/text/semibold/text-lg'
import './index.css'


const ProfileScreen=()=>{
    return(
        <div className="ProfileScreen-wrapper">
            <div className="bg-slate-50 flex justify-center">
                <div className="wrapper flex px-36 mt-7">
                <div className="w-2/5 rounded-sm  bg-white">
                  <div className="relative w-full bg-slate-200">
                   <img className="h-20 w-full " src={`${process.env.PUBLIC_URL}/img/nhatot.png`} alt=""/>
                    <div className="absolute translateY-50percent bottom-0 left-7">
                     <div className="rounded-full w-20 h-20 bg-white p-1">
                        <div className='bg-black w-full'></div>
                     </div>
                    </div>
                  </div>

                  <div className='mt-12 px-3'>
                    <div className='flex items-center gap-2'>
                     <h1 className='text-2xl font-semibold'>
                        Liêm
                     </h1>
                     <div className='rounded-md flex gap-1 px-2 py-1 font-semibold text-white bg-orange-600'>
                        Đối tác
                        <VerifiedUserIcon/>
                     </div>
                    </div>
                    <div className='text-gray-500'>
                     <TextBaseNor text={"Chưa có đánh giá"}/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-gray-500'><TextBaseNor text={"Email:"}/></div>
                        <TextBaseNor text={"liemp966@gmail.com"}/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-gray-500'><TextBaseNor text={"SĐT:"}/></div>
                        <TextBaseNor text={"0963674165"}/>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-gray-500'><TextBaseNor text={"Địa chỉ:"}/></div>
                        <TextBaseNor text={"66/1 Nguyễn Tuyển, Phường Bình Trưng Tây"}/>
                    </div>
                   
                  </div>    
                </div>
                <div className="w-3/5 rounded-md">
                 <div className='w-full flex'>
                  <div className='w-1/2 '></div>
                  <div className='w-1/2 '></div>


                 </div>
                </div>
                </div>
            </div>
        </div>
    )

}
export default ProfileScreen