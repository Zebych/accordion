import React, {useCallback, useMemo} from "react"
import {useState} from "react"

export default {
    title: 'UseCallback-memo demo'
}

const generateData = () => {
    console.log('generateData')
    return 327854584
}

export const CounterImprovedUseState = () => {
    console.log('CounterImprovedUseState')

    /*  1   const initValue = useMemo(generateData, [])
        const [counter, setCounter] = useState(initValue)*/
    const [counter, setCounter] = useState(generateData)

    /*   2  const changer=(state:number)=>{
          return state+1
      }*/


    return <>
        {/*   1  <button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*    2  <button onClick={() => setCounter(changer)}>+</button>*/}
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

