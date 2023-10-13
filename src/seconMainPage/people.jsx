import s from './people.module.css'
import phot from '../myDocument/photos/JefCavalier.jpg';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function People(){
    const [open, setOpen] = useState(false);
    return(
<>
<div className = {s.block}>
    
<img className = {s.photo} src = {phot}>
</img>
<div className = {s.contein}>  
<div className = {s.nameBlock}>
Джефф Кавальер
</div>
</div>
<div className = {s.words}>
    
Известный бодибилдер и спортивный тренер. Главный физиотерапевт и помощник тренера New York Mets. 
<p>  Автор публикаций для фитнес-журналов. Основатель фитнес-компании. 
 </p> 
</div>
<div className = {s.btnBlock}> 
<NavLink to = '/train'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>

<NavLink to = '/food'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
</div>
</>
    )
}
