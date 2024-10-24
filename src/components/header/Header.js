import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import DeleteDataUser from "../../data/DeleteDataUser";

export default function Header() {

    return (
        // Modifier le nom de classe + le CSS
        <>
            <div className="header_content">
                <div>
                    <DeleteDataUser />
                </div>

                <div className="business_logo">
                    <h1>
                        <Link to="/" className="navLink">Call Training</Link>
                    </h1>
                </div>

                <div className="navbar">
                    <NavBar />
                </div>
            </div>
        </>

    )

}