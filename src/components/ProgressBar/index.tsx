import React, { ReactElement, useState, useEffect } from 'react';
import StepProgressBar from 'react-step-progress';
import { Card, Typography } from '@material-ui/core';
import 'react-step-progress/dist/index.css';
import { useStyles } from './styles';

interface ProgressBarProps {
    data: any;
}

const ProgressBar = ({ data }: ProgressBarProps): ReactElement => {
    const classes = useStyles();
    const [loading, setLoading] = useState<boolean>(true);
    const [start, setStart] = useState<number>(0);
    const step1Content = <Typography className={classes.text}>We are currently perfecting your design</Typography>;
    const step2Content = (
        <Typography className={classes.text}>We are cooking up your design mockup, prepare to be inspired!</Typography>
    );
    const step3Content = (
        <Typography className={classes.text}>
            Our developers are burning up the keyboards building your project!
        </Typography>
    );
    const step4Content = <Typography className={classes.text}>Now the fun part, lets squash some bugs!</Typography>;
    const step5Content = <Typography className={classes.text}>Like a shiny new car, your app is all yours!</Typography>;

    const getLatestComplete = () => {
        let i = 0;
        for (let [key, value] of data.entries()) {
            if (value.complete === false) {
                setStart(i);
                setLoading(false);
                break;
            }
            i++;
        }
    };

    useEffect(() => {
        getLatestComplete();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Card className={classes.card}>
                <Typography variant="h4">Project Progress</Typography>
                {!loading ? (
                    <StepProgressBar
                        wrapperClass={classes.wrapper}
                        contentClass={classes.subTitle}
                        buttonWrapperClass={classes.hidden}
                        startingStep={start}
                        onSubmit={() => console.log('')}
                        steps={[
                            {
                                label: 'Design',
                                name: 'Design',
                                content: step1Content,
                            },
                            {
                                label: 'Mock Up',
                                name: 'Mock Up',
                                content: step2Content,
                            },
                            {
                                label: 'Initial Buildout',
                                name: 'Initial Buildout',
                                content: step3Content,
                            },
                            {
                                label: 'Bug Testing',
                                name: 'Bug Testing',
                                content: step4Content,
                            },
                            {
                                label: 'Turnover',
                                name: 'Turnover',
                                content: step5Content,
                            },
                        ]}
                    />
                ) : (
                    <h1>Loading...</h1>
                )}
            </Card>
        </>
    );
};

export default ProgressBar;
