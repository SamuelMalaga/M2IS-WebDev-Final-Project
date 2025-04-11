import React from "react";
import './ChatComponent.css'
import UserChat from "./UserChat";

function ChatComponent({openModalHandler}){
    const openModal = null;
    return(
        <>
        <div className="container has-background-black"  id="chatContainer" >

            <div className="container" id="userChatDisplayCard">
                <div className="container" id="sectionTitle">
                    <p className="title is-3 pl-3 pt-3 pb-2">
                        Chats
                    </p>
                </div>
                <div className="container has-background-black" id="chatsSection">
                    <div className="container button has-text-white" 
                    id="chatButton"
                    onClick={() => openModalHandler(1)}
                    >
                        <UserChat 
                        chatId={1}
                        />
                    </div>
                    <div 
                    className="container button has-text-white" 
                    id="chatButton"
                    onClick={() => openModalHandler(2)}
                    >
                        <UserChat 
                        chatId={2}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={3}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={4}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={5}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={6}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={7}/>
                    </div>
                    <div className="container button has-text-white" id="chatButton">
                        <UserChat chatId={8}/>
                    </div>
                </div>
                
               
            </div>
            <footer className="container pb-2 pt-2">
                <a href="#" className="card-footer-item">New Chat</a>
            </footer>
        </div>
        </>
    )
}

export default ChatComponent;