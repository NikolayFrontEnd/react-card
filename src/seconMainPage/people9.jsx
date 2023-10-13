import s from './people.module.css'
import phot9 from '../myDocument/photos/max.png';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People9(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot9}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Максим Трухоновец
    </div>
    </div>
    <div className = {s.words}>
        
  <p> Максим – активист движения Street Workout. рекордсмен мира в упражнении «выходы силой на две руки» </p> 

  Победитель республиканских соревнований «Подтягивание с отягощением +32 кг».
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnnw'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddddw'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}