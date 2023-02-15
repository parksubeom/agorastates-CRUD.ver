import React from "react";
import { useState } from 'react';
export const UpdateForm = ({titleName,updateEvent, discussion,setModal}) => {
    const [value, setvalue] = useState(titleName);
    const [updateID, setUpdateID] = useState(discussion.id)

    const newTitle = (e) => {
        updateEvent({id:discussion.id,title:value})
        setModal(false)
    }
    const onKeychange = (e) => {
        setvalue(e.target.value)
        
    }
    return (
        <div>
            <textarea className="update__form" defaultValue={value}  type="text" onChange={onKeychange}  >
            </textarea>
           <button type="button" id="update" onClick={newTitle} >전송</button>
        </div>
    )
}