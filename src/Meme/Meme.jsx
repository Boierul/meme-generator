import './Meme.css'
import React from 'react';
import memesData from "../LocalData/memesData";


export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/3si4.jpg")
    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "and take my money",
        defaultImage: "https://i.imgflip.com/3si4.jpg",
    })

    // Create a state to maintain all memes images
    const [allMemes, setAllMemes] = React.useState(memesData);

    function getMemeImage() {
        const memesArr = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArr.length)
        const memesUrl = memesArr[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            defaultImage: memesUrl
        }))
    }

    return (
        <main>
            <div className={"form"}>
                <input placeholder={"Top Text"} className={"form-input"} type={"text"}/>
                <input placeholder={"Bottom Text"} className={"form-input"} type={"text"}/>
                <button onClick={getMemeImage} className={"form-button"}>Fetch a new meme image 🖼️</button>
            </div>
            <div className={"form-image"}>
                <img className={"meme-image"} src={meme.defaultImage}/>
            </div>
        </main>
    )
}