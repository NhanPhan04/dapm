import { useState } from "react"
import TextSmNor from "../../text/normal/text-sm"
import TextSmSemi from "../../text/semibold/text-sm"
import './index.css'

const SizeAdjustContent= ()=>{

    const landTransactions = [
        "Mua bán đất nhà ở: giao dịch mua bán đất với mục đích xây dựng nhà ở cá nhân hoặc gia đình.",
        "Mua bán đất dự án: giao dịch liên quan đến việc mua bán đất trong các dự án phát triển chẳng hạn như đất khu đô thị mới, khu công nghiệp, khu dân cư có quy mô lớn,...",
        "Mua bán đất kinh doanh: mua bán đất nhằm xây dựng cơ sở kinh doanh, cửa hàng, nhà hàng, văn phòng, hoặc khu thương mại.",
        "Mua bán đất nông nghiệp: giao dịch đất với mục đích sử dụng làm ruộng, trang trại hoặc các hoạt động nông nghiệp khác.",
        "Mua bán đất rừng: giao dịch đất với mục đích bảo tồn và quản lý nguồn lợi rừng.",
        "Mua bán đất đô thị: giao dịch đất trong các khu vực đô thị, thường là để xây dựng nhà ở hoặc dự án thương mại.",
        "Mua bán đất biệt thự: giao dịch đất với mục đích xây dựng các biệt thự cao cấp, thường là cho nhu cầu ở của nhóm khách hàng thượng lưu.",
        "Mua bán đất đô thị hóa: giao dịch đất trong các khu vực đang trải qua quá trình đô thị hóa, thường đi kèm với các dự án cơ sở hạ tầng và tiện ích công cộng.",
        "Mua bán đất công nghiệp: giao dịch đất để phát triển các khu vực công nghiệp, nhà máy sản xuất và các cơ sở hạ tầng liên quan.",
        "Mua bán đất vườn: giao dịch đất với mục đích làm vườn, trồng cây cảnh, hoặc phát triển các dự án nghệ thuật trang trí."
      ];

      const propertyTransactions = [
        "Mua bán nhà phố: giao dịch mua bán nhà phố, đây có thể là những ngôi nhà độc lập trong các khu đô thị hoặc khu vực ngoại ô.",
        "Mua bán biệt thự: giao dịch mua bán những ngôi nhà lớn có diện tích đất rộng và nhiều tiện ích cao cấp.",
        "Mua bán căn hộ dịch vụ: mua bán các căn hộ được thiết kế để cung cấp dịch vụ tiện nghi, thường kết hợp với các tiện ích như bể bơi, phòng tập gym, và sân chơi.",
        "Mua bán nhà ống (townhouse): giao dịch liên quan đến việc mua những căn nhà ống liên kế, thường có kiến trúc đồng nhất.",
        "Mua bán nhà lô góc: mua bán các căn nhà có vị trí đặc biệt là lô góc, thường có diện tích đất lớn hơn và có quang cảnh đẹp."
      ];
      
      const transactionMethods = [
        "Mua bán trực tiếp: Người mua và người bán trực tiếp đàm phán và ký kết hợp đồng mua bán bất động sản.",
        "Mua bán qua trung gian: Sử dụng dịch vụ của môi giới bất động sản để tìm kiếm và đàm phán giá cả, và họ sẽ giúp người mua và người bán ký kết hợp đồng mua bán.",
        "Mua bán đấu giá: Tài sản bất động sản được đưa vào đấu giá công khai và người mua đưa ra giá cao nhất sẽ trở thành người chiến thắng."
      ];
      
      const rentalMethods = [
        "Cho thuê dài hạn: Thời gian cho thuê từ 1 năm trở lên, người thuê có thể sử dụng tài sản và trả tiền thuê hàng tháng.",
        "Cho thuê ngắn hạn: Thời gian cho thuê thường trong khoảng vài ngày đến vài tháng, thường được sử dụng cho các mục đích du lịch hoặc thương mại như kinh doanh, triển lãm, sự kiện.",
        "Cho thuê văn phòng: Thường áp dụng cho doanh nghiệp, tổ chức với nhu cầu sử dụng một không gian làm việc.",
        "Cho thuê căn hộ dịch vụ: Có thể được thuê trong một hoặc một vài ngày, các dịch vụ và tiện nghi được cung cấp tương tự như khách sạn."
      ];
      

    const [sizeState,SetSizeState]=useState(false)
    const ChangeStateSmall = () =>{
        SetSizeState(false)
    }
    const ChangeStateBig = ()=>{
        SetSizeState(true)
    }
    return<div className="SizeAdjustContent-wrapper px-3 pb-2 pt-4 bg-white flex flex-col gap-3 rounded-lg text-gray-500 rrelative">
        {sizeState?(
            <div className="SizeAdjustContentBig-wrapper">
                <div className="text-center mt-2">
                    <TextSmSemi   text={"MUA BÁN VÀ CHO THUÊ BẤT ĐỘNG SẢN UY TÍN, NHANH CHÓNG TRÊN NHÀ TỐT"}/>
                    <em>
                        <TextSmNor text={"(Nhà Tốt: Nền Tảng Công nghệ Bất động sản được phát triển bởi Chợ Tốt)"}/>
                    </em>
                </div>
                <TextSmNor text={"Bất động sản là một loại tài sản có giá trị lớn và tính thanh khoản cao, do đó, mua bán và cho thuê bất động sản luôn là hoạt động kinh doanh thu hút rất nhiều nhà đầu tư, từ cá nhân đến doanh nghiệp."}/>
                <TextSmNor text={"Mua bán bất động sản là quá trình chuyển giao quyền sở hữu từ người này sang người khác, bao gồm các loại địa ốc như đất nền, đất vườn, đất nông nghiệp, nhà đất, chung cư,... Mỗi giao dịch thành công là cơ hội để người bán thu được lợi nhuận lớn, đôi khi từ hàng trăm triệu đến vài tỷ đồng, tùy thuộc vào giá trị và vị trí của tài sản."}/>

                <TextSmNor text={"Cho thuê bất động sản là hành động cho phép một cá nhân hoặc tổ chức sử dụng tài sản bất động sản của người khác trong một khoảng thời gian cụ thể, trong đó người thuê cam kết trả một khoản tiền xác định cho chủ sở hữu tài sản. Quá trình này được thực hiện thông qua việc thỏa thuận và ký kết hợp đồng cho thuê bất động sản, tạo nên một quan hệ hợp tác chặt chẽ giữa hai bên."}/>
                <TextSmNor text={"Tuy nhiên, để thành công trong lĩnh vực đầy cạnh tranh này đòi hỏi phải có kiến thức chuyên sâu về thị trường bất động sản, kỹ năng đàm phán và quản lý rủi ro để giảm thiểu tổn thất cũng như tối đa hóa lợi nhuận."}/>
                <TextSmNor text={"Với nhu cầu mua bán bất động sản ngày càng gia tăng như hiện nay, mỗi ngày, có hàng ngàn giao dịch BĐS diễn ra tại Nhà Tốt - nền tảng công nghệ bất động sản trực thuộc Chợ Tốt. Trong đó, có 5 loại hình bất động sản được quan tâm mua bán và cho thuê nhiều nhất."}/>
                <TextSmSemi text={"Các loại hình mua bán và cho thuê bất động sản trên Nhà Tốt"}/>
                <TextSmSemi text={"Mua bán và cho thuê đất"}/>

                 {landTransactions.map((item,index)=>(
                    <ul className="list-disc">
                        <li key={index} className="text-sm ml-7">{item}</li>
                    </ul>
                 ))}

                 <TextSmNor text={"Cho thuê đất là hoạt động mà người sở hữu đất cho người khác sử dụng đất trong một khoảng thời gian nhất định và nhận một khoản tiền thuê tương ứng."}/>
                 <TextSmNor text={"Người thuê đất sẽ được sử dụng đất như mục đích đã được thỏa thuận giữa hai bên trong hợp đồng thuê đất, như thuê đất xây nhà, thuê đất làm vườn, trồng cây, sản xuất kinh doanh,... hoặc các mục đích khác."}/>
                 <TextSmNor text={"Đối với bên cho thuê, việc cho thuê đất có thể đem lại thu nhập ổn định, tạo ra giá trị từ tài sản đất đai không có nhu cầu sử dụng. Còn đối với bên thuê, việc thuê đất có thể giúp họ tiết kiệm chi phí đầu tư ban đầu để sở hữu đất, đồng thời có thể tận dụng tối đa tiềm năng của đất để phục vụ cho mục đích của mình."}/>
                 
                 <TextSmSemi text={"Mua bán và cho thuê nhà đất - nhà ở"}/>
                 
                 <TextSmNor text={"Nhu cầu về mua bán và cho thuê nhà đất, nhà ở ngày càng trở nên đa dạng, phản ánh sự thay đổi của lối sống trong xã hội hiện đại. Các gia đình trẻ thường tìm kiếm căn hộ linh hoạt với tiện ích công cộng gần, trong khi đó những người yêu thiên nhiên có thể chọn những ngôi nhà rộng lớn ở ngoại ô."}/>
                 
                 <TextSmNor text={"Bên cạnh đó, xu hướng cho thuê nhà ở cũng trở nên phổ biến, đặc biệt trong cộng đồng thanh niên do nhu cầu di dân ra các thành phố lớn để học tập, lập nghiệp. Các căn hộ cao cấp, chung cư mini, hay nhà phố cho thuê ngắn hạn đáp ứng nhu cầu linh hoạt của người thuê. Ngược lại, những nhà đầu tư có thể tìm kiếm cơ hội đầu tư thông qua việc mua bán đất nền và phát triển dự án nhà ở."}/>
                 <TextSmNor text={"Nhu cầu đa dạng này đã tạo ra một thị trường đa sắc màu, với sự xuất hiện của các loại hình bất động sản mới, từ căn hộ dịch vụ đến các khu đô thị thông minh. Dự đoán trong tương lai, môi trường mua bán và cho thuê nhà đất sẽ tiếp tục thích ứng với sự biến đổi của xã hội, mang lại nhiều cơ hội và thách thức cho những người tham gia thị trường bất động sản."}/>

                 <TextSmNor text={"Dưới đây là một số loại hình mua bán nhà ở phổ biến:"}/>

                 {propertyTransactions.map((item,index)=>(
                    <ul className="list-disc">
                        <li key={index} className="text-sm ml-7">{item}</li>
                    </ul>
                 ))}

                 <TextSmNor text={"Thị trường nhà ở hiện nay liên tục đổi mới để đáp ứng nhu cầu đa dạng của cộng đồng và thích ứng với xu hướng phát triển nhanh chóng của xã hội."}/>

                 <TextSmSemi text={"Cho thuê phòng trọ"}/>

                 <TextSmNor text={"Cho thuê phòng trọ là một lĩnh vực kinh doanh trong lĩnh vực bất động sản phổ biến tại Việt Nam, đặc biệt là tại các khu vực đô thị phát triển nhanh, nơi tập trung đông sinh viên, công nhân và người lao động như TP. Hồ Chí Minh, Hà Nội, Đà Nẵng,..."}/>
                 <TextSmNor text={"Nhu cầu thuê phòng trọ đến từ các đối tượng đa dạng như sinh viên, người lao động xa nhà, và nhóm người có ngân sách nhà ở từ thấp tới trung bình khá. Điều này tạo ra một thị trường cho thuê phòng trọ đa dạng với nhiều loại hình khác nhau. Các căn phòng trọ mini, chung cư mini đang trở thành lựa chọn phổ biến cho nhóm người có nhu cầu sống linh hoạt và chi phí hợp lý."}/>
                 <TextSmNor text={"Thị trường cho thuê phòng trọ không chỉ là cơ hội kinh doanh mà còn đóng góp vào việc giải quyết vấn đề nhà ở ở các đô thị đông đúc. Sự đa dạng và linh hoạt trong các loại hình phòng trọ cung cấp cho cộng đồng nhiều lựa chọn phù hợp với nhu cầu và các mức ngân sách khác nhau."}/>
                 <TextSmNor text={"Sự xuất hiện của các dịch vụ trực tuyến và ứng dụng di động cũng đã thúc đẩy quá trình giao dịch cho thuê phòng trọ, giúp kết nối nhanh chóng giữa chủ nhà và người thuê. Đồng thời, các chính sách hỗ trợ và quy định về nhà ở cũng đã tạo ra một môi trường kinh doanh tích cực và an toàn cho các bên liên quan."}/>
                 <TextSmSemi text={"Sang nhượng, cho thuê mặt bằng kinh doanh và văn phòng"}/>
                
                 <TextSmNor text={"Thị trường kinh doanh BĐS ngày càng đa dạng với nhu cầu đặc biệt từ doanh nghiệp. Doanh thu đột phá trong thương mại và dịch vụ đã tạo ra nhu cầu cao cho các hình thức sang nhượng và cho thuê mặt bằng kinh doanh và văn phòng. Các doanh nghiệp có thể tận dụng không gian chia sẻ, chung cư văn phòng, hoặc thuê văn phòng ảo để tối ưu hóa chi phí và linh hoạt không gian làm việc. Điều này mở ra nhiều cơ hội cho chủ sở hữu bất động sản và doanh nghiệp thuê nhanh chóng và dễ dàng. Hơn nữa trong các loại hình BĐS, cho thuê hoặc sang nhượng văn phòng, mặt bằng kinh doanh có thể xem là hình thức kinh doanh ít rủi ro nhất."}/>
                 <TextSmNor text={"Việc thuê văn phòng giúp doanh nghiệp hoặc cửa hàng tiết kiệm chi phí hơn rất nhiều so với xây dựng mặt bằng kinh doanh. Hơn thế nữa, các doanh nghiệp cũng có thể tập trung vào hoạt động kinh doanh chính mà không phải lo lắng quá nhiều về bảo trì, sửa chữa và cải tạo văn phòng khi thuê."}/>
                 <TextSmNor text={"Bên cạnh đó, sang nhượng mặt bằng hoặc cho thuê mặt bằng kinh doanh, cho thuê văn phòng giúp mang lại thu nhập tự động cho nhà đầu tư hoặc chủ sở hữu."}/>
                 <TextSmSemi text={"Các hình thức mua bán và cho thuê bất động sản"}/>
                 <TextSmNor text={"Hình thức mua bán bất động sản:"}/>
                 {transactionMethods.map((item,index)=>(
                    <ul className="list-disc">
                        <li key={index} className="text-sm ml-7">{item}</li>
                    </ul>
                 ))}
                 <TextSmNor text={"Hình thức cho thuê bất động sản:"}/>
                 {rentalMethods.map((item,index)=>(
                    <ul className="list-disc">
                        <li key={index} className="text-sm ml-7">{item}</li>
                    </ul>
                 ))}

                 <div className="mt-2 text-blue-500 text-center cursor-pointer" onClick={()=>{
                    ChangeStateSmall()
                 }}>
                    <TextSmSemi text={"Thu gọn"}/>
                 </div>
            </div>
            
            
        ):(
            <div className="SizeAdjustContentSmall-wrapper">
                <div className="text-center mt-2">
                    <TextSmSemi   text={"MUA BÁN VÀ CHO THUÊ BẤT ĐỘNG SẢN UY TÍN, NHANH CHÓNG TRÊN NHÀ TỐT"}/>
                    <em>
                        <TextSmNor text={"(Nhà Tốt: Nền Tảng Công nghệ Bất động sản được phát triển bởi Chợ Tốt)"}/>
                    </em>
                </div>
                <TextSmNor text={"Bất động sản là một loại tài sản có giá trị lớn và tính thanh khoản cao, do đó, mua bán và cho thuê bất động sản luôn là hoạt động kinh doanh thu hút rất nhiều nhà đầu tư, từ cá nhân đến doanh nghiệp."}/>
                <TextSmNor text={"Mua bán bất động sản là quá trình chuyển giao quyền sở hữu từ người này sang người khác, bao gồm các loại địa ốc như đất nền, đất vườn, đất nông nghiệp, nhà đất, chung cư,... Mỗi giao dịch thành công là cơ hội để người bán thu được lợi nhuận lớn, đôi khi từ hàng trăm triệu đến vài tỷ đồng, tùy thuộc vào giá trị và vị trí của tài sản."}/>

                <TextSmNor text={"Cho thuê bất động sản là hành động cho phép một cá nhân hoặc tổ chức sử dụng tài sản bất động sản của người khác trong một khoảng thời gian cụ thể, trong đó người thuê cam kết trả một khoản tiền xác định cho chủ sở hữu tài sản. Quá trình này được thực hiện thông qua việc thỏa thuận và ký kết hợp đồng cho thuê bất động sản, tạo nên một quan hệ hợp tác chặt chẽ giữa hai bên."}/>
               
                <TextSmNor text={"................................Còn tiếp"}/>
                <div className="AdjustBig-btn text-center px-2 py-1 text-blue-600 cursor-pointer  " onClick={()=>{ChangeStateBig()}}>
                    <TextSmSemi text={"Đọc ngay"}/>
                </div>
            </div>
        )}
    </div>
}
export default SizeAdjustContent