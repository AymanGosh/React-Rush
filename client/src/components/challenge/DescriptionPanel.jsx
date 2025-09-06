

 
import "./DescriptionPanel.css";

 


export default function DescriptionPanel({title,description}) {
  return (
    <div className="container">
      <h2>{title}</h2>
      <pre className="description scrollable-content">{description}</pre>
    </div>
  );
}
