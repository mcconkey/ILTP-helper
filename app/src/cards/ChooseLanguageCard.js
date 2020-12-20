import React, { useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState, useRecoilValue, useSetRecoilState, } from 'recoil';

import visibilityState from '../atoms/visibilityState';
import progressState from '../atoms/progressState';
import surveyState from '../atoms/surveyState';

const ChooseLanguageCard = ({back, next}) => {

    const visible = useRecoilValue(visibilityState).chooseLanguage ? true : false;
    const setProgress = useSetRecoilState(progressState);
    const [survey, setSurvey] = useRecoilState(surveyState);

    const onChangeLanguageHandler = (event) => {
        
        setSurvey({...survey, ...{targetLanguage: event.target.value }});
        setProgress(10);

    } 

    return (
        <React.Fragment>
            <Fade
                left
                opposite
                collapse
                when={visible}
                duration={500}
                delay={0}
            >
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Text>
                            What's your target language?
                            <br />
                            <Form.Control 
                                placeholder="Choose a language..." 
                                type="text" 
                                size="lg" 
                                list="languages" 
                                style={{margin: '1vh', padding: '.5rem'}}
                                onChange={onChangeLanguageHandler} />
                            <datalist id="languages">
                                <option>Russian</option>
                                <option>Spanish</option>
                                <option>Korean</option>
                                <option>Chinese</option>
                            </datalist>
                        </Card.Text>
                        <Button
                            variant="light"
                            onClick={back}>
                            Back
                        </Button>
                        {' '}
                        <Button
                            variant="light"
                            onClick={next}>
                            Next
                        </Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default ChooseLanguageCard;