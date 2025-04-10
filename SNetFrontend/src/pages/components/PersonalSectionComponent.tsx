import React from "react";

function PersonalSectionComponent({logged_user}){
    return(
        <>
        <div className="card">
            <br />
            <div className="container pl-5">
                <figure className="image is-128x128">
                <img className="is-rounded" src="https://bulma.io/assets/images/placeholders/128x128.png" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-content">
                    <p className="title is-4">{logged_user.name}</p>
                </div>
                </div>

                <div className="content">
                    {logged_user.bio} <a>@bulmaio</a>. <a href="#">#css</a>
                    <a href="#">#responsive</a>
                <br />
                </div>
            </div>
        </div>
        </>
    )
}

export default PersonalSectionComponent;