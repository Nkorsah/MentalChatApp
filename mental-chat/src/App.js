import logo from './logo.svg';
import './App.css';

import Card from './Components/Card.jsx';
import CardCounter from './Components/CardCounter.jsx';
import SignIn from './Components/SignIn.jsx';

function App() {
  const cardData = {
    card2: {
      cardName: "This is the second card",
      description: "This is a description about the second card if you want to know"
    }
  }
  const cardDescrption1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  return (
    <div className='card-container'>
      <SignIn />
    </div>
  );
}

export default App;

// How do I justify the card components and allign them a certain way?
// I used the spread operator to input the props to make things simpler

// now we need to save state