import { Link } from "react-router-dom";

export default function Button({ message, target }) {

    if (message !== null) {
        return (
            <>
                {/* <button onClick={handleOnClic()}> */}
                <div className="button" >
                    {/* Test */}
                    <Link to={target}>{message}</Link>

                </div>
            </>
        )
    }
}