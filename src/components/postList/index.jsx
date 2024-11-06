import { Link } from "react-router-dom"
import TextBaseSemi from "../text/semibold/text-base"

const PostList=({list})=>{

    return(
        <div className="PostList-wrapper flex flex-col gap-3">
            {list.length===0
            ?
            <div className="flex flex-col items-center justify-center h-96">
                <img className="w-36" src={`${process.env.PUBLIC_URL}/img/notpulic.png`} alt=""></img>
                <h1 className="font-bold text-orange-500 text-2xl">Bạn chưa đăng tin nào</h1>
                <Link to={"/uploadscreen"}>
                <button className="mt-5 px-3 py-2 uppercase text-white bg-orange-500 rounded-md font-semibold text-xl">Đăng tin ngay</button>
                </Link>
            </div>
            :
            <div>
            {list.map((item)=>(
                <PostListItem item={item}/>
            ))}
            </div>}
        </div>
    )
}
export default PostList


export const PostListItem=({item})=>{
    return(
        <div className="PostList-item mt-4 rounded-md py-2 flex gap-5 items-center">
            <img className="size-32 rounded-md" src={item.imgsrc} alt=""/>
            <div className="">
                <div className="text-orange-600">
                <TextBaseSemi text={item.title}/>
                </div>
                <TextBaseSemi text={item.location}/>
                <div className="flex gap-2">
                    <button className="mt-5 px-3 py-2 uppercase text-white bg-orange-500 rounded-md font-semibold text-base">Xem chi tiết</button>
                    <button className="mt-5 px-3 py-2 uppercase text-white bg-orange-500 rounded-md font-semibold text-base">Sửa thông tin</button>
                </div>
            </div>

            
            
        </div>
    )

}