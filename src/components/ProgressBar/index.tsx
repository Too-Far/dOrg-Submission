import React, {FC, ReactElement, useState, useEffect} from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';import {useStyles} from './styles';

  interface ProgressBarProps {
    data: object;
  }
  
  const ProgressBar: FC<ProgressBarProps> = ({data}): ReactElement => {
    const classes = useStyles()
    console.log(data)
    const [start, setStart] = useState<number>(0)
    const step1Content = <h1>Design</h1>;
    const step2Content = <h1>Mockup</h1>;
    const step3Content = <h1>Initial Buildout</h1>;
    const step4Content = <h1>Bug Testing</h1>;
    const step5Content = <h1>Turnover</h1>

    // function step2Validator(){
    //   return design.complete;
    // }
    // function step3Validator(){
    //   return mockup.complete;
    // }
    // function step4Validation(){
    //   return initialBuildout.complete;
    // }
    // function step5Validation(){
    //   return bugTesting.complete && turnover.complete;
    // }
    let i = 0
      const getLatestComplete =()=>{
        console.log('called function')
        for (let [key, value] of data){
          console.log(value.complete)
          console.log(value)
          if(value.complete === false){
            setStart(i)
          }
          i++
        }
      }
    useEffect(() => {
      getLatestComplete()
    }, [])


    return (
      <StepProgressBar
        startingStep={start}
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
        ]}/>
      )
  }
  
  export default ProgressBar
  