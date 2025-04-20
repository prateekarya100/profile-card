import "./App.css";
import { Avatar } from "./components/Avatar";
import { Intro } from "./components/Intro";
import { SkillList } from "./components/SkillList";

const skills = [
  { text: "HTML+CSS", color: "#536DFE", emoji: "💪" },
  { text: "JavaScript", color: "#FBC02D", emoji: "❤️‍🔥" },
  { text: "Web Design", color: "#f6339a", emoji: "👨‍💻" },
  { text: "Git and GitHub", color: "tomato", emoji: "👍" },
  { text: "React", color: "#4DD0E1", emoji: "⚛" },
  { text: "Svelte", color: "#BA68C8", emoji: "💪" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

export default App;
