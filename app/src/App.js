import './App.css';
import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import { RecoilRoot, useRecoilState } from 'recoil';

import ChooseLanguageCard from './cards/ChooseLanguageCard';
import PreviousScoresCard from './cards/PreviousScoresCard';

import visibilityState from './visibilityState';


function App() {

  const [isVisible, setVisibilityState] = useRecoilState(visibilityState);
  //console.log(isVisible);

  //const [visibilityState, setVisibilityState] = useState({intro: true});

  // const showPreviousHandler = (target = {}) => {
  //   setVisibilityState({...target, ...Object.keys(visibilityState).forEach(v => visibilityState[v] = false) })
  //   console.log(visibilityState);
  // };

  //const setVisibility = (target = {}) => {
  //  setVisibilityState({...visibilityState, ...target})
  //  console.log(visibilityState);
  //};

  return (
        <div className="parent App" style={{overflow: 'hidden'}}>
        <Fade left collapse opposite when={isVisible.intro} duration={500} delay={200}>
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
                      let update = isVisible;
                      update.intro = false;
                      update.chooseLanguage = true;
                      setVisibilityState(update);
                    }}>Get Started</Button>
              </Card.Body>
            </Card>
          </Fade>
          <ChooseLanguageCard isVisible={isVisible.chooseLanguage} />
          <PreviousScoresCard isVisible={isVisible.previousScores} />
      </div>
  );
}

export default App;
