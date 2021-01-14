import { React } from 'react';
import './Chat.css';

export default function Chat({ messages }) {
    console.log('here');
    return (
        <div className='chatbox'>
            {(() => {
                const elements = [];
                messages.map((item) => {
                    elements.push(
                        <div className="mess-line">
                            <div className='user'>{item.user + ': '}</div>
                            <div className='message'>{item.message}</div>
                        </div>)
                })
                return elements;
            })()}
        </div>
    )
}