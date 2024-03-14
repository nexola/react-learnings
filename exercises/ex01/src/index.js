import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    name: "React",
    level: "advanced",
    color: "#60dafb",
  },
  {
    name: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    name: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    name: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    name: "SQL",
    level: "intermediate",
    color: "#AB65E9",
  },
];

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
  const emojis = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.name}
          emoji={emojis[skill.level]}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

function Skill({ name, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span className="emoji">{emoji}</span>
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
