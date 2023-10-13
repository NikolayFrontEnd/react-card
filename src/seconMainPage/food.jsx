import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import './food.css';
export default function food(){
    return(
        <>
        <div class="center-container">
    <h1 class="center-text words5">7 ПРАВИЛ ПИТАНИЯ, КОТОРЫМ ПРИДЕРЖИВАЕТСЯ СПОРТСМЕН</h1>
  </div>
        <div className = "Tword">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
         Нет смысла считать калории   
        </div>
        <p>  Лучше придерживаться стратегии "тарелки"  </p>
        <p> Нужно  разбить тарелку условно на три части (знак «пацифик» без нижней части центральной). Треть основное блюдо (белковая пища), треть (или чуть больше, если хотите быстрее сбросить вес) свежие овощи (салат), треть гарнир (сложные углеводы или «горячие» овощи — гриль, тушеные). </p>
       <p>Всё! Если вы будете так питаться, с учетом того, что вы соблюдаете остальные пункты осознанного питания, то никакое переедание или недоедание вам не грозит.
Потребность в БЖУ, витаминах и минералах организм будет регулировать с помощью сигналов о том, что он хочет.
Но он часто хочет простые углеводы, когда голоден. Поэтому нужно помнить, что любой прием пищи должен быть полноценным.</p>

<div className = "Tword">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      Если вам что-то не нравится… не ешьте это!
        </div>

        <div className = "Tword">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
       Ешьте каждые 2,5 — 3 часа  
        </div>
        <p>Как минимум три приёма пищи должны содержать значительную порцию белков. Такой рацион способствует выработке гормонов роста (очень важно для мышц) и снижает уровень стрессового гормона кортизола.</p>

        <div className = "Tword">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      Ешьте больше клетчатки
        </div>

        <div className = "Tword">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
      Джэфф Кавальер никогда не использовал какие-либо программы питания, он предпочитал домашнюю еду и питался больше по интуиции 
        </div>

        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>
        </>
    )
}