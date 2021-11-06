import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = (props) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
    }, [isActive]);

    return (
        <div className="menu-container">
            <Link to="/profile" onClick={onClick} className="nav-link">PROFILE</Link>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to="/profile/userposts">My Routines</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropdownMenu;