import s from './people.module.css'
import phot7 from '../myDocument/photos/m.jpg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People7(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot7}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
   Бредли Мартин
    </div>
    </div>
    <div className = {s.words}>
        
  <p>Американский бодибилдер, тренер по фитнесу и звезда социальных сетей.</p> 

На его ютуб канале более 3-х миллионов подписчиков, и их число продолжает расти! 
<p>Рост – 188 см
Вес – 118 кг</p>

   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnng'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddddg'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}