import './App.css';
import React, { useEffect } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';
import { Fade } from 'react-reveal';

import { useRecoilState } from 'recoil';

import ChooseLanguageCard from './cards/ChooseLanguageCard';
import PreviousScoresCard from './cards/PreviousScoresCard';

import visibilityState from './atoms/visibilityState';
import progressState from './atoms/progressState';


function App() {

  const [isVisible, setVisibilityState] = useRecoilState(visibilityState);
  const [progress, setProgress] = useRecoilState(progressState);

  let vis = {...isVisible};

  useEffect(() => {
      vis = {...isVisible };
  });

  const hideCard = (name = "") => {
    console.log("hiding..." + name);
    vis[name] = false;
    setVisibilityState(vis);
    return Promise.resolve();
  };

  const showCard = async (name = "") => {
    console.log("showing... " + name);
    let visible = {...vis};
    visible[name] = true;
    setVisibilityState(visible);
    return Promise.resolve(visible);
  };

  const hideThenShow = (hide, show ) => {

    console.log("show hide called");

    console.log(isVisible);
    hideCard(hide).then(
      setTimeout(() => { showCard(show).then( console.log(isVisible)); }, 1000)
    );
  }

  return (
    <div class="App" style={{overflow: 'hidden'}}>
        <div className="Header">
          <p>ILTP-Helper</p>
           <ProgressBar now={progress} />
        </div>
        <div className="Content">
          <div className="Cards">
          <Fade left collapse opposite when={isVisible.intro} duration={500} delay={200} onReveal={() => console.log("blahblahb") }>
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

                      hideThenShow("intro", "chooseLanguage");
                    }}>
                      Get Started
                  </Button>
              </Card.Body>
            </Card>
          </Fade>
          <ChooseLanguageCard 
            back={() => { hideThenShow("chooseLanguage", "intro");  }}
            next={() => { hideThenShow("chooseLanguage", "previousScores"); }} 
          />
          <PreviousScoresCard
            back={() => { hideThenShow("previousScores", "chooseLanguage");  }}
            next={() => { hideThenShow("previousScores", "intro"); }} 
          />
          </div>      

      </div>
      <div class="Footer">
        <p>ILTP-Helper Copyright 2020</p>
      </div>
      </div>
  );
}

export default App;
