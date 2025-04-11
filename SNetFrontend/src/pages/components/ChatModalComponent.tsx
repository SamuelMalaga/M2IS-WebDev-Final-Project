import React, { useState } from "react";

function ModalComponent({isActive, handleClose, activeChatId}) {

    const [modalState,setModalState] = useState(isActive)


    return(
        <>
        <div className={`modal ${isActive ? "is-active":""}`}>
                <div className="modal-background"></div>

                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">Chat Id: {activeChatId} | Chat with:</p>
                    <button className="delete" aria-label="close" onClick={handleClose}></button>
                    </header>
                    <section className="modal-card-body">
                        <div className="container">
                            <div className="container">
                                <div className="card" id="messageCard">
                                    <div className="navbar-menu pl-5 pr-5 pt-2">
                                        <div className="navbar-start has-text-warning">
                                            <p>Message sent by sender at time</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
                                        id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
                                        consectetur purus sit amet fermentum.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="messageCard">
                                    <div className="navbar-menu pl-5 pr-5 pt-2">
                                        <div className="navbar-end has-text-primary">
                                            <p>Message sent by sender at time</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
                                        id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
                                        consectetur purus sit amet fermentum.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="messageCard">
                                    <div className="navbar-menu pl-5 pr-5 pt-2">
                                        <div className="navbar-end has-text-primary">
                                            <p>Message sent by sender at time</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
                                        id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
                                        consectetur purus sit amet fermentum.
                                        </div>
                                    </div>
                                </div>
                                <div className="card" id="messageCard">
                                    <div className="navbar-menu pl-5 pr-5 pt-2">
                                        <div className="navbar-end has-text-primary">
                                            <p>Message sent by sender at time</p>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec
                                        id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus
                                        et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis
                                        consectetur purus sit amet fermentum.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <div className="container">
                            <div className="container pb-2">
                                <div className="field">
                                    <div className="control">
                                        <textarea 
                                        className="textarea" 
                                        placeholder="Write your message here"
                                        rows={3}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="button is-success">Send Message</button>
                            </div>
                        </div>
                    </footer>
                </div>
                {/* <button className="modal-close is-large" aria-label="close" onClick={handleClose}></button> */}
        </div>
            
        </>
    )

}


export default ModalComponent