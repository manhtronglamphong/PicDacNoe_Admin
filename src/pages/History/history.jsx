import { React, useState } from "react";
import "./history.css";
import { Row, Col } from 'react-bootstrap';
import NavBar from "../../components/Navbar/navbar";
import Board from './Board';
import Chat from './Chat'

export default function History() {
    const [data, setData] = useState({
        room: "#123",
        winner: "meo_lamphong",
        competitor: "duyquangtruong",
    });
    const [history, setHistory] = useState([
        { id: "123", result: "Win" },
        { id: "456", result: "Lost" },
    ]);
    const [messages, setMessages] = useState([
        { user: "meo_lamphong", message: "Hello" },
        { user: "duyquangtruong", message: "Hi" },
        { user: "meo_lamphong", message: "How are you?" },
        { user: "duyquangtruong", message: "I'm good" },
        { user: "meo_lamphong", message: "Hello" },
        { user: "duyquangtruong", message: "Hi" },
        { user: "meo_lamphong", message: "How are you?" },
        { user: "duyquangtruong", message: "I'm good" },
        { user: "meo_lamphong", message: "Hello" },
        { user: "duyquangtruong", message: "Hi" },
        { user: "meo_lamphong", message: "How are you?" },
        { user: "duyquangtruong", message: "I'm good" },
        { user: "meo_lamphong", message: "Hello" },
        { user: "duyquangtruong", message: "Hi" },
        { user: "meo_lamphong", message: "How are you?" },
        { user: "duyquangtruong", message: "I'm good" },
        { user: "meo_lamphong", message: "Hello" },
        { user: "duyquangtruong", message: "Hi" },
        { user: "meo_lamphong", message: "How are you?" },
        { user: "duyquangtruong", message: "I'm good" },

    ])
    console.log(history);
    return (
        <div>
            <NavBar></NavBar>
            <div className="content-his">
                <div className="roomid-his">{'Room: ' + data.room}</div>
                <div className="winner-his">{'Winner: ' + data.winner}</div>
                <div className="winner-his">{'Competitor: ' + data.competitor}</div>
                <br />
                <Row>
                    <Col xs={6}>
                        <Board></Board>
                    </Col>
                    <Col xs={6}>
                        <Chat messages={messages}></Chat>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
