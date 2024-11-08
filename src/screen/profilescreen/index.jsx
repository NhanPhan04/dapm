import TextBaseNor from '../../components/text/normal/text-base'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './index.css'
import PostList from '../../components/postList';
import { RealEstate } from '../../data/realestate';


const ProfileScreen=()=>{
    const list=RealEstate.slice(0,3)
    return(
        <div className="ProfileScreen-wrapper bg-slate-100 ">
            <div className="py-12  flex justify-center ">
                <div className="wrapper flex px-36 mt-7 gap-5 ">
                <div className="w-2/5 rounded-md overflow-hidden h-fit shadow-sm bg-white pb-10">
                  <div className="relative w-full bg-slate-200">
                   <img className="h-28 w-full  " src={`${process.env.PUBLIC_URL}/img/nhatot.png`} alt=""/>
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
                    <div className='flex flex-col font-semibold gap-2 mt-3'>
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
                    <button className='text-center py-3 rounded-md bg-orange-400 w-full text-white font-semibold text-xl mb-3 mt-6'>
                        Chia sẻ trang cá nhân
                    </button>
                    <button className='text-center py-3 rounded-md border-2 w-full text-gray-700 font-semibold text-xl'>
                        Chỉnh sửa trang cá nhân
                    </button>
                  </div>    
                </div>
                
                <div className="w-3/5 px-5 py-3 rounded-md post-list bg-white shadow-sm ">
                 <div className='w-full'>
                    <div className='border-b-2 pb-4 border-orange-400'>
                     <h1 className='text-center text-orange-500 font-semibold text-2xl'>Danh sách đang hiển thị</h1>
                    </div>
                    <PostList list={list}/>
                 </div>
                </div>
                </div>
            </div>
        </div>
    )

}
export default ProfileScreen