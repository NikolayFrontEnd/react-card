import s from './mainPage.module.css';
import f from './photos/1.jpg';
import Circle2 from './fcircle';
import Circle3 from './fcircle3';
import Circle4 from './circle4';
import MainCircle from './mainCircle';
/* import {useRef, useEffect} from 'react';
export default function UppPage(){
    const buttonRef = useRef();
    useEffect(()=>{
        const applyContainerProperties = () =>{
buttonRef.current.classList.add('effect-container');
        };
        const onClick = () =>{
            buttonRef.current.classList.remove('active');
            setTimeout(() => {
                buttonRef.current.classList.add('active');
            }, 1 )
        };
        applyContainerProperties();
        buttonRef.current.addEventListener('mouseup', onClick);

        const cleanupRef = buttonRef.current;
        return ()=>{
            cleanupRef.removeEventListener("mouseup", onClick);
        };
    });


    return (
        <> 

    <div className = "button-container" ref = {buttonRef}>
        <button>Подробнее о тренировках</button>
    </div>
        </>
    );
}
 */
{/* <div className = {s.circle3}>
<img className = {s.im}src = {f}></img>
        </div>
        <div className = {s.circle2}> 
        </div>
        <div className = {s.circle4}></div>

        <div className = {s.circle5}> 

        </div> */}

        {
            /*         <div className = {s.main}>
                    <div className = {s.circle}>
                     <div classname = {s.words}> СПОРТИВНОЕ   <br/>  
                           СООБЩЕСТВО   </div>
                           <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus praesentium veritatis repellendus distinctio rem libero corporis magnam? Veritatis animi omnis ipsa. Rem debitis dolore nostrum error, quod, maiores modi sapiente tempora autem velit doloremque quidem ratione, eveniet saepe dolores odio!
                           </div>
                           <buttom >
                            gg
                           </buttom >
                    </div>
                    <div className = {s.circle3}>
            <img className = {s.im}src = {f}></img>
                    </div>
                    </div> */}

                    export default function UppPage() {
                        return (
                          <div className={s.sportContainer}>
                            <Circle2/>
                            <Circle3/>
                            <MainCircle/>
                           <Circle4/>
                          </div>
                        )
                      }
                      

