import React from "react";
import { useState } from 'react';
export const UpdateForm = ({titleName,updateEvent, discussion}) => {
    const [value, setvalue] = useState(titleName);


    const newTitle = (e) => {
        updateEvent({id:discussion.id,title:value})
    }
    const onKeychange = (e) => {
        setvalue(e.target.value)
    }
    return (
        <div>
            <textarea className="update__form" defaultValue={value}  type="text" onChange={onKeychange}  >
            </textarea>
           <button type="button" id="update" onClick={newTitle} >수정</button>
        </div>
    )
}