import { Anchor, Dropdown, Space } from 'antd'
import type { MenuProps } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import './Nav.css'
import { useEffect, useState } from 'react';

interface Props {
  setComp: (c: string) => void
}

function Nav(props: Props) {
  const [screen, setScreen] = useState(window.innerWidth)
  const anchorItems = [
    {
      key: '1',
      href: '#about',
      title: <span className="anchorItem" onClick={() => props.setComp('home')}>About</span>,
    },
    {
      key: '3',
      href: '#publication',
      title: <span className="anchorItem" onClick={() => props.setComp('home')}>Publication</span>,
    },
    {
      key: '4',
      href: '#cv',
      title: <span className="anchorItem" onClick={()=>props.setComp('cv')}>CV</span>,
    },
    {
      key: '5',
      href: '#teaching',
      title: <span className="anchorItem" onClick={() => props.setComp('cv')}>Teaching</span>,
    },
    {
      key: '6',
      href: '#service',
      title: <span className="anchorItem" onClick={() => props.setComp('cv')}>Service</span>,
    }
  ]

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a href='#about' onClick={() => props.setComp('home')}>About</a>,
    },
    {
      key: '3',
      label: <a href='#publication' onClick={() => props.setComp('home')}>Publication</a>
    },
    {
      key: '4',
      label: <a href='#cv' onClick={()=>props.setComp('cv')}>CV</a>
    },
    {
      key: '5',
      label: <a href='#teaching' onClick={() => props.setComp('cv')}>Teaching</a>
    },
    {
      key: '4',
      label: <a href='#service' onClick={() => props.setComp('cv')}>Service</a>
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div id="menu" className="nav">
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="avatar.JPG" style={{width: 25, height: 25}}/>
        <span className="name">Xinhuan Shu</span>
      </div>
      {screen > 660 ?
        <Anchor
          direction="horizontal"
          items={anchorItems}
        /> : 
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <a onClick={(e) => e.preventDefault()}>
              <MenuUnfoldOutlined />
            </a>
          </Space>
        </Dropdown>}
  </div>
  )
}

export default Nav