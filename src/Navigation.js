import { Link } from "react-router-dom";

export default function Navigation () {

    return (
        <>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/etape1">etape1</Link>
            <Link to="/etape2">etape2</Link>
        </nav>

        </>
    )

}