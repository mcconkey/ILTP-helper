import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const PreviousScoresCard = ({isVisible = false, setVisibility}) => {
    const [isOpen, setIsOpen] = useState(isVisible);
    console.log("show PreviousScoresCared: " + isVisible);

    useEffect(() => {
        setIsOpen(isVisible);
    }, [isVisible]);

    return (
        <React.Fragment>
            <Fade left opposite collapse when={isOpen} duration={500} delay={1500} delayOut={0}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                        Previous Scores...
                        </Card.Text>
                        <Button variant="light" onClick={() => setVisibility({chooseLanguage: true, previousScores: false})}
                        >Back</Button>
                    </Card.Body>
                </Card>
            </Fade>
        </React.Fragment>
    );

}

export default PreviousScoresCard;