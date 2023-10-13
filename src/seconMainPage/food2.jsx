import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Food2(){

    return(
        <>
 <div class="center-container2">
        <h className="words4">
            Два главный правила Алексея в питании:
        </h>
        </div>

        <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
        Здоровые продукты
       </div>
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
        Не переедать
       </div>


        <div class="center-container2">
        <h className="words4">
            Примерный рацион питания Алексея Шреддера за день
        </h>
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
         В 10 часов утра Алескей просыпается и первое, что он делает - пьет льняное масло, 1 столовую ложку. Спорсмен считает, что такое масло "термоядерно".
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
        Завтрак в 11 утра. 
        Кофе с молоком. Черный хлеб цельнозерновой. намазаный магким козьим сыром.  Алексей всегда ест только цельнозерновой хлеб.  Пол авокадо и парочку бразильским орехов.
       И после кофе пару кусочков шоколада черного 85%. 
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
         Алексей не считает калории и ест так, как ему хочется! Время всегда разное. Это один из дней Алексея.
        </div>

  

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
         14:30 - время обеда.   
 Запеченный картофель и запеченная тыква в духовке. Куринные яйцва жаренные. Овощи, салат с брынзой и свеклой. Чай с грецкими орехами и медом
        </div>


        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
17:30 - небольшой перекус в виде яблока.
        </div> 

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
18:00 часов вечера - жменя фисташек.
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  

18:30 - время ужина. Много зелени. Курицы или индейка (в большинтсве случаев) и сыр.

        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
21:30 - последний ужин. 150 грамм творога с медом и чаем. За 3 часа до сна
        </div>

        <div className = "Tword2">
      <div className = "sFont">  <FontAwesomeIcon icon={faBurger} style={{color: "#33305a",}} />   </div>  
12:00 - масло из тыквенных семян.
        </div>
        <div className="button-container2">
        <NavLink to ='/newpage'>  <button className="my-button2">Вернуться</button>  </NavLink> 
        </div>



        </>


    )

}