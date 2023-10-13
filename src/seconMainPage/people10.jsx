
import s from './people.module.css'
import phot10 from '../myDocument/photos/A.png';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People9(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot10}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Александр Македонский 
   <div>   (Таганрогский атлет)   </div>    
    </div>
    </div>
    <div className = {s.words}>
        
  <p> Позитивный спортсмен из Таганрога, блогер. Тренируется как в спортзале, так и на улице на турниках.  </p> 
<p>   Часто собирает людей на спортивных площадках. Закаливается и ведет здоровый образ жизни.   </p>

   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnnq'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddddq'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}