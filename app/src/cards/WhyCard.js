import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState, useRecoilValue } from 'recoil';


import visibilityState from '../atoms/visibilityState';
import progressState from '../atoms/progressState';
import surveyState from '../atoms/surveyState';
const WhyCard = ({next, back}) => {

    const visible = useRecoilValue(visibilityState).why ? true : false;
    const [progress, setProgress] = useRecoilState(progressState);
    const [survey, setSurvey] = useRecoilState(surveyState);
    
    const onChangeWhyHandler = (event) => {

        if(!survey.why){

            setProgress(progress + 10);
        }
        
        setSurvey({...survey, ...{why: event.target.value}});
    };

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
                        Why is achieving this goal important to you?
                        <Form.Control 
                                placeholder="Choose a language..." 
                                as="textarea"
                                size="lg" 
                                rows={3}
                                style={{margin: '1vh', padding: '.5rem'}}
                                onChange={onChangeWhyHandler} />
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

export default WhyCard;