import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './mainPage.module.css';

export default function MainCircle() {
  return (
    <div className={s.circle}>
      ПРОГРАММЫ ТРЕНИРОВОК ОТ РАЗНЫХ СПОРТСМЕНОВ СО ВСЕГО МИРА
      
      <NavLink className = {s.a2} to="newpage"><span></span>Смотреть!</NavLink>

    </div>
  );
}
