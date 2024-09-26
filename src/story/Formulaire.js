
export default function Formulaire({ onSubmit, onChange }) {

    return (
        <>
            <h1> ICI AJOUT DU FORMULAIRE</h1>

            <form onSubmit={onSubmit} className="formulaire" >
                <input type="text" onChange={onChange} name="nom" placeholder="Ajouter votre nom" />
                <input type="text" onChange={onChange} name="prenom" placeholder="Ajouter votre prénom" />

                <input type="text" onChange={onChange} name="nomInterlocuteur" placeholder="Ajouter le nom de la personne que vous voulez joindre" />

                <input type="text" onChange={onChange} name="cursus" placeholder="Ajouter votre cursus" />
                <input type="text" onChange={onChange} name="contrat" placeholder="Ajouter votre type de contrat" />
                <input type="text" onChange={onChange} name="motif" placeholder="Ajouter votre motif" />

                <button type="submit"> Ajouter mes infos </button>
            </form>

        </>
    )
}