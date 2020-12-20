import React from 'react';
import { Card, Button, Form, Col } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import visibilityState from '../atoms/visibilityState';
import surveyState from '../atoms/surveyState';
import progressState from '../atoms/progressState';

const PreviousScoresCard = ({next, back}) => {

    const visible = useRecoilValue(visibilityState).previousScores ? true : false;
    const setProgress = useSetRecoilState(progressState);
    const [survey, setSurvey] = useRecoilState(surveyState);

    const changeReadingScoreHandler = (event) => {

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
                        What were your previous scores in {survey.targetLanguage ?? 'your target language'}?
                        <Form>
                            <Form.Row style={{marginLeft: '-10px'}}>
                                <Form.Group as={Col}>
                                        <Form.Label 
                                        htmlFor="readingScore"
                                        style={{fontSize: '1rem'}}
                                    >Reading</Form.Label>
                                    <Form.Control 
                                        placeholder="Reading" 
                                        size="lg"
                                        as="select"                                 
                                        id="readingScore"
                                        list="scores" 
                                        style={{margin: '.5vh', padding: '.5rem'}}
                                        onChange={changeReadingScoreHandler} >
                                        <option>0+</option>
                                        <option>1</option>
                                        <option>1+</option>
                                        <option>2</option>
                                        <option>2+</option>
                                        <option>3</option>
                                        <option>3+</option>
                                        <option>4</option>
                                        <option>4+</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                <Form.Label 
                                htmlFor="listeningScore"
                                style={{fontSize: '1rem'}}
                               >Listening</Form.Label>
                                <Form.Control 
                                    as="select"                                 
                                    size="lg" 
                                    id="listeningScore"
                                    list="scores" 
                                    style={{margin: '.5vh', padding: '.5rem'}}
                                    onChange={changeReadingScoreHandler} >
                                        <option>0+</option>
                                    <option>1</option>
                                    <option>1+</option>
                                    <option>2</option>
                                    <option>2+</option>
                                    <option>3</option>
                                    <option>3+</option>
                                    <option>4</option>
                                    <option>4+</option>
                                    <option>5</option>
                                </Form.Control>
                                </Form.Group>                      
                            </Form.Row>
                        </Form>                       
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

export default PreviousScoresCard;