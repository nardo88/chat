import React from 'react';
import Chat from '../Chat/Chat';

const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="main__wrapper">
                    <div className="main__head">
                        <h1 className="main__title">Добро пожаловать в чат сообщества</h1>
                    </div>
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Main;