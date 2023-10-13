import s from './people.module.css'
import phot5 from '../myDocument/photos/URA2.jpg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People5(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot5}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Юрий Спасокукоцкий
    </div>
    </div>
    <div className = {s.words}>
        
  <p>  Украинский мастер спорта по классическому бодибилдингу. </p> 

Ведет ютуб канал, где делится своим опытом с другими. Проповедует упражнения с читингом и рассказывает, как максимально с помощью его нарастить мышцы. 
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnnn'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddddd'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}