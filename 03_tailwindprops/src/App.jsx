import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Practice from "./component/customComp";
import RedimentCopm from "./component/redimentCopm";
import Card from "./component/Card";
import Profile from "./component/Blog/profile";

function App() {
  // let propObject = {
  //   username: "furkan",
  //   age: 22,
  //   city: "Bareilly",
  //   desc: "learning how actually props works",
  // };

  // let myArr = [1, 3, 5, 7];

  return (
    <>
      {/* <RedimentCopm />
      <Practice />
      <br />
      <Card
        username="first_prop"
        myObj={propObject}
        arr={myArr}
        positionTxt="Frontend Developer"
      />
      <br />
      <Card username="second_prop" positionTxt="Backend Developer" />
      <br /> */}

      <Router>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<RedimentCopm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/practice" element={<Practice />} />

          <Route
            path="/card"
            element={
              <div>
                <Card username="first_card" positionTxt="Frontend Developer" />
                <br />
                <Card username="second_card" positionTxt="Backend Developer" />
                <br />
                <Card
                  username="third_card"
                  positionTxt="Full Stack Developer"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
