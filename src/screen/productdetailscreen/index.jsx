import React from "react";
import { useParams } from "react-router-dom";

import { RealEstate } from "../../data/realestate";

const ProductDetail = () => {
  const { id } = useParams();
  const product = RealEstate.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  console.log(product.legalDocuments)

  return (
    <div className="bg-gray-100 flex justify-center">
        <div className="wrapper mb-12 mt-9">

      <div className="container mx-auto bg-orange-400 rounded-lg shadow-lg p-6 md:p-12 flex flex-col md:flex-row space-y-6 md:space-y-0">
        {/* Left Column - Image Gallery */}
        <div className="w-full md:w-2/3 flex flex-col items-center">
          <img
            src={product.imgsrc}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
          <div className="mt-4 flex space-x-2">
            {/* Thumbnail images */}
            {product.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-200 hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Right Column - Seller and Contact Information */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-lg shadow-inner ml-7">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h3 className="text-lg font-semibold">{product.sellerName}</h3>
              <p className="text-sm text-gray-500">{product.sellerType}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">Hoạt động {product.updatedAt.toLocaleDateString()}</p>
          <button className="w-full bg-green-500 text-white py-2 mt-4 rounded-md font-semibold">
            Gọi {product.phone ? product.phone : "097xxx ***"}
          </button>
          <div className="mt-4">
            <button className="bg-gray-200 px-4 py-2 rounded-full text-sm font-medium mr-2">
              Căn hộ này còn không ạ?
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-full text-sm font-medium">
              Thời hạn tin đăng
            </button>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="container mx-auto mt-8 bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800">{product.title}</h2>
        <p className="text-xl text-orange-500 font-semibold mt-2">
          {product.price.toLocaleString()} VNĐ • {product.area} • {product.bedrooms} PN
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {product.location}, {product.city}
        </p>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">Đặc điểm bất động sản</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="border-b py-2 flex justify-between">
              <span className="text-gray-600">Loại nhà</span>
              <span className="text-gray-800 font-medium">{product.houseType}</span>
            </div>
            <div className="border-b py-2 flex justify-between">
   
              <span className="text-gray-600">Giấy tờ pháp lý</span>
              <span className="text-gray-800 font-medium"> {product.legalDocuments}</span>
            </div>
            <div className="border-b py-2 flex justify-between">
              <span className="text-gray-600">Số phòng ngủ</span>
              <span className="text-gray-800 font-medium">{product.bedrooms}</span>
            </div>
            <div className="border-b py-2 flex justify-between">
              <span className="text-gray-600">Số phòng tắm</span>
              <span className="text-gray-800 font-medium">{product.bathrooms}</span>
            </div>
            <div className="border-b py-2 flex justify-between">
              <span className="text-gray-600">Hướng nhà</span>
              <span className="text-gray-800 font-medium">{product.direction}</span>
            </div>
            <div className="border-b py-2 flex justify-between">
              <span className="text-gray-600">Cập nhật</span>
              <span className="text-gray-800 font-medium">{product.updatedAt.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
  );
};

export default ProductDetail;
