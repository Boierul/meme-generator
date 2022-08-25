import './Meme.css'

export default function Meme(){
    return(
        <main>
            <form className={"form"}>
                <input placeholder={"Top Text"} className={"form-input"} type={"text"}/>
                <input placeholder={"Bottom Text"} className={"form-input"} type={"text"}/>
                <button className={"form-button"}>Fetch a new meme image 🖼️</button>
            </form>
        </main>
    )
}