import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState } from 'recoil';

import visibilityState from '../visibilityState';

const ChooseLanguageCard = ({back, next}) => {

    const [isVisible, setVisibilityState] = useRecoilState(visibilityState);
    let visible = isVisible.chooseLanguage ? true : false;

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