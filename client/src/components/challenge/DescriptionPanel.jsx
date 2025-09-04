

import { challenges } from "../../data/challenges";
import "./DescriptionPanel.css";

const title = challenges[0].title;
const description = challenges[0].description;


export default function DescriptionPanel() {
  return (
    <div className="container">
      <h2>{title}</h2>
      <pre className="description scrollable-content">{description}</pre>
    </div>
  );
}
