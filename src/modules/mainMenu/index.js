import React from 'react';
import { getHealers, getMeleeDps, getRangeDps, getTanks } from '../../data/classes';
import { classMenuItemRenderer } from '../../util/renderers';
import { Menu } from 'antd';

const { SubMenu } = Menu;

const MainMenu = ({ players, setPlayers }) => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={['tank']}
            style={{ height: '100%', borderRight: 0 }}
            selectable={false}
        >
            <SubMenu key="tank" title="Tank">
                {getTanks().map((item) => classMenuItemRenderer(item, players, setPlayers))}
            </SubMenu>
            <SubMenu key="healer" title="Healer">
                {getHealers().map((item) => classMenuItemRenderer(item, players, setPlayers))}
            </SubMenu>
            <SubMenu key="meleeDps" title="Melee DPS">
                {getMeleeDps().map((item) => classMenuItemRenderer(item, players, setPlayers))}
            </SubMenu>
            <SubMenu key="rangedDps" title="Ranged DPS">
                {getRangeDps().map((item) => classMenuItemRenderer(item, players, setPlayers))}
            </SubMenu>
        </Menu>
    );
};

export default MainMenu;