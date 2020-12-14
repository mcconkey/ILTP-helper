import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilValue } from 'recoil';

import visibilityState from '../visibilityState';

const WhoCard = ({next, back}) => {

    let visible = useRecoilValue(visibilityState).who ? true : false;
    
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

export default WhoCard;