import { Link } from "react-router-dom";
// import Formulaire from "../forms/Formulaire";
import { user } from "../../data/Datas"


export default function Base() {

    // Utilises données
    const userLocal = user;

    if (!userLocal.nom || !userLocal.prenom || !userLocal.cursus || !userLocal.contrat || !userLocal.motif) {
        return (
            <div className="container w-75 btn_home">
                <button className="btn btn-secondary" type="button" >
                    <Link to="/form" className="" >Ajouter des informations</Link>
                </button>
            </div>
        )
    }
    else {
        return (
            <div className="container w-75 btn_home">
                <button className="btn" type="button" >
                    <Link to="/etape0" className="" >Commencer</Link>
                </button>
            </div>
        )
    }
}