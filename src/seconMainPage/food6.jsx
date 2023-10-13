import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food4(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
        Питание от Скота Хермана
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
   Только с помощью правильного питания и правильной тренировки можно добиться успеха в спорте. Одно без другого не будет работать хорошо!
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Скот постоянно старается питаться разнообразно. Он никогда не есть одно и то же блюдо подряд.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
В каждом приеме пищи Скот принимает протеин либо ест чистый белок. Он старается потребить белка как можно больше
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Скот никогда не ест вредные продукты. Это цена, которую он платит за красивое тело
        </div>

        
        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
В каждом приеме пищи Скот принимает протеин либо ест чистый белок.
        </div>

        <div class="center-container2">
        <h className="words4">
        Один из дней Скота:
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ЗАВТРАК: овсяные хлопья, тост из цельнозерновой муки, яйца, молоко, сывороточный протеин
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
ОБЕД: жаренная курица, коричневый рис, овощи.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
УЖИН: рыба, овощи.
        </div>
        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}