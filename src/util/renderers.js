import React from 'react';
import { Menu } from 'antd';
import PIcon from '../modules/icon';

const classMenuItemRenderer = (item, players, setPlayers) => {
    const icon = `${item.classID}_${item.specID}`;
    const key = `${item.classID}-${item.specID}`;

    const calculateY = () => {
        if (players.length < 10) {
            return players.length * 50;
        } else {
            return (players.length % 10) * 50;
        }
    };

    const calculateX = () => {
        return (Math.floor(players.length / 10)) * 50;
    };

    const handleClick = () => {
        const player = {
            icon,
            x: calculateX(),
            y: calculateY()
        };
        setPlayers([...players, player]);
    };

    const handleDragStart = (event) => {
        event.dataTransfer.setData('icon', event.target.id);
    };

    return (
        <Menu.Item
            id={icon}
            key={key}
            icon={<PIcon icon={icon} />}
            draggable
            onDragStart={handleDragStart}
            onClick={handleClick}
        >
            {item.specLabel} {item.classLabel}
        </Menu.Item>
    );
};

export {
    classMenuItemRenderer
};