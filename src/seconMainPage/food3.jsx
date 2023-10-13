import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food3(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
            Правила питания от Майкла Ментцера
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      Нужно обеспечить себя необходимым количеством макро- и микроэлементов и не допускать избытка питательных веществ, потребляя лишь столько, сколько необходимо усвоить организму для выполнения поставленной задачи.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      Также, он советовал придерживаться определенного соотношения потребляемых питательных веществ (15% жиров, 25% белков и 60% углеводов) и стараться не менять этот сбалансированный расклад.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      В связке тренинг – питание Ментцер считал главным тренинг, а питание, как второстепенный фактор, который работает только тогда, когда выбрана верная методика тренировок.
        </div>
       <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}