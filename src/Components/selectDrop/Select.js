import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import '../selectDrop/select.css';
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
const Select = ({ data, placeholder }) => {

    const [isOpenSelect, setisOpenSelect] = useState(false)
    const [selectIndex, setselectIndex] = useState(0)
    const [selecteItem, setselectedItem] = useState(placeholder)
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
                <WhereToVoteIcon style={{opacity:'0.7'}}/>
                <span className='openSelect' onClick={openSelect}>{selecteItem} <ExpandMoreIcon /></span>
                {
                    isOpenSelect === true &&
                    <div className='selectProp'>
                        <div className='searchField'>
                            <input type="text" placeholder='Search here...' />
                        </div>
                        <ul className='searchResults'>
                            <li onClick={() => closeSelect(0, placeholder)} className={`${selectIndex === 0 ? 'active' : ''}`}>{placeholder}</li>
                            {
                                data.map((item, index) => {
                                    return (
                                        <li onClick={() => closeSelect(index + 1, item)} className={`${selectIndex === index + 1 ? 'active' : ''}`}>{item}</li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                }
            </div>
        </ClickAwayListener>


    )
}

export default Select
