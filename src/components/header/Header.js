import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
import DeleteDataUser from "../../data/DeleteDataUser";

export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <DeleteDataUser />

                    <Link to="/" className="navbar-brand navLink">Call Training</Link>

                    {/* Modifier le bouton */}
                    <button className="btn_classic" type="button" > Mes infos</button>
                </div>

            </nav>
        </>

    )

}