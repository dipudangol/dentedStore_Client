import React from 'react'
import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import SideMenu from '../sideMenu/SideMenu'

const AdminLayout = ({ children }) => {
    return (
        <div>
            {/* header */}
            <Header />

        {/* sideMenu */}
        <SideMenu/> 
            <main style={{ minHeight: "70vh" }}>{children}</main >
            
            {/* footer */}
            <Footer />
        </div>
    )
}

export default AdminLayout;