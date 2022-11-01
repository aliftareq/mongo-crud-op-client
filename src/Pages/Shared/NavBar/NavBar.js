import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='text-center'>
            <Link to='/'><button className='btn mx-2'>Home</button></Link>
            <Link to='/create-user'><button className='btn mx-2'>create a user</button></Link>
        </div>
    );
};

export default NavBar;