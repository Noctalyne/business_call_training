import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <nav className="HeaderNavBar">

                <Link to="/" className="navLink">Accueil</Link>
                {/* <Link to="/start"className="navLink">Commencer</Link> */}
                <Link to="/etape0" className="navLink">etape0</Link>
                <Link to="/etape1" className="navLink">etape1</Link>
                <Link to="/etape2" className="navLink">etape2</Link>
                <Link to="/etape3" className="navLink">etape3</Link>
                <Link to="/etape4" className="navLink">etape4</Link>
                <Link to="/etape5" className="navLink">etape5</Link>
            </nav>

        </>
    )

}