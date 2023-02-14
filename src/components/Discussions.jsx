import { Discussion } from "./Discussion"
import React from "react";
export const Discussions = ({discussions, deleteEvent,updateEvent}) => {
    return(
        <section className="discussion__wrapper">
        <ul className="discussions__container">
          {discussions.map(discussion => {
            return <Discussion discussion={discussion} key={discussion.id} deleteEvent = {deleteEvent} updateEvent = {updateEvent}/>
          })}
        </ul>
      </section>
    )
}