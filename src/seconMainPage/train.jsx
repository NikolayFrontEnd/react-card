import { NavLink } from 'react-router-dom';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Пример иконки
import './StaticTable.css';
export default function Training()  {
    return(
        <>
       <div className = "container">  <h className ="mH">Тренировочная программа  <br className="spacer"/>  Джеффа Кавальера (Athlean-X)  <br className="spacer"/> «Home Gym Exclusive»: тренируйся как атлет</h>  </div>
        <div className = "seconWord"> Кому подойдет?  </div>
        <p className="tW">Как новичкам, так и более тренированным людям, разница лишь в том, что более тренированные смогут пройти жэту программу быстрее</p>
        <h3> Краткое описание программы: </h3 >
        <div className = "Wwords" >
            <ul>
              <li>   Эту тренировку можно выполнять дома , понадобятся гантели и экспандер(резина) кардио тренировки проще делать на улице </li>
                <li>Эта программа расчитана на увеличение выносливости, хорошо прокачивает функционал и делает тело рельефнее
                </li>
                <li>Рассчитана на 12 недель</li> 
                <li>5 тренировок в неделю (3 силовых, 2 кардио)</li> 
                <li>Разбита на 3 цикла по 4 недели</li> 
                <li>В конце каждого цикла есть тест. Если вы не выполнили указанный норматив, то возвращаетесь к началу текущего цикла.</li>
            </ul>
        </div>
        <h3 className = "htag">
        Программа тренировок на  1-3 НЕДЕЛИ
        </h3 >
        <h3 className = "htag2">
        “ПРАВИЛА ИГРЫ”
        </h3>
        <h3  className = "htag3">
Будьте уверены, что следуете всем  правилам программы:
        </h3>
       
  
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
       <div className = "mainWords">
           <FontAwesomeIcon icon={faStar} className="icon-with-text" style={{color: "#e60510",}} /> 
           Выполняйте все движения с максимальной отдачей, с решимостью, не жалея сил для ваших лучших результатов!
       </div>

      
      <div className="words2">   И ПОСЛЕДНЕЕ, НО НЕ МЕНЕЕ ВАЖНОЕ…     </div> 
<div className="words3">  Всегда помните: ничто великое не дается легко. Просто когда кажется, что тренировка слишком сложная... просто помните, как хорошо вы будете выглядеть и продолжай добиваться успеха!  </div>
       
        <h3 className="words4">
        НЕДЕЛЯ 1 Workout - AthLEAN X-TREME <br/>
ПОНЕДЕЛЬНИК: СИЛОВАЯ ТРЕНИРОВКА I – ВВЕРХ ТЕЛА
        </h3>
      
      <div>
      <table className="static-table">
        <thead>
          <tr>
            <th className="blockUpp">Exercise</th>
            <th className="blockUpp">Sets</th>
            <th className="blockUpp">Reps</th>
            <th className="blockUpp"> Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr className="blockU">
            <td >Spiderman Crawls(Лазанье паука или "Крокодил") (1)</td>
            <td>3</td>
            <td>10</td>
            <td>10 ползаний вперед и назад - это один сет</td>
          </tr>
          <tr className="blockU">
            <td>Alternate DB Press neutral grip (поочередный жим гантелей нейтральным хватом) (2)</td>
            <td>3</td>
            <td>10</td>
            <td>Поочередные 10 жимов одной и другой рукой</td>
          </tr>
         <tr className="blockU">
            <td>Rotational DB Shoulder Press (жим гантелей с вращением) (3)</td>
            <td>3</td>
            <td>12</td>
            <td>Поочередный жим каждой рукой по 6 повторений в подходе</td>
         </tr>
         <tr className="blockU">
            <td>Shoulder “L” Raises (Подъем гантелей в форме 'Буквы L') (4)</td>
            <td>3</td>
            <td>12</td>
            <td>6 подъемов рукой вперед и другой рукой всторону поочередно в каждом подходе</td>
          </tr>
          <tr className="blockU">
            <td>Woodchopper Tubing Pushdowns (отжимание дровосека) (5)</td>
            <td>4</td>
            <td>10-12</td>
            <td>Привязываем экспандер к турнику или ветке дерева и тянем справа на лево вниз и слева на право вниз</td>
          </tr>
          <tr className="blockU">
            <td>Rotator Cuff Tubing External Rotation (6)</td>
            <td>3</td>
            <td>15</td>
            <td>3 подхода на левую и правую руку</td>
          </tr>

        </tbody>
      </table>

    </div>
    <div className = "mVideo"> 
    (2)<iframe width="560" height="315" src="https://www.youtube.com/embed/r2lSmt368Fo?si=suC2SB25I1_eyqyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    (1)<iframe width="560" height="315" src="https://www.youtube.com/embed/AxN71aWWqG4?si=uhGo3uxfugp2ABnV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   (3) <iframe width="560" height="315" src="https://www.youtube.com/embed/MywS8k5oVQA?si=jB2jSA39T5qcol-U&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   (4) <iframe width="560" height="315" src="https://www.youtube.com/embed/_ruPUPfD80E?si=LvPqyQ-cTqEVMydV&amp;start=9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   (5) <iframe width="560" height="315" src="https://www.youtube.com/embed/hHxyZ8LfQrg?si=jiOgw8alCFmiUgsN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   (6) <iframe width="560" height="315" src="https://www.youtube.com/embed/wV6Kc_a_ioM?si=m8uDXaNCyZK1-P5D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
        <h2 className="words4">ВТОРНИК: ЖИРОСЖИГАЮЩАЯ ТРЕНИРОВКА</h2>

        <table>
          <thead >
            <tr >
              <th className="blockUpp">
              Quick Feet and Ripped Quick!(жиросжигающая тренировка)
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
 <td className="blockU"> Приставной бег боком(7)</td>
 <td className="blockU">8 раз в одну и другую сторону</td>
 <td className="blockU">QFL Icky Shuffle(8)</td>
 <td className="blockU">8 раз вперед и назад</td>
</tr>
<tr>
 <td className="blockU">QFL In In Out Out(Бег влево и вправо с помощью лесенки)(9)</td>
 <td className="blockU">8 раз в одну и другую сторону</td>
 <td className="blockU">QFL Ali Shuffle(10)</td>
 <td className="blockU">8 раз вперед и назад</td>
</tr>
          </tbody>
        </table>

(7)
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wtpSfq98UNU?si=G_9Au5twNL2glmq2&amp;start=29" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
(8)
<iframe width="560" height="315" src="https://www.youtube.com/embed/aw-b-HLU5ZQ?si=tYUdnjK_1sTakKHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
(9)
<iframe width="560" height="315" src="https://www.youtube.com/embed/l1zDFfVB0mQ?si=KJgSqCKR3y4K4irR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
(10)
<iframe width="560" height="315" src="https://www.youtube.com/embed/-9WbULJ9Ktw?si=wyq4wvnH8-LEogeJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h2 className="words4">СРЕДА: СИЛОВАЯ ТРЕНИРОВКА / пресс</h2>

<table>
<thead className="blockUpp">
          <tr >
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Comments</th>
          </tr>
          </thead>
          <tr className="blockU">
 <td> Приседания с гантелями </td>
 <td>3-4</td>
 <td>10-12</td>
 <td> Подобрать такой вес, чтобы 10-12 раз в подходе были в отказ (больше 12 раз не было сил сделать) </td>
</tr>

<tr className="blockU">
 <td>Боковые выпады с гантелями (11)</td>
 <td>3</td>
 <td>12</td>
 <td> поочередно делать выпад на правую и левую ногу </td>
</tr>

<tr className="blockU">
 <td> Румынская тяга с гантелями одной ногой (12) </td>
 <td>3</td>
 <td>12</td>
 <td> Подбираем вес так, чтобы 12 повторов давались очень тяжело. Делаем сначала 12 раз на правую, потом на левую ногу  - это один подход</td>
</tr>

<tr className="blockU">
 <td> Ягодичный мостик (13) </td>
 <td>4</td>
 <td>10-12</td>
 <td> Поставить ноги на возвышенность, а затем поднимать и опускать таз </td>
</tr>

<tr className="blockU">
 <td> Starfish Crunch (Скручивание звезда) (14) </td>
 <td>2</td>
 <td>/</td>
 <td> Нужно делать столько, пока не устанете </td>
</tr>

<tr className="blockU">
 <td> Heels to the Heavens (Подъем прямых ног вверх)(15) </td>
 <td>2</td>
 <td>/</td>
 <td> Сделать столько повторений, сколько возможно</td>
</tr>
</table>
<h2 className="words4">Четверг: Жиросжигающая тренировка  2</h2>
<td className="blockU">Бег 20 минут</td>
<td></td>

<h2 className="words4">
Пятница: Силовая тренировка III – Вверх тела (тяги) / пресс
</h2>

<table>
<thead>
          <tr className="blockUpp">
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Comments</th>
          </tr>
          </thead>
<tr className="blockU">
  <td>Австралийские подтягивания</td>
  <td>3-4</td>
  <td>10-12</td>
  <td>Тянем свое тело к перекладине, если легко, ставим ноги дальше</td>
</tr>

<tr className="blockU">
  <td>Разгибания в наклоне на трицепс с гантелями(16)</td>
  <td>4</td>
  <td>12</td>
  <td>Подбираем вес так, чтобы можно было сделать не больше 12 раз</td>
</tr>

<tr className="blockU">
  <td>Выпады с гантелями + делать сгибание на бицепс(17)</td>
  <td>3</td>
  <td>12</td>
  <td>6 раз на одну ногу, 6 на другую ногу, когда меняем ногу, делаем подъем гантелей на бицепс</td>
</tr>

<tr className="blockU">
  <td>Молотки с гантелями(18)</td>
  <td>3</td>
  <td>10-12</td>
  <td>Медленно поднимаем гантель и опускаем</td>
</tr>
<tr className="blockU">
  <td>Русские скручивания</td>
  <td>4</td>
  <td>/</td>
  <td>30 секунд отдыха между подходами(каждый подход делаем максимально возможное число повторений)</td>
</tr>  
</table>
<div className = "mVideo"> 

(16)<iframe width="560" height="315" src="https://www.youtube.com/embed/QxQKCqtmQCI?si=vLhar0L_qaq5Sqso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
(17)<iframe width="560" height="315" src="https://www.youtube.com/embed/R5BS_jqVEDg?si=KZMBWWBfx8e_nD1J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
(18)<iframe width="560" height="315" src="https://www.youtube.com/embed/x1By7QGe9Yk?si=OG3Bwbf2dOvhsZGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

</div>







    

        <div className="button-container">
        <NavLink to ='/newpage'>  <button className="my-button">Вернуться</button>  </NavLink> 
        </div>
        </>

    )
}
