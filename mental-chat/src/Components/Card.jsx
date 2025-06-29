import Button from "./Button";
function Card(props) { // props make components reusable
    return (
        <div className="card">
            <h1>{props.cardName}</h1>
            <p>{props.description}</p>
            <button className="btn">Button</button>
        </div>
    );
}

export default Card;

// last time I had typescript. 
// these prop definitions look different now