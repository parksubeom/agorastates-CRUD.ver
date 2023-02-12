import { useState } from 'react';
export const Form = ({onSubmit}) => {
    const [textUsername, setTextUsername] = useState('');
    const [textTitlename, setTextTitlename] = useState('');
    const [textStoryname, setTextStoryname] = useState('');

    const handleChange1 = (e) => {
        setTextUsername
        (e.target.value);  
      };
      const handleChange2 = (e) => {
        setTextTitlename
        (e.target.value);  
      };
      const handleChange3 = (e) => {
        setTextStoryname
        (e.target.value);  
      };

      const handleKeyPress1 = (e) => {
        if (e.type === 'keydown' && e.code === 'Enter') {
         discussionSubmit();
        }
      };
      const handleKeyPress2 = (e) => {
        if (e.type === 'keydown' && e.code === 'Enter') {
         discussionSubmit();
        }
      };
      const handleKeyPress3 = (e) => {
        if (e.type === 'keydwn' && e.code === 'Enter') {
         discussionSubmit();
        }
      };
    
    const discussionSubmit = (e) => {
        e.preventDefault();
        console.log('디스커션 서브밋 함수 실행');
        onSubmit({username: textUsername,titlename: textTitlename,stryname:textStoryname}); 
        setTextTitlename('')
        setTextUsername('')
        setTextStoryname('')        
      };

    return(
        
    <section className ="Form__container">
      <h1>My Agora States</h1>
      <form className ="Form" onSubmit={discussionSubmit}>
            <div className ="Form__input--wrapper">
            <div className ="Form__input--name">
                <label htmlFor="name">Enter your name: </label>
                <input 
                 type="text"
                 name="name"
                 value={textUsername}
                 onChange={handleChange1}
                 onKeyDown={handleKeyPress1}
                 id="username"
                 autocomplete="off"
                    />
            </div>
            <div className ="Form__input--title">
                <label htmlFor="name">Enter your title: </label>
                <input 
                 type="text"
                 name="name"
                 value={textTitlename}
                 onChange={handleChange2}
                 onKeyDown={handleKeyPress2}
                 id="titlename"
                 autocomplete="off"
                    />
            </div>
            <div className ="Form__textbox">
                <label htmlFor="story">Your question: </label>
                <textarea
                 type="text"
                 name="story"
                 value={textStoryname}
                 onChange={handleChange3}
                 onKeyDown={handleKeyPress3}
                 id="story"
                 autocomplete="off"
                    />
            </div>
            </div>
        <div className ="Form__submit">
        <button type="submit" value="submit" id="button">submit</button>
        </div>
      </form>
      
    </section>
    )
}
   
 
