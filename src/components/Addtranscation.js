import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

function Addtranscation() {
    let [description, setDescription] = useState('')
    let [transcation, setTrancation] = useState();
    let data = useForm();
    let dispatch = useDispatch();
    const addTranscation = (data) => {

        dispatch({
            type: 'USER_ADD',
            payload: data,
        })
        console.log(data);
        
        
    }

    
    // data.reset()
    return (
        <div>
            <h3>Add New Transcation</h3>
            <form onSubmit={data.handleSubmit(addTranscation)}>
                <div className='form-control'>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input type="text" {...data.register('description', { required: true })} id="description" placeholder='Detail of Transcation'
                        value={description}
                        onChange={(d) => setDescription(d.target.value)}
                    />
                    {data.formState.errors.description && data.formState.errors.description.type == 'required' && <div className='error'>Please Add Description</div>}

                </div>
                <div className='form-control'>
                    <label htmlFor='transcationamount'>
                        Transcation Amount
                    </label>
                    <input type="number" {...data.register('transcationAmount', { required: true })} id="transcationAmount" placeholder='Detail of Amount'
                        value={transcation}
                        onChange={(t) => setTrancation(t.target.value)}
                    />
                    {data.formState.errors.transcationAmount && data.formState.errors.transcationAmount.type == 'required' && <div className='error'>Please Enter a amount</div>}

                </div>
                <button className='btn'>Add Transcation</button>
            </form>
        </div>
    )
}

export default Addtranscation