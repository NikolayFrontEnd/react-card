
import s from './people.module.css'
import phot4 from '../myDocument/photos/king.jpeg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People4(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot4}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Ганнибал Ланхам (Gannibal for King)
    </div>
    </div>
    <div className = {s.words}>
        
  <p>Отец воркаута и один из первых, кто дал популярность уличным тренировкам на турниках. С помощью тренировок избавлялся от депрессии </p> 

Тренировался исключительно на турниках и добился прекарсной формы тела. 
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnn'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/foodddd'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}