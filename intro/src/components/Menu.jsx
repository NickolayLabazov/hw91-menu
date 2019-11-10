import React from 'react';
import {  NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">

      <NavLink
        className="menu__item"
        exact to="/"
        activeClassName='menu__item-active'>Главная</NavLink>

      <NavLink
        className="menu__item"
        exact to="/drift" a
        ctiveClassName='menu__item-active'>Дрифт-такси</NavLink>

      <NavLink
        className="menu__item"
        exact to="/timeattack"
        activeClassName='menu__item-active'>Time Attack</NavLink>

      <NavLink
        className="menu__item"
        exact to="/forza"
        activeClassName='menu__item-active'>Forza Karting</NavLink>

    </nav>
  )
}


