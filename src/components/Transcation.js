import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Transcation() {
    let amount = useSelector(store => store.userSection);
    // let [amount, setAmount] = useState([])
    let signOf = amount.transcationAmount > 0 ? '+' : '-';
    let type = signOf == '+' ? 'plus' : 'minus';
    // let [amount , setAmount] = 
    let dispatch = useDispatch();

    return (
        <div>
            <h3>
                Transcation History
            </h3>
            {
                amount.map((e, id) => {
                    return (
                        <div key={id}>
                            <ul className='list' >
                                <li className={type}>
                                    {e.description}
                                    <span>${e.transcationAmount}</span>
                                    <button className='delete-btn' onClick={() => {
                                        dispatch({
                                            type: 'DELETE_USER',
                                            payload: id

                                        })
                                    }}>X</button>
                                </li>
                                {/* <li className={type}>
                                    {e.description}
                                    <span>${e.transcationAmount}</span>
                                    <button className='delete-btn'>X</button>
                                </li> */}
                            </ul>

                        </div>
                    )
                })
            }
        </div>



    )
}

export default Transcation