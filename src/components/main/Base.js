import { Link } from "react-router-dom";
import Formulaire from "../main/Formulaire";
import { useState } from "react";
// import DeleteDataUser from "../../data/DeleteDataUser";

import { user } from "../../data/Datas"


export default function Base() {

    // Utilises données
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

    if (!userLocal.nom || !userLocal.prenom || !userLocal.cursus || !userLocal.contrat || !userLocal.motif) {
        // console.log(userLocal);
        return (<Formulaire onChange={handleOnChange} onSubmit={handleOnSubmit} />)
    }
    else {
        return (
            <>
            <div>
                <Link to="/etape0" className="" >Commencer</Link>
            </div>
                
            </>
        )
    }
}