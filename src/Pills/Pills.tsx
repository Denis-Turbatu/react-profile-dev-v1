import "./Pills.css";

function Pills() {
  const colorPills: string[] = [
    "red",
    "yellow",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "gray",
  ];

  interface PillItem {
    skill: string;
    level: string;
  }

  const itemPills: PillItem[] = [
    {
      skill: "HTML",
      level: "Advanced",
    },
    {
      skill: "CSS",
      level: "Advanced",
    },
    {
      skill: "JavaScript",
      level: "Advanced",
    },
    {
      skill: "React",
      level: "Beginner",
    },
    {
      skill: "PHP",
      level: "Advanced",
    },
    {
      skill: "Laravel",
      level: "Intermediate",
    },
    {
      skill: "MySQL",
      level: "Intermediate",
    },
    {
      skill: "Git",
      level: "Intermediate",
    },
  ];

  let availableColors = [...colorPills];

  return (
    <>
      <div className="pills">
        {itemPills.map((item, index) => {
          const randomIndex = Math.floor(
            Math.random() * availableColors.length,
          );
          const randomColor = availableColors[randomIndex];
          availableColors.splice(randomIndex, 1);

          return (
            <p key={index} className={`pill pill-${randomColor}`}>
              {item.skill}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Pills;
