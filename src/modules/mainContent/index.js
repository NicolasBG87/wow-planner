import React, { useRef, useEffect } from 'react';
import { Layout } from 'antd';
import { Stage, Layer } from 'react-konva';
import { PProgress, Player, Prideful } from '../../modules';

const { Content } = Layout;

const style = {
    content: {
        minHeight: 'calc(100vh - 64px)',
        paddingLeft: '300px',
        display: 'flex',
        alignItems: 'center',
    },
    stage: {
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)'
    }
};

const MainContent = ({ players, setPlayers, setCanvas, showPridefulPath, tutorial, setTutorial }) => {
    const stageRef = useRef(null);

    useEffect(() => {
        setCanvas(stageRef.current);
    }, [setCanvas]);

    const handleDragOver = (event) => {
        event.stopPropagation();
        event.preventDefault();
    };

    const handleDrop = (event) => {
        const player = {
            icon: event.dataTransfer.getData('icon'),
            x: event.clientX - 324,
            y: event.clientY - 88
        };
        setPlayers([...players, player]);
    };

    const removePlayer = (index) => {
        setPlayers(players.filter((item, i) => i !== index));
    };

    return (
        <Content className="site-layout-background" style={style.content}>
            <div onDragOver={handleDragOver} onDrop={handleDrop}>
                <Stage width={900} height={window.innerHeight - 112} style={style.stage} ref={stageRef}>
                    <Layer>
                        {players.map((player, index) => {
                            return (
                                <Player
                                    icon={player.icon}
                                    x={player.x}
                                    y={player.y}
                                    key={player.icon + index}
                                    showPath={showPridefulPath}
                                    removePlayer={() => removePlayer(index)}
                                />
                            );
                        })}
                        <Prideful />
                    </Layer>
                </Stage>
                {((tutorial !== null) && !tutorial.done) && <PProgress tutorial={tutorial} setTutorial={setTutorial} />}
            </div>
        </Content>
    );
};

export default MainContent;