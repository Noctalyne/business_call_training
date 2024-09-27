// import { useContext } from "react";
import { data } from "../../data/DatasStory.js";

// import { data } from "../../data/DatasStory.js";

import Button from "./Button.js";
// import { UserContext } from "../../context/UserContext.js";

// import { StoryContext } from "../../context/StoryContext.js";
// import { ContextDataProvider } from "../../context/Context.js";

export default function Choose({ index }) {

    // const user = useContext(UserContext)

    // const stor = useContext(StoryContext)

    // const context = useContext(storyData);

    // console.log(context);

    // stor.story

    const stor = data.find(item => item.id === index);
    // console.log({ stor });

    // const {n, setN} = [];

    // const test = () => { data(user); setN([...test, data])  } ;

    // const storryy = () => {stor.find(item => item.id === index)}

    // console.log(storryy);

    // let st = stor.map( (lis) => {
    //     if (lis.id === 0) {
    //         console.log(lis);

    //     }
    // })
        
    


    // console.log(st);
    // console.log({user})



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