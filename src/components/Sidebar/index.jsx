import React from 'react'
import { Link } from 'react-router-dom';

import './index.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" className='link-wrappper' style={{ textDecoration: 'none' }}>
                    <i className="fa-solid fa-building-columns"></i>
                    <span className="logo">Find Bank</span>
                </Link>
            </div>
            <hr />
            <div className="bottom">
                <ul>
                    <li>
                        <Link to="/all-banks" className='link-wrappper' style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-list icon"></i>
                            <span >All Banks</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites" style={{ textDecoration: 'none' }}>
                            <i className="fa-solid fa-star icon"></i>
                            <span >Favourites</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;