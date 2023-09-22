import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../Styles/Layout.css';

const Layout = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div className='classoutlet ms-5' style={{marginTop:"100px"}}>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout;