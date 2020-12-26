import React from 'react';
import icons from './iconList';

const PIcon = ({ icon, size = 32 }) => {
    return (
        <img
            src={icons[icon]}
            style={{ width: size + 'px', height: size + 'px', marginRight: '5px' }}
            alt={icon}
            id={icon}
        />
    );
};

export default PIcon;