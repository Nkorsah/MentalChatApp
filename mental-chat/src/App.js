import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button"
import Card from './Components/Card';
import CardCounter from './Components/CardCounter';

function App() {
  const cardData = {
    card2: {
      cardName: "This is the second card",
      description: "This is a description about the second card if you want to know"
    }
  }
  const cardDescrption1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  return (
    <div className="card-container">
      <Card cardName={"Card 1"} description={cardDescrption1}/>
      <Card {...cardData.card2}/> 
      <Card cardName={"Card 3"} description={"Description 3"}/>
      <div className="card-container">
        <CardCounter />
      </div>
    </div>
  );
}

export default App;

// How do I justify the card components and allign them a certain way?
// I used the spread operator to input the props to make things simpler

// now we need to save state