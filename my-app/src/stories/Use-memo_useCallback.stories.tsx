import React, {useCallback, useMemo} from "react"
import {useState} from "react"

export default {
    title: 'UseCallback-memo demo'
}



export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['js', 'html', 'react'])

    const memoizedAddBook = useMemo(() => {
        return ()=>{
            const newBooks=[...books,'Angular'+ new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
            const newBooks=[...books,'Angular'+ new Date().getTime()]
            setBooks(newBooks)
    }, [books])



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => memoizedAddBook2()}>add Book</button>

    </>
}

