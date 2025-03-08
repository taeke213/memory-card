import { useEffect, useState } from "react"
import { mergeSort } from "./sort"
export function CreateCards(){
    const [highscore, setHighscore] = useState(0)
    const [clickedcards, setClickedCards] = useState([])
    let cardsdata = [
        {name:"1",
        key: Math.random()      
    },
    {name:"2",
        key: Math.random()      
    },
    {name:"3",
        key: Math.random()      
    },
    {name:"4",
        key: Math.random()      
    },
    {name:"5",
        key: Math.random()      
    },
    {name:"6",
        key: Math.random()      
    }]
    const [score,setScore] = useState(0)
    let sorteddata = mergeSort(cardsdata)
    useEffect(() => {
        if(score > highscore){
            setHighscore(score)
        }
    },[score])
    return (
        <>
        <h1>highscore: {highscore}</h1>
        <h1>score: {score}</h1>
        {sorteddata.map((card) => (
            <div key={card.key} onClick={() => {
                
            let m = true   
            for(let i = 0;i < clickedcards.length; i++){
                console.log(i)
                if(clickedcards[i] == card.name || clickedcards.length == 0){
                    setScore(0)
                    setClickedCards([])
                    m = false
                }
            }
            if(m){
                setScore(score + 1)
                let x = clickedcards
                x.push(card.name)
                console.log(x)
                setClickedCards(x)
            }
            }}>{card.name}</div>
        
    ))}
    </>
)
}


