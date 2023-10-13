import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../seconMainPage/second.css';
import RightBarW from './rightbarw.jsx';
import People from './people';
import PeopleP from './people2';
import People3 from './people3';
import People4 from './people4';
import People5 from './people5';
import People6 from './people6';
import People7 from './people7';
import People8 from './people8';
import People9 from './people9';
import People10 from './people10';
import training from './train';
import r from '../myDocument/photos/JefCavalier.jpg';
export default function P(){
    const [isLeftBarVisible, setIsLeftBarVisible] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    return<>
         <header>
        <nav>
          <button className="btn" onClick={toggleLeftBar}>
            &#9776;
          </button>

        </nav>
        <TransitionGroup>
          {isLeftBarVisible && (
            <CSSTransition
              key="leftBar"
              timeout={400}
              classNames="leftBarAnimation"
            >
              <div className="leftBar">
                <RightBarW/>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div className = "cards"> 

        <PeopleP/>
        <People/>
     
        <People3/>  
        <People4/>
        <People5/>
        <People6/>
        <People7/>
        <People8/>
        <People9/>  
        <People10/>  
         </div>
      </header>
    </>
}