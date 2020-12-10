import './App.css';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import ChooseLanguageCard from './cards/ChooseLanguageCard';

function App() {

  const [visibilityState, setVisibilityState] = useState({intro: true});

  const showPreviousHandler = (target = {}) => {
    setVisibilityState({...target, ...Object.keys(visibilityState).forEach(v => visibilityState[v] = false) })
    console.log(visibilityState);
  };

  const setVisibility = (target = {}) => {
    setVisibilityState({...visibilityState, ...target})
    console.log(visibilityState);
  };

  return (
    <div className="parent App" style={{overflow: 'hidden'}}>
      
      <Fade left collapse opposite when={visibilityState.intro} duration={500}>
          <Card style={{width: '40rem'}}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
                <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                </Card.Text>
                <Button 
                  variant="light" 
                  onClick={() => {
                    setVisibility({chooseLanguage: true, intro: false});
                    console.log(visibilityState);
                    //setChooseLanguageVisible(true);
                  }}>Get Started</Button>
            </Card.Body>
          </Card>
        </Fade>
        <ChooseLanguageCard isVisible={visibilityState.chooseLanguage} showPrevious={setVisibility}/>
       
    </div>
  );
}

export default App;
