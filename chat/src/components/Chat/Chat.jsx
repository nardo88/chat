import React, {useContext} from 'react';
import ChatItem from './ChatItem'
import Context from '../Context/Context';
import {getArray} from '../Functions/getArray'

const Chat = () => {


    const {db, dataBase} = useContext(Context);

    return (
        <div className="chat">
            <div className="chat__wrapper">
                <ul className="chat__list">

                    {
                        db ? getArray(db).map(item => <ChatItem key={item.id} item={item} />)

                        : <div>Сообщений нет</div>
                    }

                </ul>

            </div>
            <div className="chat__control">
                <form className="chat__form form">
                    <input type="text" className="form__input" placeholder="Ваше имя" />
                    <input type="text" className="form__input message" placeholder="Сообщение" />
                    <button className="form__btn">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;