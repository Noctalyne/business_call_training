import '../../style/conv.css'


import { data } from "../../data/Datas.js";
import Button from "./Button.js";

export default function Conversation({ index }) {

    const stor = data.find(item => item.id === index);

    return (

        <div className="container w-75 conversation" id={stor.id}> {/* */}
            {/* <h6> Etape {index} </h6> */}

            <fieldset className=''>
                <legend>Ce que je dois dire</legend>
                <p className="conv_mine_text">{stor.title}</p>
            </fieldset>


            <fieldset>
                <legend>Réponse du correspondant</legend>
                <div className="conv_choices">
                    <Button message={stor.choiceOne.text} target={stor.choiceOne.target} style={stor.choiceOne.style} />
                    <Button message={stor.choiceTwo.text} target={stor.choiceTwo.target} style={stor.choiceTwo.style} />
                    <Button message={stor.choiceThree.text} target={stor.choiceThree.target} style={stor.choiceThree.style} />
                </div>
            </fieldset>

        </div>
    )

}