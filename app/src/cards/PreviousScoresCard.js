import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState } from 'recoil';

import visibilityState from '../visibilityState';

const PreviousScoresCard = () => {
   
    const [isVisible, setVisibilityState] = useRecoilState(visibilityState);
    let visible = isVisible.previousScores ? true : false;
    return (
        <React.Fragment>
            <Fade 
                left 
                opposite 
                collapse 
                when={visible} 
                duration={500} 
                delay={1500} 
                delayOut={0}>
                <Card style={{width: '40rem'}}>
                    <Card.Body>
                        <Card.Text>
                        Previous Scores...
                        </Card.Text>
                        <Button 
                            variant="light" 
                            onClick={() => { 
                                setVisibilityState({...isVisible, ...{previousScores: false, chooseLanguage: true}})
                            }} >
                            Back
                        </Button>
                        {' '}
                        <Button 
                            variant="light" 
                            onClick={() => { 
                                setVisibilityState({...isVisible, ...{previousScores: false} })
                            }} >
                            Next
                        </Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default PreviousScoresCard;