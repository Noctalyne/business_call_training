export default function DeleteDataUser() {
    // const userData = JSON.parse(localStorage.getItem("user"));

    const handleOnDelete = e => {
        localStorage.removeItem("user");
    }

    return (
        <>
            <button onClick={handleOnDelete}>
                Supprimer les donées utilisateur
            </button>

        </>
    )

}