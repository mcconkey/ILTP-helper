import './App.css';
import { Card } from 'react-bootstrap';
//import { Styles } from 'react';

function App() {
  return (
    <div className="parent App">
        <Card style={{width: '20rem'}}>
               <Card.Title>Card Title</Card.Title>
               <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
               </Card.Text>
        </Card>
    </div>
  );
}

export default App;
