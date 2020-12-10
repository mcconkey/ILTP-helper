import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { useRecoilState } from 'recoil';

import visibilityState from '../visibilityState';

const ChooseLanguageCard = () => {
    // const [isOpen, setIsOpen] = useState(isVisible);
    // console.log("show chooseLanguageCard: " + isVisible);

    const [isVisible, setVisibilityState] = useRecoilState(visibilityState);
    

    // useEffect(() => {
    //     setIsOpen(isVisible);
    // }, [isVisible]);

    return (
        <React.Fragment>
            <Fade left opposite collapse when={isVisible.chooseLanguage} duration={500} delay={1500} delayOut={0} >
                <Card>
                    <Card.Body>
                        <Card.Text>
                        What's your target language?
                        </Card.Text>
                        <Button variant="light" onClick={() => { 
                            setVisibilityState({...isVisible, ...{chooseLanguage: false, intro: true}});
                        }}
                        >Back</Button>{' '}
                        <Button variant="light" onClick={() => { return }}
                        >Next</Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default ChooseLanguageCard;