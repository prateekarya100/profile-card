export function Skill({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((item, index) => (
        <span
          key={index}
          style={{
            background: item.color,
            margin: ".2rem",
            textAlign: "center",
            borderRadius: "4px",
          }}
          className="skill"
        >
          {item.text} {item.emoji}
        </span>
      ))}
    </div>
  );
}
