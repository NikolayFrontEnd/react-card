import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food8(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
        Принципы питания от Калум Фон Могера
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Калум имеет быстрый метаболизм. По этой причине этот спортсмен кушает калорийную пищу.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Калум питается больше интуитивно. Он есть до тех пор, пока не чувствует, что нужно прекратить кушать.
        </div>



        <div className="words33"> 
<h className="words3">
ОДИН ИЗ ДНЕЙ, КАК ПИТАЕТСЯ КАЛУМ ФОН МОГЕР:
        </h> </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ЗАВТРАК: смузи из 4 яиц, 1 банана, 3шариков мороженого, 1 столовой ложки меда и 2 ложки протеина.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ПЕРЕКУС: курица с макаронами.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ОБЕД: мясной стэйк и рис.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ПЕРЕКУС: тунец с рисом
        </div>   

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
УЖИН: мясной стэйк, картофельное пюре и салат.
        </div>

 
        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ПЕРЕКУС: овсянка и молоко
        </div>
        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}