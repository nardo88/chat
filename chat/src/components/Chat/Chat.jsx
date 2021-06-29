import React, { useContext, useState, useEffect } from 'react';
import ChatItem from './ChatItem'
import Context from '../Context/Context';
import { getArray } from '../Functions/getArray'
import { getDate } from '../Functions/getDate';

const Chat = () => {

    /**
     * Создаем state полей ввода input для обеспечения flux-круговорота
     * т.е. наши поля ввода будут управляемыми 
     */
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    /**
     * 
     * @param {Object} e объект события - event 
     * @returns функции changeName и changeMessage по сути ничего не возвращает, она записывает значение input
     * d локальный state
     */
    const changeName = e => setName(e.target.value)
    const changeMessage = e => setMessage(e.target.value)

    /**
     * 
     * @param {Object} e - объект события event
     * функция запускается при submit-e формы
     */
    const addMessage = e => {
        /**
         * Отключаем стандартное поведение браузера
         */
        e.preventDefault()
        /**
         * проверяем что бы значения полей input не были пустыми
         */
        if (name && message) {
            /**
             * записываем в базу RealTime database объект сообщения
             * после чего очищаем только одно поле с вводом сообщения
             * поле с имененм оставляем с тем значением которое уже введено
             */
            dataBase.ref('message/').push().set({
                name: name,
                date: getDate(),
                message: message,
            })
            setMessage('')
        }
    }

    /**
     * с помощью хука useContext получаем из App.js экземпляр firebase.database.Reference
     * и базу которая пришла из fireBase
     */
    const { db, dataBase } = useContext(Context);

    /**
     * создаем ссылку для элемента списка с сообщениями
     */
    const list = React.createRef()
    
    /**
     * в хук useEffect передаем callback и массив зависимостей (db - база из firebase, т.е. запуск callback будет 
     * только в случае изменения db)
     * Callback функция скролит в низ родителя списка с сообщениями каждый раз когда приходит новое сообщение 
     */
    useEffect(() => {
        const chat = list.current
        chat.parentElement.scrollTo({top: chat.clientHeight })

    }, [db])

    return (
        <div className="chat">
            <div className="chat__wrapper">
                <ul ref={list} className="chat__list">

                    {
                        /**
                         * если в db что-то есть, то сначала превращаем объект данных в массив, после чего применяем маппинг
                         * для рендера элементов списка. Если в db ничего нет, то отображаем надпись, что идет получение данных с сервера
                         */
                        db ? getArray(db).map(item => <ChatItem key={item.id} item={item} />)

                            : <div>Получение данных с сервера...</div>
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