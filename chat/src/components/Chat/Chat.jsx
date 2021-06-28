import React, { useContext, useState, useEffect } from 'react';
import ChatItem from './ChatItem'
import Context from '../Context/Context';
import { getArray } from '../Functions/getArray'

const Chat = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const changeName = e => setName(e.target.value)
    const changeMessage = e => setMessage(e.target.value)

    const addMessage = e => {
        e.preventDefault()

        if (name && message) {
            const date = new Date()

            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };

            dataBase.ref('message/').push().set({
                name: name,
                date: date.toLocaleString("ru", options),
                message: message,
            })

            setMessage('')
        }
    }


    const { db, dataBase } = useContext(Context);

    const list = React.createRef()
    useEffect(() => {
        const chat = list.current
        chat.parentElement.scrollTo({top: chat.clientHeight })

    }, [db])

    return (
        <div className="chat">
            <div className="chat__wrapper">
                <ul ref={list} className="chat__list">

                    {
                        db ? getArray(db).map(item => <ChatItem key={item.id} item={item} />)

                            : <div>Сообщений нет</div>
                    }

                </ul>

            </div>
            <div className="chat__control">
                <form onSubmit={addMessage} className="chat__form form">
                    <input type="text" className="form__input" placeholder="Ваше имя" value={name} onChange={changeName} />
                    <input type="text" className="form__input message" placeholder="Сообщение" value={message} onChange={changeMessage} />
                    <button className="form__btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;