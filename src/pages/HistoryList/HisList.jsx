import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import NavBar from "../../components/Navbar/navbar";
import "./HisList.css";
import axios from "axios";

function HisList() {
    const history = useHistory();
    const [userList, setUserList] = useState([]);
    const [onlineUser, setOnlineUser] = useState([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        axios
            .get(localStorage.getItem("API") + "game-match/all")
            .then(function (response) {
                setUserList(response.data.users);
                console.log(userList);
            });
    }, []);
    return (
        <div>
            <NavBar></NavBar>
            <br />
            <ul class="list-group userlist">
                {(() => {
                    const elements = [];
                    userList.map((item) =>
                        elements.push(
                            <li class="list-group-item">
                                <a href={"/history/" + item.gameId} className="user">
                                    <div className="game">{item.gameId}</div>
                                </a>
                            </li>
                        )
                    );
                    return elements;
                })()}
            </ul>
        </div>
    );
}

export default HisList;
