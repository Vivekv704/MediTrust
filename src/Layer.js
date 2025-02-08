import react from 'react';
const Layout = ({ children }) => {

    return (
        <div className='text-white'>
            {/* <p>DHE</p> */}
            <main>{children}</main>
        </div>
    )
}

export default Layout;