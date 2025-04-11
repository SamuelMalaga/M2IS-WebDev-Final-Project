import React from "react";

function PostComponent({postAuthor, postInfo, postContent}){
    return(
        <>
            <div className="container pt-3 pl-3 pr-3">
                <div className="card-content">
                    <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img
                            src="https://bulma.io/assets/images/placeholders/96x96.png"
                            alt="Placeholder image"
                        />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{postAuthor}</p>
                        <p className="subtitle is-6">{postInfo}</p>
                    </div>
                    </div>

                    <div className="content has-text-white">
                        <p>{postContent}</p>
                    <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostComponent;