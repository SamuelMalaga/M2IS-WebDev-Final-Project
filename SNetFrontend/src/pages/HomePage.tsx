import React, { useState } from "react";
import PostComponent from "./components/PostComponent";
import './HomePage.css';
import PersonalSectionComponent from "./components/PersonalSectionComponent";
import ChatComponent from "./components/ChatComponent";
import ChatModalComponent from "./components/ChatModalComponent";


function HomePage(){

    const logged_user = {
        name:"Logged user Name",
        bio:"Logged user Bio"
    }
    const [modalState, setModalState] = useState(false)

    const [activeChatId, setActiveChatId] = useState(null)

    const handleModalClose = () => {setModalState(false)}

    const handleModalOpen = (chatId) => {
        setModalState(true)
        setActiveChatId(chatId)
    }

    return(
        <>
        <div className="container pt-2">
            <div className="columns ">
                <div className="column ">
                    <div className="container pr-2 pl-2 has-background-black" id="postDisplayArea">
                        <div className="container pt-4 pb-2 has-background-black" id="postFormContainer">
                            <div className="container pb-2">
                                <div className="field">
                                    <div className="control">
                                        <textarea 
                                        className="textarea" 
                                        placeholder="Write your post here"
                                        rows={3}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="button">Create post</button>
                            </div>
                        </div>
                        <PostComponent
                            postAuthor="Author"
                            postContent="Content"
                            postInfo="Info"
                        />
                        <PostComponent
                            postAuthor="Author"
                            postContent="Content"
                            postInfo="Info"
                        />
                        <PostComponent
                            postAuthor="Author"
                            postContent="Content"
                            postInfo="Info"
                        />
                        <PostComponent
                            postAuthor="Author"
                            postContent="Content"
                            postInfo="Info"
                        />
                        <PostComponent
                            postAuthor="Author"
                            postContent="Content"
                            postInfo="Info"
                        />

                    </div>
                </div>
                <div className="column is-two-fifths ">
                    <div className="fixed-grid has-1-cols ">
                        <div className="column pt-0">
                            <PersonalSectionComponent
                            logged_user={logged_user}
                            />
                        </div>
                        <div className="column">
                            <ChatComponent
                            openModalHandler={handleModalOpen}
                            />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        <ChatModalComponent
        isActive={modalState}
        handleClose={handleModalClose}
        activeChatId={activeChatId}
        />
        </>
    )
}
export default HomePage;