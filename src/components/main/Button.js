import { Link } from "react-router-dom";

export default function Button({ message, target, style }) {

    if (message !== null) {
        return (
            <>
                {/* <button onClick={handleOnClic()}> */}
                <div className={`${style}`}  >
                    <Link to={target}>{message}</Link>
                </div>
            </>
        )
    }
}