import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img src="./avatar.png" alt="avatar" height="300px" className="avatar" />
  );
}

function Intro() {
  return (
    <div className="intro">
      <h1>Vitor Vianna</h1>
      <p>I'm a web developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill name="HTML" emoji="🦾" bg-color="orange" />
      <Skill name="CSS" emoji="👊" bg-color="blue" />
      <Skill name="JavaScript" emoji="🤖" bg-color="yellow" />
      <Skill name="React" emoji="⚛️" bg-color="purple" />
    </ul>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.name}</span>
      <span className="emoji">{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
