import React from 'react';

/**
 * 
 * @param {Object} item Через пропсы передаем элемент массива - объект 
 * @returns возвращаем элемент списка "li" c заполненными данными из пропсов
 * 
 */
const ChatItem = ({ item }) => {
    /**
     * с помощью диструктуризации получаем значения ключей объекта
     */
    const { name, message, date } = item
    return (
        <li className="chat-item">
            <div className="chat-item__top">
                <div className="chat-item__name">{name}</div>
                <div className="chat-item__date">{date}</div>
            </div>
            <div className="chat-item__bottom">
                <div className="chat-item__text">{message}</div>
            </div>
        </li>
    )
}

export default ChatItem