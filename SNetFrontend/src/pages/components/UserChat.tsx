import React from "react";
import './UserChat.css'

function UserChat({chatId}){

    return(
        <>
        <div className="container">
            <div className="columns pl-2">
                <div className="column is-one-fifth">
                    <figure className="image is-32x32">
                        <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
                    </figure>
                </div>
                <div className="column pl-0" id="friendNameDisplay">
                    Test Chat with chatId {chatId}
                </div>
            </div>
        </div>
        </>
    )

}

export default UserChat