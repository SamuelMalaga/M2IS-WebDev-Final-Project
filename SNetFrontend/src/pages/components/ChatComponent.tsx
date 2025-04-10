import React from "react";
import './ChatComponent.css'
import UserChat from "./UserChat";

function ChatComponent(){
    return(
        <>
        <div className="card" >

            <div className="container">
                <div className="container">
                    <p className="title is-3 pl-3 pt-3 pb-2">
                        Chats
                    </p>
                </div>
                <table className="table is-bordered is-hoverable" id="chatDisplayTable">
                    <tbody>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <UserChat></UserChat>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">New Chat</a>
            </footer>
        </div>
        </>
    )
}

export default ChatComponent;