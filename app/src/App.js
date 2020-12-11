import './App.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import { useRecoilState } from 'recoil';

import ChooseLanguageCard from './cards/ChooseLanguageCard';
import PreviousScoresCard from './cards/PreviousScoresCard';

import visibilityState from './visibilityState';


function App() {

  const [isVisible, setVisibilityState] = useRecoilState(visibilityState);

  return (
        <div className="parent App" style={{overflow: 'hidden'}}>
        <Fade left collapse opposite when={isVisible.intro} duration={500} delay={200}>
            <Card style={{width: '40rem'}} >
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                  </Card.Text>
                  <Button 
                    variant="light" 
                    onClick={() => {
                      setVisibilityState({...isVisible, ...{intro: false, chooseLanguage: true}});
                    }}>
                      Get Started
                  </Button>
              </Card.Body>
            </Card>
          </Fade>
          <ChooseLanguageCard />
          <PreviousScoresCard />
      </div>
  );
}

export default App;
