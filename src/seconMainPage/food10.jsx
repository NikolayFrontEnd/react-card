import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

export default function Food10(){
    return(
        <>
       
       <div class="center-container2">
        <h className="words4">
        Принципы питания от Александра Македонского:
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
На завтрак кофе и - сразу на тренировку.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
После тренировки на работу.
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Целый день должен быть включен режим "хищника". Ты должен протренироваться, сделать все дела, которые запланировал на день, а потом - уже еда. Еда, которую ты заслужил!
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Спортсмен кушает в основном 1-2 раза на день. И это чаще всего вечерние приемы пищи. Очень калорийные и насыщеные
        </div>



        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Основное и любимое блюдо - это борщ с чесноком.
        </div>
 
        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
Спортсмен может себе позволить как походы в KFS и Вкусно и точка за фастфудом, выпить кока-колы и съесть много сладкого, Александр считает, что ограничивать себя нет смысла, лучше интенсивнее тренироваться, но есть все, что ты хочешь!
        </div>
        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>

        </>
    )
}