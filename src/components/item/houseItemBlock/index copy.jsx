import SmallButton from "../../button/smallbutton";
import RedXsSemi from "../../text/mark/redMark";
import TextBaseNor from "../../text/normal/text-base";
import TextSmNor from "../../text/normal/text-sm";
import TextXsNor from "../../text/normal/text-xs";
import TextXsSemi from "../../text/semibold/text-xs";
import './index.css'

const HouseItemBlockVer2 = ({ item }) => {
    // Hàm ẩn chữ nếu vượt quá số ký tự cho phép (mặc định 20)
    function hideLongText(text, maxLength = 25) {
        if (text.length <= maxLength) return text; // Nếu chuỗi có độ dài <= 20 thì giữ nguyên
        return text.slice(0, maxLength) + '...'; // Giữ lại 20 ký tự đầu và thêm '...' để biểu thị phần bị ẩn
    }
    function hideLongText1(text, maxLength = 20) {
        if (text.length <= maxLength) return text; // Nếu chuỗi có độ dài <= 20 thì giữ nguyên
        return text.slice(0, maxLength) + '...'; // Giữ lại 20 ký tự đầu và thêm '...' để biểu thị phần bị ẩn
    }


    return (
        <div className="HouseItemBlockVer2-wrapper px-2 py-2 flex flex-col gap-1 w-60">
            <img src={item.imgsrc} alt={item.title || "House Image"} className="w-full h-56"/> {/* Thêm alt hợp lý */}
            <TextSmNor text={hideLongText1(item.title)} /> {/* Ẩn text dài */}
            <div className="text-gray-500">
             <TextXsNor text={hideLongText(item.description) || "No description available."} /> {/* Fix lỗi chính tả và thêm giá trị mặc định */}
            </div>
            <RedXsSemi text={item.price} />
            <TextXsSemi text={item.location} />
            <div className="flex items-center justify-between">
                <SmallButton className="moimoi" text={"Xem ngay"} />
            </div>
        </div>
    );
};

export default HouseItemBlockVer2;
