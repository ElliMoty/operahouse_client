import React, { useState } from 'react';
import './css/nav.scss';
// import Logo from './images/logo.png'
import Login from './Login'
import SignUp from './SignUp'
import axios from 'axios'

function Nav() {


// User Authentication
  const header = {"headers": {"Authorization": localStorage.Authorization}}
  const [currentUser, setCurrentUser] = useState(false)
  const [message, setMessage] = useState('')
  const checkAuthOfApi = async (req, res) => {
    if (!currentUser) {
   const response = await axios
       .get("http://localhost:3000/auth", req)
           setMessage(response.data.msg)
           setCurrentUser(response.data.user_id)
           }
        }
  checkAuthOfApi(header)
    return (
        <div>

            <nav>
                <div className="one">
                    <a href="/" className="navLinks"></a>
                </div>

                <div className="two">

                </div>

                <div className="logo">
                    <div className="pageTitle">
                        <p className='operaHouse'>
                            <span>
                                OPERA HOUSE
                            </span>
                        </p>
                    </div>
                </div>

                <div className="three">
                {currentUser === false ? (
                    <span>
                    < Login />
                    </span>
                  ) : (
                      <span>{message}</span>
                    )}
                </div>

                <div className="four">
                    <ul className="menu">
                        <li><a href="/events/categories" className="navLinks">Categories</a></li>
                    </ul>
                    {/* <div className="search">
                        <div className="search-content">
                            <button className="search-button"><i className="fa fa-search"></i></button>
                            <input type="text" className="search-input" placeholder="Search here..." />
                        </div>
                    </div> */}
                </div>
            </nav>

        </div>
    );
}

export default Nav;
