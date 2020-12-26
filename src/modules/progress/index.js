import React from 'react';
import { Button, Card, Progress, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Text } = Typography;

const style = {
    progressWrapper: {
        position: 'absolute',
        bottom: '55px',
        left: '350px',
        borderRadius: '5px',
        boxShadow: '0 0 20px rgba(0,0,0,0.15)',
        padding: '40px 80px',
        width: '845px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'white'
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
    }
};

const PProgress = ({ tutorial, setTutorial }) => {
    const getCardTitle = () => {
        const step = tutorial.steps.find(item => item.id === tutorial.progress + 1);
        return step.title;
    };

    const getCardContent = () => {
        const step = tutorial.steps.find(item => item.id === tutorial.progress + 1);
        return step.label;
    };

    const nextStep = () => {
        const lsData = JSON.parse(localStorage.getItem('wowPlanner'));
        lsData.progress = lsData.progress + 1;
        if (lsData.progress === 7) {
            lsData.done = true;
        }

        localStorage.setItem('wowPlanner', JSON.stringify(lsData));
        setTutorial(lsData);
    };

    return (
        <div style={style.progressWrapper}>
            <Text style={style.title}>Tutorial {tutorial.progress} - {tutorial.total}</Text>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
                <Card
                    title={getCardTitle()}
                    bordered={false}
                    style={{ width: 300 }}
                    actions={[
                        <Button
                            type="primary"
                            icon={<CheckCircleOutlined />}
                            onClick={nextStep}
                        >
                            Done
                        </Button>
                    ]}
                >
                    {getCardContent()}
                </Card>
                <Progress type="circle" percent={Math.ceil(tutorial.progress * 16.66)} />
            </div>
        </div>
    );
};

export default PProgress;