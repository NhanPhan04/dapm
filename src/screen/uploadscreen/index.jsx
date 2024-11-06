import React, { useState } from "react";
import TextBaseSemi from "../../components/text/semibold/text-base";
import TextSmNor from "../../components/text/normal/text-sm";
import "./index.css";

const UpLoadScreen = () => {
  const [uploadImg, setUpLoadImg] = useState("");
  const [rentOrBuy, setRentOrBuy] = useState("Buy");

  // Function to handle the image import
  const importPicture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUpLoadImg(imageUrl);

      // Revoke the URL after the component unmounts or image is no longer needed
      return () => URL.revokeObjectURL(imageUrl);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log("Form submitted");
  };

  return (
    <div className="UpLoadScreen-wrapper relative">
      <div className="bg-slate-100 flex justify-center h-full py-12">
        <div className="w-full md:w-8/12 bg-white py-7 px-3 rounded-lg flex flex-col md:flex-row">
          <div className="w-full md:w-4/12 px-2">
            <TextBaseSemi text={"Hình ảnh Video Sản phẩm"} />
            <div className="flex gap-1">
              <TextSmNor text={"Xem thêm về"} />
              <a href="#" className="text-blue-700 underline">
                <TextSmNor text={"Quy định đăng tin của Chợ Tốt"} />
              </a>
            </div>
            <div className="uploadImg-wrapper mt-4">
              <div className="w-full h-60 border-2 rounded-md relative overflow-hidden">
                {uploadImg && (
                  <img
                    className="h-60 w-full object-cover"
                    src={uploadImg}
                    alt="Uploaded"
                  />
                )}
                <div className="flex items-center justify-center h-full">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Tải lên hình ảnh
                  </label>
                </div>
                <input
                  id="file-upload"
                  required
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={importPicture}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-8/12 px-2 mt-4 md:mt-0">
            <div className="flex justify-between">
              <h1
                className={`text-center w-1/2 cursor-pointer ${rentOrBuy === "Buy" ? "text-orange-400 " : ""}`}
                onClick={() => setRentOrBuy("Buy")}
              >
                Đăng tin về bán
              </h1>
              <h1
                className={`text-center w-1/2 cursor-pointer ${rentOrBuy === "Rent" ? "text-orange-400" : ""}`}
                onClick={() => setRentOrBuy("Rent")}
              >
                Đăng tin về thuê
              </h1>
            </div>

            <form className={rentOrBuy === "Buy" ? "uploadSell" : "uploadRent"} onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Tiêu đề</label>
                <input
                  type="text"
                  name="title"
                  className="form-input mt-1 block w-full px-3 py-2 border rounded"
                  placeholder="Nhập tiêu đề"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Thành phố</label>
                <input
                  type="text"
                  name="city"
                  className="form-input mt-1 block w-full px-3 py-2 border rounded"
                  placeholder="Nhập thành phố"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Mô tả chi tiết địa chỉ</label>
                <input
                  type="text"
                  name="detailedAddress"
                  className="form-input mt-1 block w-full px-3 py-2 border rounded"
                  placeholder="Số nhà, Tên đường, Khu phố,.."
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Diện tích (m²)</label>
                <input
                  type="number"
                  name="area"
                  className="form-input mt-1 block w-full px-3 py-2 border rounded"
                  placeholder="Nhập diện tích"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Loại bất động sản</label>
                <select
                  name="propertyType"
                  className="form-input mt-1 block w-full px-3 py-2 border rounded"
                  required
                >
                  <option value="">Chọn loại bất động sản</option>
                  <option value="house">Nhà</option>
                  <option value="apartment">Căn hộ</option>
                  <option value="land">Đất thổ cư</option>
                  
                </select>
              </div>
              <div className="form-group mb-4">
                <label className="block text-gray-700">Sổ đỏ</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="certificate"
                      value="has"
                      className="form-radio"
                      required
                    />
                    <span className="ml-2">Đã có sổ</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="certificate"
                      value="not-yet"
                      className="form-radio"
                      required
                    />
                    <span className="ml-2">Chưa có sổ</span>
                  </label>
                </div>
              </div>

              {rentOrBuy === "Buy" ? (
                <>
                  <div className="form-group mb-4">
                    <label className="block text-gray-700">Giá bán</label>
                    <input
                      type="number"
                      name="price"
                      className="form-input mt-1 block w-full px-3 py-2 border rounded"
                      placeholder="Nhập giá bán"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-4">
                    Đăng tin bán
                  </button>
                </>
              ) : (
                <>
                  <div className="form-group mb-4">
                    <label className="block text-gray-700">Giá thuê</label>
                    <input
                      type="number"
                      name="price"
                      className="form-input mt-1 block w-full px-3 py-2 border rounded"
                      placeholder="Nhập giá thuê"
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-gray-700">Thời hạn thuê</label>
                    <select
                      name="rentalPeriod"
                      className="form-input mt-1 block w-full px-3 py-2 border rounded"
                      required
                    >
                      <option value="">Chọn thời hạn thuê</option>
                      <option value="monthly">Hàng tháng</option>
                      <option value="yearly">Hàng năm</option>
                    </select>
                  </div>
                  <button type="submit" className="btn-primary mt-4">
                    Đăng tin thuê
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpLoadScreen;
