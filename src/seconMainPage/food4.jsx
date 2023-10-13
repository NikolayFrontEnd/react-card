import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food4(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
            Правила питания от Ганнибала Фор Кинга
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
   Как признается сам спортсмен, он питанию никогда не удилял должного внимания. Ел все подряд. Ганнибал считает, что если съест что-то плохо или жирное, просто после этого необходимо провести хорошую тренировку и все.
        </div>

        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}