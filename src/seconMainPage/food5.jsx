import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Food5(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
            Предложенный прием пищи от Юрия Спасокукоцкого для программы.
        </h>
        </div>

        <h className="words3">
МЕНЮ:
        </h>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
   каша из 80 г гречневой крупы(сухой вес), 150 г красной рыбы.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
180 г куриной отбивной, 100 г шампиньонов, 200 г зеленое яблоко.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
каша из: 80 г гречневой крупы (сух.вес), 150 г красной рыбы на гриле/пару/в микроволновке.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
180 г куриной отбивной, 100 г шампиньонов
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
   омлет из: 1 целого яйца и 4-х яичных белков с 75 г креветок
        </div>

<div className="words33"> 
<h className="words3">
ИТОГО:
        </h> </div>



        <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
        Подбирайте вес так, чтобы могли выполнять указанное число повторений с идеальной техникой
       </div>
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
           Если последнее повторение первого подхода было очень легким и вы замечаете, что можете сделать еще... просто делайте еще, пока не устанете или увеличивайте вес
       </div>
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
           Если не можете выполнить нужно число повторений в первом подходе, уменьшайте веса в последующих.
       </div>
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
           Отдых между подходами 1 минута на 1-3 неделе. между подходами на пресс - 30 секунд.
       </div>
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
           Частота должна составлять 1-4 секунды на одно повторение
       </div>

        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}