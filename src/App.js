import React,{useState} from "react";
import {BsPersonCircle} from 'react-icons/bs';
import { Types } from "./Components/Data";
import Acc from "./Components/Acc.js";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
library.add(faCircleUser);


const App = ()=>{
  const[open,isOpen]= useState(false);
  const openAcc =()=>{
    if (open===false){
      isOpen(true);

    }
    else{
      isOpen(false);
    }
  }
  return(
    <div className="Start">
      <div className="Top">
        <div className="Topheader">
          <div className="icon">
          <faCircleUser icon="fa-solid fa-circle-user" />
          </div>
          <div className="informations">
            <h4 className="textt">
              About Us
            </h4>
            <p className="detail">4 Articles in this topic</p>
          </div>
          <div onClick={openAcc} className='firsthook'>
            <span className="upper"> {open ? '^ ': "˅ "}</span>
          </div>
        </div>
        {
          <div className="panel">
            {
              open &&
              <div className="acc">
                {
                  Types.data.map((el,index)=>{
                    return(
                      <Acc
                      text={el.text}
                      content={el.content}
                      />
                    );
                  })
                }
                </div>
                }
                </div>
}
            
      </div>
    </div>
  )
}
export default App;
