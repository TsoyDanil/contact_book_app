import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const Layout: React.FunctionComponent = (): React.ReactElement => {

    return (
        <>
            <div className='Layout' >
                <h1>Contacts</h1>
                <ul className='Layout_Links'>
                    <li className={'NavLink'}>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className={'NavLink'}>
                        <NavLink to={'/add-form'}>Add new contact</NavLink>
                    </li>
                </ul>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout