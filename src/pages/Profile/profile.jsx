import { React, useState, useEffect } from "react";
import axios from "axios";
import "./profile.css";
import NavBar from "../../components/Navbar/navbar";
import Switch from "react-switch";

export default function Profile({ match }) {
    console.log(match.params.email)
    const [data, setData] = useState([]);
    const [history, setHistory] = useState([
        { id: "123", result: "Win" },
        { id: "456", result: "Lost" },
    ]);
    const [status, setStatus] = useState([]);
    const changeStatus = (id) => {
        setStatus(!status);
        console.log(status);
        axios.post(localStorage.getItem('API') + 'users/change-status', { id: id })
            .then(function (response) {
                alert('Change status successful!');
                window.location.reload(true);
            })
            .catch(function (error) {
                alert(error.message);
            })
    }
    useEffect(() => {
        const getProfile = async () => {
            await axios.post(localStorage.getItem('API') + 'users/profile', { email: match.params.email })
                .then(function (response) {
                    console.log(response.data);
                    setData(response.data);
                    setStatus(response.data.user.active);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        getProfile();
    }, [])
    return (
        <div>
            {(() => {
                if (localStorage.getItem('token') === null) {
                    history.push('/signin');
                }
            })()}
            <NavBar></NavBar>
            <div className="content">
                {(() => {
                    if (data.length !== 0) {
                        const elements = [];
                        elements.push(
                            <div>
                                <div className="profile-name">{data.user.name}</div>
                                <div className="username">{data.user.email}</div>
                                <div className="trophy">
                                    <div className="point">{data.user.game.win} </div>
                                    <div className="star">
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <br />
                                <Switch onChange={() => changeStatus(data.user._id)} checked={data.user.active}></Switch>
                            </div>
                        )
                        return elements;
                    }
                })()}
                <br />
                <br />
                <ul class="list-group">
                    {(() => {
                        const elements = [];
                        history.map((item) =>
                            elements.push(
                                <li class="list-group-item">
                                    <a href={'/history/' + item.id}>
                                        <div className="game" >{item.id}</div>
                                    </a>
                                    <div className="result">{item.result}</div>
                                </li>
                            )
                        );
                        return elements;
                    })()}
                </ul>
            </div>
        </div>
    );
}
