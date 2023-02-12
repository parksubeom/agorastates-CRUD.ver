import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 테스트 실행 할 때 정확히 테스트 하기위해 이펙트 2번실행한다.
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

