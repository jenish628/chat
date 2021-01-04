import React from 'react';
import ChatNotifier from './ChatNotifier';


const Message = () => {
    return (
        <>
            <div className="msg">
                <>
                    <h2>MESSAGES</h2>
                    <div className="receive">
                        <p>This Message is RECEIVED. A national flag is a flag that represents and symbolizes a given nation.</p>

                    </div>

                    <div className="sent">
                        <p> This Message is SENT. A national flag is a flag that represents and symbolizes a given nation.</p>
                        <ChatNotifier sent seen/>
                    </div>


                </>

            </div>

        </>
    )
}
export default Message;
