import react from 'react';
const Layout = ({ children }) => {

    return (
        <div className='text-white'>
            <main>{children}</main>
        </div>
    )
}

export default Layout;