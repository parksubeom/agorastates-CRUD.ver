import './App.css';
import React from "react";
import { Form } from './components/Form';
import { Discussions } from './components/Discussions';
import { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';


function InputInform(username,titlename,storyname) {
  this.id = Date.now();
  this.author = username;
  this.createdAt = new Date();
  this.url = "https://github.com/parksubeom?tab=repositories"
  this.title = titlename;
  this.bodyHTML = storyname;
  this.avatarUrl = "https://avatars.githubusercontent.com/u/104641096?v=4"
}
//---------------------------새로운 디스커션 만들어주는 공장.-------------------------//

function App() {
  
  const [discussions, setDiscussions] = useState([]);
  console.log(discussions)
  //POST------------------서브밋 버튼 누르면 setSubmit을 이용하여 상태를 변경해준다.-----------//
    const onSubmit = ( {username,titlename,storyname} ) => { 
      const newDiscussions = new InputInform(username,titlename,storyname);
        fetch("http://localhost:4000/discussions/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",        
          },
          body: JSON.stringify(newDiscussions) // 아까 포장해놨던 newObj를 조심스레 POST 아저씨한테 건낸다.
        })
        .then(response => response.json()) // 택배가 왔다. 포장을까자
        .then((data) => {
          //set함수는 함수를 화살표 함수를 통해 받으면 첫번째 인자로 state값이
          setDiscussions(prev => [data,...prev]);
        })  
      }
  //GET---------서버로 get요청을 보내고, 서버로부터 받아온 정보를 discussions 값으로 변경해준다.------//
    useEffect(() => {
      fetch('http://localhost:4000/discussions')
      .then(res => res.json())
      .then(data => {
        setDiscussions(data);
      })
    }, []);
 //DELETE---------서버로 delete 요청을 보내고, 서버로부터 요청된 값이 삭제된 데이터를 받아 discussions 값으로 변경해준다.------//
const deleteEvent = ( {deleteID} ) => {
  console.log(deleteID) // 여기까진 잘 들어온다.
  if(window.confirm("정말 삭제하시 겠습니까?"))
    fetch("http://localhost:4000/discussions/id:", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(deleteID) 
    })
    .then(response => response.json()) 
    .then((data) => {
      setDiscussions(data);
    })
  }
//UPDATE--------------서버로 UPDATE요청을 보내고, 서버로부터 수정데이터가 추가된 데이터를 받는다.  
const updateEvent = ( {id, title} ) => {
  console.log(id)
  console.log(title)
  let updatetitle = {title:title}
  fetch(`http://localhost:4000/discussions/${id}`, {
      
      method: "PUT",
      headers: {
        "Content-Type": "application/json",        
      },
      body: JSON.stringify(updatetitle) 
    })
    .then(response => response.json()) 
    .then((data) => {
      setDiscussions(data);
      console.log(data)
    })

}

  return (
      
      <div>
        <Sidebar/>
      <main>           
        <Form  onSubmit = {onSubmit}  />     
        <Discussions discussions={discussions} deleteEvent = {deleteEvent} updateEvent = {updateEvent}/>
      </main>
      </div>  
      
  );
}

export default App;