import React, {FC, ReactElement, useState, useEffect} from 'react';
import StepProgressBar from 'react-step-progress';
import {Heading, Text} from 'rimble-ui';
import 'react-step-progress/dist/index.css';import {useStyles} from './styles';

  interface ProgressBarProps {
      data: any;
  }
  
  const ProgressBar: FC<ProgressBarProps> = ({data}): ReactElement => {
    const classes = useStyles()
    const [loading, setLoading] = useState<boolean>(true)
    const [start, setStart] = useState<number>(0)
    const step1Content = <Text as='p' color='white'>We are currently perfecting your design</Text>;
    const step2Content = <Text as='p' color='white'>We are cooking up your design mockup, prepare to be inspired!</Text>;
    const step3Content = <Text as='p' color='white'>Our developers are burning up the keyboards building your project!</Text>;
    const step4Content = <Text as='p' color='white'>Now the fun part, lets squash some bugs!</Text>;
    const step5Content = <Text as='p' color='white'>Like a shiny new car, your app is all yours!</Text>

    const getLatestComplete =()=>{
      let i = 0;
      for(let [key, value] of data.entries()){
        if(value.complete === false){
          setStart(i)
          setLoading(false)
          break;
        }
        i++
      }
    }

    useEffect(() => {
      getLatestComplete()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <>
      <Heading as='h1' color='white' textAlign='center'>Project Progress</Heading>
      {!loading ?
      <StepProgressBar
        wrapperClass={classes.wrapper}
        contentClass={classes.subTitle}
        buttonWrapperClass={classes.hidden}
        startingStep={4}
        onSubmit={()=>console.log('')}
        steps={[
          {
            label: 'Design',
            name: 'Design',
            content: step1Content
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
          }
        ]}/> :
        <h1>Loading...</h1>
      }
        </>
      )
  }
  
  export default ProgressBar
  