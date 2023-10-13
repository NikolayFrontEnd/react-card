import s from './people.module.css'
import phot8 from '../myDocument/photos/moger.jpg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People8(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot8}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Калум Фон Могер
    </div>
    </div>
    <div className = {s.words}>
        
  <p>Австралийский актер и бодибилдер. Спортсмен стремится иметь телосложение, как у его кумиров Шварценеггера, Ривза и Зейна. </p> 

  Наиболее известен по роли Арнольда Шварценеггера в фильме 2018 года «Больше».
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnnf'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/fooddddf'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}