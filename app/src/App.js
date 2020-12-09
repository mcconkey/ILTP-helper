import './App.css';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
//import { Styles } from 'react';

function App() {
  return (
    <div className="parent App">
      <Fade left>
          <Card style={{width: '40rem'}}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                </Card.Text>
                <Button variant="light">Get Started</Button>
            </Card.Body>
          </Card>
        </Fade>
    </div>
  );
}

export default App;
