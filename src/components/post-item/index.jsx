import TextLgSemi from "../../components/text/semibold/text-lg";
import TextBaseSemi from "../../components/text/semibold/text-base";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextSmNor from "../../components/text/normal/text-sm";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextBaseNor from "../../components/text/normal/text-base";
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import TextSmSemi from "../text/semibold/text-sm";

const PostItem = ({ item }) => {
    const [favourite, setFavourite] = useState(false);

    const formatWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleTotalPrice = (price) => {
        if (price > 1_000_000_000) {
            return `${(price / 1_000_000_000).toFixed(1)} tỷ`;
        } else if (price > 1_000_000) {
            return `${(price / 1_000_000).toFixed(1)} triệu`;
        }
        return formatWithCommas(price);
    };

    const convertToPricePerM2 = (totalPrice, m2) => {
        const priceInMillions = totalPrice / 1_000_000; // Convert to millions
        return `${(priceInMillions / m2).toFixed(1)} tr/m²`;
    };
    

    const convertToNumber = (string) => {
        return parseInt(string.replace("m2", ""), 10);
    };

    const renderFavouriteButton = () => (
        favourite ? 
        <div className="rounded-lg p-2 favourite-btn text-orange-600 border-orange-600 border" onClick={() => setFavourite(false)}>
            <FavoriteIcon />
        </div> : 
        <div className="rounded-lg p-2 favourite-btn border-gray-700 border" onClick={() => setFavourite(true)}>
            <FavoriteBorderIcon />
        </div>
    );

    return (
        <div className="flex mt-4 gap-3 post-items p-3 rounded-md cursor-pointer">
            <img className="rounded-md" src={item.imgsrc} alt={item.category} />
            <div className="w-full">
                <div className="text-orange-400">
                 <TextLgSemi text={item.title} />
                </div>
                <div className="flex mt-1 gap-1">
                    <TextSmNor text={`${item.bedrooms}PN - `} />
                    <TextSmNor text={item.houseType} />
                </div>
                <div className="flex gap-2 items-center mt-1">
                    <div className="text-red-600">
                        <TextLgSemi text={handleTotalPrice(item.price)} />
                    </div>
                    <div className="rounded-full w-1 h-1 bg-slate-500"></div>
                    <TextBaseNor text={convertToPricePerM2(item.price, convertToNumber(item.area))} />
                    <div className="rounded-full w-1 h-1 bg-slate-500"></div>
                   
                    <TextBaseNor text={item.area} />
                </div>
                <div className="text-gray-500 mt-1">
                 <TextSmNor text={item.city} />
                </div>                
                <div className="user-mark flex justify-between items-center mt-4">
                    <div className="flex gap-1 items-center">
                        <AccountCircleIcon />
                        <div className="flex  gap-2 items-center">
                         <TextSmSemi text="Nguyễn Văn A" />
                         {item.sellerType==="Cá nhân" ?
                           <div className="rounded-md text-white text-xs items-center justify-center bg-black py-1 px-2 flex gap-1 uppercase">
                            <TextSmSemi text={item.sellerType}/>
                            <PersonIcon/>
                            
                           </div>
                           :
                           <div className="flex items-center justify-center bg-orange-600 py-1 px-2 rounded-md gap-1">
                             <div className=" text-white text-xs uppercase">
                               <TextSmSemi text={item.sellerType}/>
                             </div> 
                             <div className="text-white">
                              <GppGoodIcon />
                             </div>

                           </div>
                         }
                        </div>
                    </div>
                    {renderFavouriteButton()}
                </div>
            </div>
        </div>
    );
};

export default PostItem;
