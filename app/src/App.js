import './App.css';
import { Card, Button } from 'react-bootstrap';
//import { Styles } from 'react';

function App() {
  return (
    <div className="parent App">
        <Card style={{width: '40rem'}}>
            <Card.Body>
               <Card.Title>Individualized Language Training Plan</Card.Title>
               <Card.Text>
                    Answer the questions on this short survey to help you build and Individualized Language Training Plan (ILTP)
                    which you help you improve and meet the requirements of you Command Language program. 
               </Card.Text>
               <Button variant="light" >Get Started</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default App;
