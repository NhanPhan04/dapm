import React from 'react';
import './Favorites.css';

const FavoritesPage = () => {
    // Dữ liệu mẫu cho mục yêu thích (có thể thay thế bằng dữ liệu thực từ backend)
    const favoriteItems = [
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
          {
            id: 1,
            title: 'Cho thuê căn hộ View',
            price: '16 triệu/tháng',
            area: '80 m²',
            date: 'Hôm qua',
            location: 'Quận 4',
            imageUrl: '/img/notpulic.png'
            // Đường dẫn tới ảnh của căn hộ
        },
        // Thêm nhiều mục hơn ở đây nếu cần
    ];

    return (
        <div className="favorites-page">
            <h1>Tin Đăng Đã Lưu (7/100)</h1>
            <div className="favorites-list">
                {favoriteItems.map(item => (
                    <div key={item.id} className="favorite-item">
                        <img src={item.imageUrl} alt="Favorite Item" className="favorite-image" />
                        <div className="favorite-details">
                            <h2>{item.title}</h2>
                            <p className="favorite-price">{item.price} - {item.area}</p>
                            <p className="favorite-location">{item.date} • {item.location}</p>
                        </div>
                        <div className="favorite-actions">
                            <button className="chat-button">Chat</button>
                            <button className="like-button">❤️</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
