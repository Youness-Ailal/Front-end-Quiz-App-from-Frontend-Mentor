export default function Logo({ subject, textSize = 5, gap = 4 }) {
  switch (subject) {
    case "html":
      return (
        <div className={`logo flex items-center gap-${gap} text-${textSize}xl`}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />{" "}
          HTML
        </div>
      );
    case "css":
      return (
        <div className={`logo flex items-center gap-${gap} text-${textSize}xl`}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />{" "}
          CSS
        </div>
      );
    case "js":
      return (
        <div className={`logo flex items-center gap-${gap} text-${textSize}xl`}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />{" "}
          JavaScript
        </div>
      );
    case "react":
      return (
        <div className={`logo flex items-center gap-${gap} text-${textSize}xl`}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          React
        </div>
      );
    default:
      return (
        <div
          style={{ opacity: 0, userSelect: "none" }}
          className="logo flex items-center gap-4 text-5xl">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          React
        </div>
      );
  }
}
