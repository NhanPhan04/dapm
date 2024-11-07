import React, { useState, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = ({ onClose }) => {
    const [messages, setMessages] = useState(() => {
        // Lấy lịch sử chat từ localStorage nếu có
        const savedMessages = localStorage.getItem('chatHistory');
        return savedMessages ? JSON.parse(savedMessages) : [{ text: 'Chào bạn! Bạn cần hỗ trợ gì?', sender: 'bot' }];
    });
    const [input, setInput] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSend = () => {
        if (input.trim()) {
            const newMessage = { text: input, sender: 'user' };
            const updatedMessages = [...messages, newMessage];

            setMessages(updatedMessages);
            setInput('');

            // Lưu lịch sử chat vào localStorage
            localStorage.setItem('chatHistory', JSON.stringify(updatedMessages));

            // Phản hồi tự động
            setTimeout(() => {
                const botReply = { text: 'Xin lỗi, tôi chưa hiểu ý bạn. Bạn cần giúp đỡ gì?', sender: 'bot' };
                const updatedMessagesWithBot = [...updatedMessages, botReply];
                setMessages(updatedMessagesWithBot);

                // Cập nhật lại localStorage sau khi bot trả lời
                localStorage.setItem('chatHistory', JSON.stringify(updatedMessagesWithBot));
            }, 1000);
        }
    };

    const handleEndChat = () => {
        // Xóa lịch sử chat và reset lại tin nhắn ban đầu
        localStorage.removeItem('chatHistory');
        setMessages([{ text: 'Chào bạn! Bạn cần hỗ trợ gì?', sender: 'bot' }]);
        setMenuOpen(false); // Đóng menu sau khi chọn "Kết thúc trò chuyện"
    };

    return (
        <div className="chatbox-overlay">
            <div className="chatbox-container">
                <div className="chatbox-header">
                    <h2>ChatBox</h2>
                    
                    <button className="close-button" onClick={onClose}>✖</button>
                </div>
                <div className="chatbox-body">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="chatbox-footer">
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>⋮</div>
                {menuOpen && (
    <div className="chatbox-menu">
        <button onClick={() => {
            handleEndChat();
            onClose();
        }}>
            Kết thúc trò chuyện
        </button>
    </div>
)}
                   
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Nhập tin nhắn của bạn"
                        className="chatbox-input"
                    />
                    <button onClick={handleSend} className="send-button">Gửi</button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
