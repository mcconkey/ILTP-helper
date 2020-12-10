import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const ChooseLanguageCard = ({isVisible = false, showPrevious}) => {
    const [isOpen, setIsOpen] = useState(isVisible);
    console.log(isVisible);

    useEffect(() => {
        setIsOpen(isVisible);
    }, [isVisible]);

    return (
        <React.Fragment>
            <Fade left opposite collapse when={isOpen} delay={1000} duration={500}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                        This is card number 1
                        </Card.Text>
                        <Button variant="light" onClick={() => showPrevious({intro: true})}
                        >Back</Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default ChooseLanguageCard;