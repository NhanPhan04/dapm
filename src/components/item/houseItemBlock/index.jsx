import SmallButton from "../../button/smallbutton";
import RedXsSemi from "../../text/mark/redMark";
import TextBaseNor from "../../text/normal/text-base";
import TextXsNor from "../../text/normal/text-xs";
import TextXsSemi from "../../text/semibold/text-xs";

const HouseItemBlock = ({ item }) => {
    // Hàm ẩn chữ nếu vượt quá số ký tự cho phép (mặc định 20)
    function hideLongText(text, maxLength = 20) {
        if (text.length <= maxLength) return text; // Nếu chuỗi có độ dài <= 20 thì giữ nguyên
        return text.slice(0, maxLength) + '...'; // Giữ lại 20 ký tự đầu và thêm '...' để biểu thị phần bị ẩn
    }

    return (
        <div className="HouseItemBlock-wrapper px-1 py-1 flex flex-col gap-1">
            <img className="" src={item.imgsrc} alt={item.title || "House Image"} /> {/* Thêm alt hợp lý */}
            <TextBaseNor text={hideLongText(item.title)} /> {/* Ẩn text dài */}
            <TextXsNor text={item.description || "No description available."} /> {/* Fix lỗi chính tả và thêm giá trị mặc định */}
            <RedXsSemi text={item.price} />
            <div className="flex items-center justify-between">
                <SmallButton text={"Xem ngay"} />
                <TextXsSemi text={item.location} />
            </div>
        </div>
    );
};

export default HouseItemBlock;
