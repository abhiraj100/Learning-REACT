import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';    // for dynamic content -> we can change the content in place of <Outlet /> and <Header /> and <Footer /> is same for all.

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />   
    {/*automatically nested by the react-router-dom  ||  we can change the things here that means we render different component in place of Outlet, Header and Footer remain same for all */}
    <Footer />
    </>
  )
}

export default Layout;