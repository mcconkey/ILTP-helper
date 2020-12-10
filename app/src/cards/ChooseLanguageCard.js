import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const ChooseLanguageCard = ({isVisible = false, setVisibility}) => {
    const [isOpen, setIsOpen] = useState(isVisible);
    console.log(isVisible);

    useEffect(() => {
        setIsOpen(isVisible);
    }, [isVisible]);

    return (
        <React.Fragment>
            <Fade left opposite collapse when={isOpen} duration={500} delay={1500} >
                <Card>
                    <Card.Body>
                        <Card.Text>
                        This is card number 1
                        </Card.Text>
                        <Button variant="light" onClick={() => setVisibility({intro: true, chooseLanguage: false})}
                        >Back</Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default ChooseLanguageCard;