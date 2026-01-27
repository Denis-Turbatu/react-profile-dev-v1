import "./App.css";
import Avatar from "./Avatar/Avatar.tsx";
import Description from "./Description/Description.tsx";
import Pills from "./Pills/Pills.tsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="header-card">
            <Avatar />
          </div>
          <div className="body-card">
            <Description />
          </div>
          <div className="footer-card">
            <Pills />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
