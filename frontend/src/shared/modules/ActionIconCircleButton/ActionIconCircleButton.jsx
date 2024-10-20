import React from 'react';
import cl from './ActionIconCircleButton.module.scss';

function ActionIconCircleButton({ icon, alt, size = 48, color = '#CBD5E1', filterColor }) {
  return (
    <div 
      className={cl.actionIconCircleButton} 
      style={{ '--button-size': `${size}px`, '--button-color': color, '--filter-color': filterColor }}>
      <img src={icon} alt={alt} />
    </div>
  );
}

export default ActionIconCircleButton;
