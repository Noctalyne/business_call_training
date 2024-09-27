import { Link } from "react-router-dom";
import Formulaire from "../../story/Formulaire";
import { useState } from "react";
import DeleteDataUser from "../DeleteDataUser";


export default function Base() {


    const user = JSON.parse(localStorage.getItem("user"));

    // Paramètre pour le formulaire
    const [input, setInput] = useState(null);

    const handleOnChange = e => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = f => {
        f.preventDefault();
        localStorage.setItem("user", JSON.stringify(user))
    }


    // console.log(localStorage);
    // console.log(user);

    if (user.nom === null || user.prenom === null || user.cursus === null || user.contrat === null || user.motif === null) {
        // console.log(user);
        return (<Formulaire onChange={handleOnChange} onSubmit={handleOnSubmit} />)
    }
    else {
        localStorage.setItem("user", JSON.stringify(user));
        return (
            <>
                <Link to="/etape0" className="" >Commencer</Link>
                <DeleteDataUser/>
            </>
        )
    }



}