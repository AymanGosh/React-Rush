import React from 'react';


import { challenges } from "../data/challenges";


const title = challenges[0].title;
const description = challenges[0].description;


export default function DescriptionPanel() {
  return (
    <div>
      <h2>{title}</h2>
      <pre>{description}</pre>
    </div>
  );
}
