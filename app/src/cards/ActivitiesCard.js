import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState, useRecoilValue } from 'recoil';

import visibilityState from '../atoms/visibilityState';
import surveyState from '../atoms/surveyState';
import progressState from '../atoms/progressState';

const ActivitiesCard = ({next, back}) => {

    const visible = useRecoilValue(visibilityState).activities ? true : false;
    const [progress, setProgress] = useRecoilState(progressState);
    const [survey, setSurvey] = useRecoilState(surveyState);
    
    return (
        <React.Fragment>
            <Fade 
                left 
                opposite 
                collapse 
                when={visible} 
                duration={500} 
                delay={0} 
                delayOut={0}>
                <Card style={{width: '40rem'}}>
                    <Card.Body>
                        <Card.Text>
                        Previous Scores...
                        </Card.Text>
                        <Button 
                            variant="light" 
                            onClick={back} >
                            Back
                        </Button>
                        {' '}
                        <Button 
                            variant="light" 
                            onClick={next} >
                            Next
                        </Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default ActivitiesCard;