import { Link } from "react-router-dom";
import Formulaire from "../main/Formulaire";
import { useState } from "react";
import DeleteDataUser from "../../data/DeleteDataUser";

import { user } from "../../data/Datas"


export default function Base() {

    // Utilides données
    const userLocal = user;


    // Paramètres pour le formulaire
    const [input, setInput] = useState(null);

    const handleOnChange = e => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = () => {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(input))
    }

    console.log(input);

//

    if (!userLocal.nom || !userLocal.prenom || !userLocal.genderInterlocuteur ||  !userLocal.nomInterlocuteur || !userLocal.cursus || !userLocal.contrat || !userLocal.motif) {
        return (<Formulaire onChange={handleOnChange} onSubmit={handleOnSubmit} />)
    }
    else {
        return (
            <>
                <Link to="/etape0" className="" >Commencer</Link>
                <DeleteDataUser />
            </>
        )
    }
}