import { HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Inicio',
    key: 'inicio',
    icon: <HomeOutlined />
  },
];

const NavBar: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{display: 'flex', justifyContent: 'flex-start'}}/>;
};

export default NavBar;