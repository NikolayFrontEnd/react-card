import s from './people.module.css'
import phot6 from '../myDocument/photos/skott.jpg';
import p from './people3.module.css'
import {NavLink} from 'react-router-dom';

export default function People6(){
    return(
        <>
        
        <div className = {s.block}>
    
    <img className = {s.photo} src = {phot6}>
    </img>
    <div className = {s.contein}>  
    <div className = {s.nameBlock}>
    Скотт Херман
    </div>
    </div>
    <div className = {s.words}>
        
  <p>Скотт Херман — американский фитнес-ютубер, актер, предприниматель и модель.  </p> 

  Он наиболее известен тем, что делится мотивационным контентом о фитнесе на своем YouTube-канале ScottHermanFitness.
   
    </div>
    <div className = {s.btnBlock}> 
    <NavLink to = '/trainnnnnp'>  <button className = {s.btn3}>Программа тренировок</button>  </NavLink>
    <NavLink to = '/foodddddp'>  <button className = {s.btn4}>Питание</button>   </NavLink></div>
    </div>
    </>  
        
       
    )
}