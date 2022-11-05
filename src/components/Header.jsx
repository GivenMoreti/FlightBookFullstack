import React from 'react';

function Header() {
    return (
        <div > 
            <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                    <a href="#" className="nav-link"><h1 className="logo">🛩️</h1></a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link"><i class="fa fa-fw fa-home"></i>Home</a>
                </li>
                <li className="nav-item">
                    <a href="/book" className="nav-link"><i class="fa fa-fw fa-edit"></i>Book</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link"><i className="fa fa-fw fa-user"></i>Help</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link"><i class="fa fa-fw fa-calendar-o"></i>Special Dates</a>
                </li>
                <li className="nav-item">
                    <a href="/#" className="nav-link"><i class="fa fa-fw fa-phone"></i>Contact</a>
                </li>
               
                <li className="nav-item">
                    <a href="/#" className="nav-link"><i class="fa fa-fw fa-fire"></i>Seats Available</a>
                </li>
            </ul>
            
        </div>
        
    )
}
export default Header;