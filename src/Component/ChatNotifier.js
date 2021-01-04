import React from 'react'
import { CheckOutlined } from '@ant-design/icons';

function ChatNotifier(props){
    if (props.sent){
        if (props.seen){
            return(
                <div className="sented seen">
                    {/* <CheckOutlined style={{ color: "blue" }} /> */}
                </div>
            )
        } else {
            return (
                <div className="sented">
                    <CheckOutlined style={{ color: "red" }} />
                </div>
    
            )
        }
        
    } else {
        return(
            <div className="sented">
                <CheckOutlined style={{ color: "black" }} />
            </div>
        )
    }

   
}

export default ChatNotifier
