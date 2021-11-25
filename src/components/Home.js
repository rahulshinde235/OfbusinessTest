import React, { useEffect, useState } from "react";
import "./Home.css";
import Chat from "../assets/chat.png";

const Home = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      {data &&
        data.map((item) => (
          <div key={item.id} className="card">
            <h2 className="item-title"> {item.title}</h2>
            <div className="issue-container">
              {item.labels.map((issue, index) => (
                <div
                  key={index}
                  className="issue"
                  style={{ backgroundColor: `#${issue.color}` }}
                >
                  <h3 style={{ color: "#00021B" }}>{issue.name}</h3>
                </div>
              ))}
            </div>
            <p>
              #{item.number} opened 4 hours ago by {item.user.login}
            </p>
            <div className="container-right">
              <img
                src={Chat}
                style={{ width: "15px", height: "15px" }}
                alt="chat"
              />
              <span>{item.comments}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
