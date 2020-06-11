import React from 'react';
import './messages.css'

const Messages = (props) => {

    let newMessageElement = React.createRef()

    let sendMeassage = () => {
        let text = newMessageElement.current.value
        alert(text)
    }

    return (
        <div className="messages">
            <div className="messages__header">
                <img src="https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg" className="messages__userpic"></img>
                <div className="messages__username">
                    { props.name }
                </div>
                <div className="messages__menu">
                    Menu
                </div>
            </div>
            <div>

            </div>
            <div className="messages__footer">
                <div className="messages__files">
                    <button className="messages__button">Files</button>
                </div>
                <textarea className="messages__textarea" ref={newMessageElement} ></textarea>
                {/*<div className="messages__text">
                    <div className="messages__text-border">

                    </div>
                </div>*/}
                <div className="messages__files">
                    <button className="messages__button" onClick={ sendMeassage }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages