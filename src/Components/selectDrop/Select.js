import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import '../selectDrop/select.css'
const Select = () => {

    const [isOpenSelect, setisOpenSelect] = useState(false)
    const [selectIndex, setselectIndex] = useState(0)
    const [selecteItem, setselectedItem] = useState('All Categories')
    const openSelect = () => {
        setisOpenSelect(!isOpenSelect)
    }
    const closeSelect = (index, name) => {
        setselectIndex(index);
        setisOpenSelect(false)
        setselectedItem(name)
    }
    return (
        <ClickAwayListener onClickAway={() => setisOpenSelect(false)}>
            <div className='selectDrop cursor'>
                <span className='openSelect' onClick={openSelect}>{selecteItem} <ExpandMoreIcon /></span>
                {
                    isOpenSelect === true &&
                    <div className='selectProp'>
                        <div className='searchField'>
                            <input type="text" />
                        </div>
                        <ul className='searchResults'>
                            <li onClick={() => closeSelect(0, 'All Categories')} className={`${selectIndex === 0 ? 'active' : ''}`}>All Categories</li>
                            <li onClick={() => closeSelect(1, 'Milks and Dairies')} className={`${selectIndex === 1 ? 'active' : ''}`}>Milks and Dairies</li>
                            <li onClick={() => closeSelect(2, 'Clothing & beauty')} className={`${selectIndex === 2 ? 'active' : ''}`}>Clothing & beauty</li>
                            <li onClick={() => closeSelect(3, 'Pet Foods & Toy')} className={`${selectIndex === 3 ? 'active' : ''}`}>Pet Foods & Toy</li>
                            <li onClick={() => closeSelect(4, 'Baking material')} className={`${selectIndex === 4 ? 'active' : ''}`}>Baking material</li>
                            <li onClick={() => closeSelect(5, 'Fresh Fruit')} className={`${selectIndex === 5 ? 'active' : ''}`}>Fresh Fruit</li>
                            <li onClick={() => closeSelect(6, 'Wines & Drinks')} className={`${selectIndex === 6 ? 'active' : ''}`}>Wines & Drinks</li>
                            <li onClick={() => closeSelect(7, 'Fresh Seafood')} className={`${selectIndex === 7 ? 'active' : ''}`}>Fresh Seafood</li>
                            <li onClick={() => closeSelect(8, 'Fast food')} className={`${selectIndex === 8 ? 'active' : ''}`}>Fast food</li>
                            <li onClick={() => closeSelect(9, 'Vegetables')} className={`${selectIndex === 9 ? 'active' : ''}`}>Vegetables</li>
                            <li onClick={() => closeSelect(10, 'Bread and Juice')} className={`${selectIndex === 10 ? 'active' : ''}`}>Bread and Juice</li>
                        </ul>
                    </div>
                }
            </div>
        </ClickAwayListener>


    )
}

export default Select
