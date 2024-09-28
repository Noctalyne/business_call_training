
import { data } from "../../data/Datas.js";
import Button from "./Button.js";

export default function Choose({ index }) {

    const stor = data.find(item => item.id === index);

    return (

        <div className="question" id={stor.id}> {/* */}
            <h6> Etape {index} </h6>
            
             <p className="mineText">{stor.title}</p> 

            <p> Réponse du correspondant : </p>

            <div className="choiceOption">
                <Button message={stor.choiceOne.text} target={stor.choiceOne.target} />
                <Button message={stor.choiceTwo.text} target={stor.choiceTwo.target}/>
                <Button message={stor.choiceThree.text} target={stor.choiceThree.target} />                
            </div>

        </div>
    )

}