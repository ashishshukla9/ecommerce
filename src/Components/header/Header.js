import React from 'react'
import '../header/header.css'
import Logo from '../../assets/images/logo.svg'
const Header = () => {
    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src={Logo} />
                        </div>
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <div className='selectDrop cursor'>
                                    All Categories
                                </div>
                                <div className='search'>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header
