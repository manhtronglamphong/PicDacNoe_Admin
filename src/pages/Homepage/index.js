import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import NavBar from "../../components/Navbar/navbar";
import "./index.css";
import axios from "axios";

function Homepage(props) {
  const history = useHistory();
  const [userList, setUserList] = useState([]);
  const [onlineUser, setOnlineUser] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    axios.get(localStorage.getItem('API')+'users/all')
    .then(function(response){
      setUserList(response.data.users);
    })
  },[])
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className='ml-5 listroom' style={{ width: "75%" }}>
        <div className='bar'>
          <div className='searchbar'>
            <div className='input'>
              <input
                onChange={(evt) => setKey(evt.target.value)}
                type='text'
                class='form-control'
                placeholder='Search...'
                required='true'
                autofocus=''
                value={key}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <ul class="list-group userlist">
          {(() => {
            const elements = [];
            if (!key) {
              userList.map((item) =>
                elements.push(
                  <li class="list-group-item">
                  <a href={"/" + item.email} className="user">
                    <div className="game">
                      {item.email}
                    </div>
                  </a>
                  <div className="result">{item.game.win}</div>
                </li>
                )
              );
            }
            else{
              userList.map((item) =>{
              console.log(key);
              console.log(item.email.toLowerCase());
              console.log(item.email.toLowerCase());
                if (item.email.toLowerCase().includes(key.toLowerCase())||item.name.toLowerCase().includes(key.toLowerCase())){
                  debugger
                  elements.push(
                    <li class="list-group-item">
                    <a href={"/" + item.email} className="user">
                      <div className="game">
                        {item.email}
                      </div>
                    </a>
                    <div className="result">{item.game.win}</div>
                  </li>
                )}
              })
            } 
            return elements;
          })()}
        </ul>
    </div>
  );
}

export default Homepage;
