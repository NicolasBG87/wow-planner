import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Layout, Typography } from 'antd';
import MainMenu from './modules/mainMenu';
import MainContent from './modules/mainContent';
import { FileImageOutlined, ReloadOutlined } from '@ant-design/icons';
import progress from './data/tutorial';

const { Header, Sider } = Layout;
const { Text, Link } = Typography;

const style = {
    sider: {
        overflowY: 'auto',
        overflowX: 'hidden',
        height: 'calc(100vh - 64px)',
        position: 'fixed',
        left: 0,
    },
    header: {
        display: 'flex',
        background: '#000c17',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        margin: '0 10px'
    }
};

function App () {
    const [players, setPlayers] = useState([]);
    const [canvas, setCanvas] = useState(null);
    const [showPridefulPath, setShowPridefulPath] = useState(false);
    const [tutorial, setTutorial] = useState(null);

    useEffect(() => {
        const lsData = JSON.parse(localStorage.getItem('wowPlanner'));
        if (!lsData) {
            localStorage.setItem('wowPlanner', JSON.stringify(progress));
            setTutorial(progress);
        } else if (!lsData.done) {
            setTutorial(lsData);
        }
    }, []);

    const exportImage = () => {
        const uri = canvas.toDataURL();
        const link = document.createElement('a');
        const time = new Date().getTime();
        link.download = `wow-position-plan-${time}`;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const togglePath = () => setShowPridefulPath(!showPridefulPath);

    return (
        <Layout>
            <Header className="header" style={style.header}>
                <Text type="warning">WoW Planner (Beta)</Text>
                <div>
                    <Button
                        type="default"
                        icon={<ReloadOutlined />}
                        onClick={() => setPlayers([])}
                        ghost
                        style={style.button}
                    >
                        Reset
                    </Button>
                    <Button
                        type="default"
                        icon={<FileImageOutlined />}
                        onClick={exportImage}
                        ghost
                        style={style.button}
                    >
                        Export As Image
                    </Button>
                    <Checkbox onChange={togglePath} checked={showPridefulPath} style={{ marginLeft: '10px' }}>
                        <Text style={{ color: 'white' }}>Show Lines</Text>
                    </Checkbox>
                </div>
                <Text type="warning">Made with &hearts; by <Link href="https://www.linkedin.com/in/nikolabojanovic/" target="_blank">Nicolas</Link></Text>
            </Header>
            <Layout>
                <Sider width={300} className="site-layout-background" style={style.sider}>
                    <MainMenu players={players} setPlayers={setPlayers} />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <MainContent
                        players={players}
                        setPlayers={setPlayers}
                        setCanvas={setCanvas}
                        showPridefulPath={showPridefulPath}
                        tutorial={tutorial}
                        setTutorial={setTutorial}
                    />
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
