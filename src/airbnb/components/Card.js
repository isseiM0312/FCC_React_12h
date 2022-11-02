import React from "react";


export default function Card(props) {
    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src= {`../../../images/${props.img}`} className="card--image"></img>
            <div className="card--stats">
                <img src = "../../../images/star.svg" className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) ・</span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}


//渡す方はコンポーネントのidとか各ところに自由に変数指定して渡していい
//受け取るときはコンポーネント定義してる関数の引数にはいる
//分割代入で省略的にも書ける！　例えばComponent({propsとして渡されたオブジェクトのkey})
//propsとかついてるけど所詮はオブジェクト渡してるだけ！なので分割代入とかも使える！
//falselyとかも覚えとくと便利　例えば""とか0とかを論理演算子にかけるとflaseとして処理される
//これ使ってデータあるときは表示する、それ以外はなしとかもできる！