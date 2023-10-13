import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food7(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
        Принципы питания от Брэдли Мартина
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Нужно есть здоровую пищу.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Жиры - наши друзья! Нельзя избегать жира в своем рационе и стараться есть как можно меньше жирной пищи
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Иногда можно позволить себе вредную вкусную пищу, но только после каких-либо своих собственных рекордов для поощрения.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Старайтесь питаться как можно разнообразнее!
        </div>

        <div className="words33"> 
<h className="words3">
ОДИН ИЗ ДНЕЙ, КАК ПИТАЕТСЯ БРЭДЛИ МАРТИН:
        </h> </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ЗАВТРАК: лосось, яйца, тост из цельнозерновой муки
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ОБЕД: стейк, мясной бургер.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
УЖИН: рыба, зеленый салат.
        </div>   
        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}