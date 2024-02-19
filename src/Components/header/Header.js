import React from 'react'
import '../header/header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select'
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
                                <Select />
                                
                                <div className='search'>
                                    <input type="text" placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
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
