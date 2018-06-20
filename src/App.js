import React from 'react';
import './App.css';

function Contacts() {
  return (
    <div className="Contacts" >
      <h2>Contacts</h2>
    </div>
  )
}

function Chat() {
  return (
    <div className="Chat">
      <h2>Chatroom is starting...</h2>
    </div>
  )
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function App() {
  return (
    <SplitPane left={ <Contacts /> } right={ <Chat />} />
  );
}


export default App;
