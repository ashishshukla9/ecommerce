import React, { useEffect, useState } from 'react'
import '../header/header.css'
import Logo from '../../assets/images/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/Select'
import axios from 'axios';
const Header = () => {
    const [Categories, setCategories] = useState([
        'Milks and Dairies',
        'Clothing & beauty',
        'Pet Foods & Toy',
        'Baking material',
        'Fresh Fruit',
        'Wines & Drinks',
        'Fresh Seafood',
        'Fast food',
        'Vegetables',
        'Bread and Juice'
    ]);

    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    })

    const getCountry = async (url) => {
        try {

            await axios(url).then((res) => {
                if (res !== null) {
                    // console.log(res.data.data)
                    res.data.data.map((item, index) => {
                        countryList.push(item.country);
                        // console.log(item.country)
                    })

                }
            })

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-2'>
                            <img src={Logo} alt='' />
                        </div>
                        <div className='col-sm-5'>
                            <div className='headerSearch d-flex align-items-center'>
                                <Select data={Categories} placeholder={'Add Categories'} />

                                <div className='search'>
                                    <input type="text" placeholder='Search for items...' />
                                    <SearchIcon className='searchIcon cursor' />
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='headerSearch countryWrapper d-flex align-items-center'>
                                <Select data={countryList} placeholder={'Add Location'} />
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header
