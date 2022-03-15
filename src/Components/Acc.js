import React, { useState } from "react";
const Acc = (props) => {
  const [opened, isOpened] = useState(false);
  const toggleHandler = (e) => {
    isOpened(!opened);
    console.log("Urime Lejaa");
  };
  return (
    <div className="acc-holder">
      <div onClick={toggleHandler} className='acc-header'>
        <h5 className="text">
          {props.text}
          <span className="uppeer"> {opened ? "^ " : "˅ "}</span>
        </h5>
        {
          <div className="panel">
            {opened && <p className="tittle">{props.content}</p>}
          </div>
          }
      </div>
    </div>
  );
};
export default Acc;
