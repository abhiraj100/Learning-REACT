import React from 'react';
import "./Tabs.css";
import { useState } from 'react';

const Tabs = ({ tabsData, onChange }) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className='tabs'>
      <div className='tabs__container'>
        {
            tabsData.map((item, index) => {
                return <button className={`${currentTabIndex === index ? "active" : ""}`} onClick={() => {setCurrentTabIndex(index); onChange(index)}} key={index}>{item.label}</button>
            })
        }
      </div>
      <div className='tabs__content'>
        {tabsData[currentTabIndex].content}
      </div>
    </div>
  )
}

export default Tabs;
