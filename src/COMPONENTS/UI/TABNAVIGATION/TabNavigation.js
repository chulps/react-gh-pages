// TabNavigation.js
import React, { useState } from 'react';
import './TabNavigation.css';


const TabNavigation = ({ tabs, initialActiveTab, onTabChange, }) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <ul className="tab-navigation">
      {tabs.map((tab) => (
        <li
          key={tab.id}
          className={tab.id === activeTab ? 'active' : tab.className}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.icon && <span className="tab-icon">{tab.icon}</span>}&nbsp;
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
