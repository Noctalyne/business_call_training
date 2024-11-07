import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import DeleteDataUser from "../../data/DeleteDataUser";

export default function Header() {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                <div class="container-fluid">

                    <DeleteDataUser />

                    <Link to="/" className="navbar-brand navLink">Call Training</Link>

                    {/* Modifier le bouton */}
                    <button class="btn btn-secondary" type="button" > Mes infos</button>
                </div>

            </nav>
        </>

    )

}