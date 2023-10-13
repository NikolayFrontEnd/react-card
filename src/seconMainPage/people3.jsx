import s from './people.module.css'
import phot3 from '../myDocument/photos/mentcer.jpeg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';
export default function People3(){
    return (
        <>
      <div className = {s.block}>
    
    <img className = {s.photo} src = {phot3}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Майк Ментцер
    </div>
    </div>
    <div className = {s.words}>
        
  <p>   Американский бодибилдер.      Главный проповедник программы "Супертрениг"</p> 

В 1979 г. Ментцер занял второе, а в 1980 г. — пятое место в важнейшем чемпионате по бодибилдингу — «Мистер Олимпия».
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnn'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddd'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  

    )
}