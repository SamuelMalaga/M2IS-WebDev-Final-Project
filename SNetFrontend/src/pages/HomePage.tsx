import React from "react";
import PostComponent from "./components/PostComponent";
import './HomePage.css';
import PersonalSectionComponent from "./components/PersonalSectionComponent";

function HomePage(){

    const logged_user = {
        name:"Logged user Name",
        bio:"Logged user Bio"
    }

    return(
        <div className="container pt-2">
            <div className="columns ">
                <div className="column ">
                    <div className="container" id="postDisplayArea">
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
                        <div className="notification is-primary">
                                chat section
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
    )
}
export default HomePage;