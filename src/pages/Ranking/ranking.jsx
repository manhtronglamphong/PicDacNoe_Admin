import { React, useState, useEffect } from "react";
import "./ranking.css";
import NavBar from "../../components/Navbar/navbar";
import axios from "axios";

export default function Ranking() {
  // const [data, setData] = useState({
  //     name: "Manh Trong Lam Phong",
  //     username: "meo_lamphong",
  //     trophy: "5",
  // });
  const [ranking, setRanking] = useState([]);
  useEffect(() => {
    axios.get(localStorage.getItem('API') + 'top-10-player')
      .then(function (response) {
        setRanking(response.data.users);
      })
      .catch(function (error) {
        alert(error.message);
      });
  }, [])
  return (
    <div>
      <NavBar></NavBar>
      <div className="content-ranking">
        <h1>RANKING</h1>
        <br />
        <br />
        <ul class="list-group ranking">
          {(() => {
            let no = 0;
            const elements = [];
            ranking.map((item) => {
              no = no + 1;
              elements.push(
                <li class="list-group-item">
                  <a href={"/" + item.email} className="user">
                    <div className="game">
                      {"#" + no + ". " + item.email}
                    </div>
                  </a>
                  <div className="result">{item.game.win}</div>
                </li>
              );
            });
            return elements;
          })()}
        </ul>
      </div>
    </div>
  );
}
