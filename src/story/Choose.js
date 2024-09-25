import { data } from "../data/DatasStory.js";

import Button from "./Button.js";

export default function Choose({ index }) {

    const stor = data.find(item => item.id === index);
    // console.log({ stor })

    console.log({ stor })
    return (

        <>
            <h1> Etape {index} </h1>
            <p>{stor.title}</p>

            <Button message={stor.choiceOne.text} target={stor.choiceOne.target} />
            <Button message={stor.choiceTwo.text} target={stor.choiceTwo.target}/>
            <Button message={stor.choiceThree.text} target={stor.choiceThree.target} />
        </>
    )

}