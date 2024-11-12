import '../../style/form.css'
import { useState } from "react";

import FieldOne from './fieldset/FieldOne';
import FieldTwo from './fieldset/FieldTwo';
import FieldThree from './fieldset/FieldThree';
import { useNavigate } from 'react-router-dom';

export default function Formulaire({ onSubmit }) {

    const navigate = useNavigate();

    const [input, setInput] = useState();

    // État pour suivre si les checkbox son cochée
    const [isChecked, setIsChecked] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [isJobSearch, setIsJobSearch] = useState(false);

    const handleOnChange = e => {
        e.preventDefault();

        const { name, value } = e.target;
        setInput({ ...input, [name]: value });

        // Pour afficher le formulaire
        if (name === 'recipient') {

            if (value === 'false') {
                setIsChecked('false');
            }
            else if (value === 'true') {
                setIsChecked('true');
            }
        }

        if (name === 'contrat') {

            if (value === 'Stage' || value === 'Alternance') {
                setIsStudent('true');
                setIsJobSearch('false');
            }
            else if (value === 'Emploi') {
                setIsStudent('false');
                setIsJobSearch('true');
            }
            else {
                setIsStudent('false');
                setIsJobSearch('false');
            }
        }

        console.log(value)

    }

    const handleOnSubmit = () => {
        console.log(input)
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(input));

        navigate("/") // Renvoie vers la page d'accueil
        window.location.reload(); // Recharge la page pour afficher le bon composant
    }

    return (
        <>
            <div className='container w-75'>

                <div className='form_title'>
                    <h1> Ajouter mes informations </h1>
                </div>

                <div className="form_container">
                    <form onSubmit={onSubmit} className="formulaire" >
                        {/* Moi */}
                        <FieldOne onChange={handleOnChange} />

                        {/* La personne qu'on veux joindre */}
                        <FieldTwo onChange={handleOnChange} isChecked={isChecked} />

                        {/* Motif */}
                        <FieldThree onChange={handleOnChange} isStudent={isStudent} isJobSearch={isJobSearch} />

                        <button onClick={handleOnSubmit} className='btn btn-secondary' type="submit"> Ajouter mes infos </button>

                    </form>
                </div>
            </div>
        </>
    )
}