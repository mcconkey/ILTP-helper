import React, { useState } from 'react';
import { Card, Button, Form, Row, Col, FormGroup } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from 'react-icons/ai';

import visibilityState from '../atoms/visibilityState';
import progressState from '../atoms/progressState';
import surveyState from '../atoms/surveyState';

const FrequencyCard = ({next, back}) => {

    const progressValue = 20;

    const visible = useRecoilValue(visibilityState).frequency ? true : false;
    const [progress, setProgress] = useRecoilState(progressState);
    const [survey, setSurvey] = useRecoilState(surveyState);
    const [activitiesFrequencies, setActivitiesFrequencies ] = useState({});
    const [progressAdded, setProgressAdded] = useState(0);


    let activities = Array.from(survey.activities ?? []);
    

    const calculateProgress = () => {

        // ratio of activities to 
        let ratio = (Object.keys(activitiesFrequencies).length ?? 0) /(survey.activities.size ?? 1);
        
        // get the amount of progress 
        let progressAmount = Math.floor(ratio * progressValue);

        // add the progress to the state atom, subtract the amount previously added (tracked in local state)
        setProgress(progress + progressAmount - progressAdded);

        // update local state to reflect the amount of progress give
        setProgressAdded(progressAmount);

    }

    const selectFrequency = (event, activity) => {
        
        console.log("fired selectFreq");
        console.log(event.target.value);
        let tempObj = {};
        tempObj[activity] = event.target.value;
        setActivitiesFrequencies({...activitiesFrequencies, ...tempObj});
        setSurvey({...survey, ...{activitiesFrequencies: {...activitiesFrequencies, ...tempObj}}});
        console.log(activitiesFrequencies);
        calculateProgress();
    }

    const ActivityFrequency = ({activity}) => {
        return (
            <React.Fragment>
            <FormGroup as={Row} style={{ width: '80wv', marginTop: '.5em'}} >
                <Col xs={1}>
                    {activitiesFrequencies[activity] && activitiesFrequencies[activity] !== '-' ?
                        <AiOutlineCheckCircle color='#0074d9' /> :
                        <AiOutlineMinusCircle color='#aa1111' />     
                    }
                </Col>
                <Col xs={5} style={{textAlign: 'left'}}>
                    <span style={{ fontSize: '1.2rem' }}>{activity}</span>
                </Col>                
                <Col>
                <Form.Control 
                    as="select"
                    onChange={(event) => selectFrequency(event, activity)}
                    value={activitiesFrequencies[activity] ?? "-"}
                    custom                    
                >
                    <option>-</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Rarely</option>
                    <option>One Time</option>
                </Form.Control>
                </Col>
            </FormGroup>
            </React.Fragment>
        );
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
                delayOut={0}>
                <Card style={{width: '40rem'}}>
                    <Card.Body>
                        <Card.Text>
                        How often are you going to do those activities? <br />
                        {activities &&
                            activities.map((item, index) => <ActivityFrequency key={"af_"+index} activity={item} />)
                        }
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

export default FrequencyCard;