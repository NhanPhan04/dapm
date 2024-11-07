import React, { useState } from 'react';
import './Favorites.css';
import ChatBox from '../ChatBox/ChatBox';

const FavoritesPage = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

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

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };
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
                            <button className="chat-button" onClick={handleChatOpen}>Chat</button>
                            <button className="like-button">❤️</button>
                        </div>
                    </div>
                ))}
            </div>

            {isChatOpen && <ChatBox onClose={handleChatClose} />}
        </div>
    );
};

export default FavoritesPage;