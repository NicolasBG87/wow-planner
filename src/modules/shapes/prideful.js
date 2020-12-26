import React from 'react';
import { Circle, Group, Text } from 'react-konva';

const Prideful = () => {
    return (
        <Group
            x={450}
            y={200}
            fill="darkred"
            width={50}
            height={50}
        >
            <Circle
                radius={50}
                fill="#460000"
                shadowColor="black"
                shadowBlur={15}
                shadowOffsetX={0}
                shadowOffsetY={0}
                shadowOpacity={0.5}
                shadowEnabled={true}
            />
            <Text
                width={120}
                height={120}
                text="Prideful"
                fontSize={25}
                fill="white"
                align='center'
                offsetX={60}
                offsetY={12}
            />
        </Group>
    );
};

export default Prideful;