import './Meme.css'
import React from 'react';
import memesData from "../LocalData/memesData";


export default function Meme() {
    /* Init the first meme once the page is loaded */
    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "and take my money",
        defaultImage: "https://i.imgflip.com/3si4.jpg",
    })

    /*  Create a state to maintain all the meme images */
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

    /*  Custom handler for additional logic */
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main>
            <div className={"form"}>
                <input
                    placeholder={"Top Text"}
                    className={"form-input"}
                    type={"text"}
                    name={"topText"}
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    placeholder={"Bottom Text"}
                    className={"form-input"}
                    type={"text"}
                    name={"bottomText"}
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage}
                        className={"form-button"}>
                    Fetch a new meme image 🖼️
                </button>
            </div>
            <div className={"form-meme"}>
                <img className={"meme-image"} src={meme.defaultImage} alt={meme.name}/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}