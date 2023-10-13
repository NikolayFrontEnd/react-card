import s from './people.module.css'
import phot2 from '../myDocument/photos/Alex.jpg';

import {NavLink} from 'react-router-dom';

export default function PeopleP (){
    return (
        <>
      <div className = {s.block}>
    
    <img className = {s.photo} src = {phot2}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Алексей Клакоцкий (Шреддер)
    </div>
    </div>
    <div className = {s.words}>
        
    Популярный блогер Беларуси в области фитнеса и бодибилдинга и приверженец натурального бодибилдинга. 
    <p>  Всю свою жизнь соврешенствуется и ставит собственные рекорды.  </p> 
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainn'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    
    <NavLink to = '/foodd'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>
    
    )
}