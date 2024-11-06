import { Link } from 'react-router-dom'
import './index.css'

const RegisterScreen=()=>{
    return(
        <div className="flex justify-center items-center bg-url">
        <div className="bg-white shadow-inner rounded-md w-1/4 py-5">
            <div className='flex justify-center'>
             <img src={`${process.env.PUBLIC_URL}/img/nhatot.png`} className='w-1/3 ml-16' alt=''/>
            </div>
            <form className='px-9 flex flex-col gap-4'>
             <h1 className='text-xl font-bold'>Đăng kí</h1>
             <input type='text' required className='px-3 border py-3 rounded-md w-full' placeholder='Họ tên' />
             <input type='email' required className='px-3 border py-3 rounded-md w-full' placeholder='Email' />
             <input type='password' required className='px-3 border py-3 rounded-md w-full' placeholder='Mật khẩu' />
             <a href='' className='text-blue-600'>Quên mật khẩu</a>

             <button type='submit' className='py-4 w-full bg-orange-600 text-center text-white text-xl font-medium uppercase rounded-md'>Đăng kí</button>
            </form>
            <h3 className='text-center mt-4'>
                Đã có tài khoản ?<Link to={"/login"}> <a  className='font-semibold text-blue-600'>Đăng nhập ngay</a></Link>
            </h3>
            
        </div>
    </div>
    )
}
export default RegisterScreen