export function Skill({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((item) => (
        <>
          <span className="skill" style={{ backgroundColor: `${item.color}` }}>
            {item.skill}
            {item.level === "advanced" && "💪"}
            {item.level === "intermediate" && "👍"}
            {item.level === "beginner" && "👶"}
          </span>
        </>
      ))}
    </div>
  );
}
