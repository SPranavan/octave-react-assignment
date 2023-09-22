import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Styles/Layout.css';

const Layout = () => {
  return (
    <>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div className="classoutlet" style={{ flex: 1, overflow: 'auto' }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Layout;