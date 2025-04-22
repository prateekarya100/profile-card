import "./App.css";
import { Avatar } from "./components/Avatar";
import { Intro } from "./components/Intro";
import { Skill } from "./components/Skill";

// const skills = [
//   { text: "HTML+CSS", color: "#536DFE", emoji: "💪" },
//   { text: "JavaScript", color: "#FBC02D", emoji: "❤️‍🔥" },
//   { text: "Web Design", color: "#f6339a", emoji: "👨‍💻" },
//   { text: "Git and GitHub", color: "tomato", emoji: "👍" },
//   { text: "React", color: "#4DD0E1", emoji: "⚛" },
//   { text: "Svelte", color: "#BA68C8", emoji: "💪" },
// ];

const skills = [
  { skill: "HTML+CSS", level: "advanced", color: "#7C4DFF" },
  { skill: "JavaScript", level: "advanced", color: "#8D6E63" },
  { skill: "Web Design", level: "advanced", color: "#FDD835" },
  { skill: "Git and GitHub", level: "intermediate", color: "#E53935" },
  { skill: "React", level: "advanced", color: "#303F9F" },
  { skill: "Svelte", level: "beginner", color: "#CDDC39" },
];

// 💪 advanced
//👍 intermediate
//👶 beginner

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skill skills={skills} />
      </div>
    </div>
  );
}

export default App;
