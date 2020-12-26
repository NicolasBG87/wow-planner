import React from 'react';
import { Image, Group, Line, Circle } from 'react-konva';
import useImage from 'use-image';
import icons from '../icon/iconList';

const Player = ({ icon, x, y, showPath, removePlayer }) => {
    const [img] = useImage(icons[icon]);

    const handleOnContextMenu = (event) => {
        event.evt.preventDefault();
        removePlayer();
    };

    return (
        <Group
            x={x}
            y={y}
            draggable={true}
            onContextMenu={handleOnContextMenu}
        >
            {showPath && (
                <>
                    <Line points={[20, -200, 20, 240]} stroke="#B40A1B" strokeWidth={2} dash={[5, 5]} />
                    <Line points={[-200, 20, 240, 20]} stroke="#B40A1B" strokeWidth={2} dash={[5, 5]} />
                </>
            )}
            <Image
                height={40}
                width={40}
                image={img}
                shadowColor="black"
                shadowBlur={15}
                shadowOffsetX={0}
                shadowOffsetY={0}
                shadowOpacity={0.5}
                shadowEnabled={true}
            />
        </Group>
    );
};

export default Player;