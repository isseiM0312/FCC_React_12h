import React from "react";

export default function MemeChild() {

  

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/1g8my4.jpg",
    })

    const [allMemes,setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMeme() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
        return () => {

        } 
    } , [])

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
     }

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }

    return (
        <main>
            <div className="form">
                <input type='text' placeholder='Top text' className='form--input' name = 'topText' value={meme.topText} onChange={handleChange}></input>
                <input type='text' placeholder='Bottom text' className='form--input' name = 'bottomText' value={meme.bottomText} onChange={handleChange}></input>
                <button className="form--button" 
                 onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
            <img src= {meme.randomImage} className='meme--image'></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    );
}

//スプレット構文でもうあるキー、バリューを追加するとそこだけ更新される
//プラケット記法を使うと、オブジェクトのキーに変数の内容を使える（[]のやつ)
//イベントの発生源はタグにわたす関数の引数にeを定義して、e.targetでわかる！=>nameとかで変更点を判断したり！
//それこそピンポイントでオブジェクト更新するスプレット構文やプラケット記法と相性がいい