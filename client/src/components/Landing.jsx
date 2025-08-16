import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Welcome to the Q&A App</h1>
      <ul>
        <li><Link to="/question1">Go to Question 1</Link></li>
      
      </ul>
    </div>
  );
}
