import TextBaseNor from '../../components/text/normal/text-base'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import './index.css'
import PostList from '../../components/postList';
import { RealEstate } from '../../data/realestate';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
const ProfileScreen=()=>{
    const list = RealEstate.slice(0, 3);
    return (
        <div>
          <Header />
        <div className="ProfileScreen-wrapper bg-slate-100">
            <div className="py-12 flex justify-center">
                    {/* Profile Info Section */}
                    <div className="w-2/5 rounded-md overflow-hidden h-fit shadow-sm bg-white pb-10">
                        <div className="relative w-full bg-slate-200">
                            <img className="h-28 w-full" src={`${process.env.PUBLIC_URL}/img/nhatot.png`} alt="" />
                            <div className="absolute bottom-0 left-7 translate-y-1/2">
                                <div className="rounded-full w-20 h-20 bg-white p-1">
                                    <div className='bg-black w-full h-full rounded-full'></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 px-5">
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-semibold">Liêm</h1>
                                <div className="rounded-md flex gap-1 px-2 py-1 font-semibold text-white bg-orange-600">
                                    Đối tác
                                    <VerifiedUserIcon />
                                </div>
                            </div>
                            <div className="flex flex-col font-semibold gap-2 mt-3">
                                <div className="text-gray-500">
                                    <TextBaseNor text="Chưa có đánh giá" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="text-gray-500"><TextBaseNor text="Email:" /></div>
                                    <TextBaseNor text="liemp966@gmail.com" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="text-gray-500"><TextBaseNor text="SĐT:" /></div>
                                    <TextBaseNor text="0963674165" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="text-gray-500"><TextBaseNor text="Địa chỉ:" /></div>
                                    <TextBaseNor text="66/1 Nguyễn Tuyển, Phường Bình Trưng Tây" />
                                </div>
                            </div>
                            <button className="text-center py-3 rounded-md bg-orange-400 w-full text-white font-semibold text-xl mb-3 mt-6">
                                Chia sẻ trang cá nhân
                            </button>
                          
                            <Link to="/UpdateInfor">
                                <button className="text-center py-3 rounded-md border-2 w-full text-gray-700 font-semibold text-xl">
                                    Chỉnh sửa trang cá nhân
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Post List Section */}
                    
            </div>
        </div>
        <Footer />
        </div>

    );
};

export default ProfileScreen