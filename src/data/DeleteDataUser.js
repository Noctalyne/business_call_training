import {useNavigate } from "react-router-dom";

export default function DeleteDataUser() {

    let user = { nom: null, prenom: null, genderInterlocuteur: null, nomInterlocuteur: null, cursus: null, contrat: null, motif: null };

    const navigate = useNavigate();

    const handleOnDelete = e => {
        e.preventDefault();
        window.location.reload();
        localStorage.removeItem("user");
        // localStorage.clear();
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/")
    }


    return (
        <>
            <button  className="btn_classic neutral" type="submit" onClick={handleOnDelete} >
                {/* <Link to="/" >Réinitialiser les donées utilisateur</Link> */}
                Réinitialiser les donées utilisateur
            </button>
        </>
    )

}