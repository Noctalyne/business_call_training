import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header() {

    return (
        // Modifier le nom de classe + le CSS
        <div className="top">

            <h1>
                <Link to="/" className="navLink">Call Training</Link>
            </h1>

            <NavBar />

        </div>
    )

}