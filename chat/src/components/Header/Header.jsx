import React from 'react';
import logo from '../../img/header/logo.svg';
import user from '../../img/header/user.svg'

/**
 * Обыкновенная отрисовка шапки сайта
 */
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__column">
                        <div className="header__logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <nav className="nav">
                            <div className="burger">
                                <button className="burger__btn burger__btn--active"></button>
                            </div>
                            <ul className="nav__list nav__list--mobile">
                                <li className="nav__item">
                                    <a href="#!" className="nav__Link">Курсы</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#!" className="nav__Link">Участницы</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header__column">
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="nav__item nav__item--mobile">
                                    <a href="#!" className="nav__Link">Стать экспертом</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#!" className="nav__Link">
                                        <img src={user} alt="iser icon" />
                                        <span>Войти</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="try">
                            <a href="#!" className="try__link">Попробовать 14 дней бесплатно</a>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;