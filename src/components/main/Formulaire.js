import '../../style/form.css'

export default function Formulaire({ onSubmit, onChange }) {

    return (
        <>
            <h1> Ajouter mes informations </h1>

            <div className="form_container">
                <form onSubmit={onSubmit} className="formulaire" >


                    {/* Moi */}
                    <div>
                        <label> Ajouter votre nom </label>
                        <input type="text" onChange={onChange} name="nom" placeholder="Ajouter votre nom" />
                    </div>
                    <div>
                        <label>Ajouter votre prénom</label>
                        <input type="text" onChange={onChange} name="prenom" placeholder="Ajouter votre prénom" />
                    </div>



                    {/* La personne qu'on veux joindre */}
                    <div>
                        <label>Ajouter le nom de la personne que vous voulez joindre</label>
                        <select onChange={onChange} name='genderInterlocuteur'>
                            <option value="Autres">Civilité</option>
                            <option value="Mme">Mme</option>
                            <option value="Mr">Mr</option>
                        </select>
                        <input type="text" onChange={onChange} name="nomInterlocuteur" placeholder="Ajouter le nom de la personne que vous voulez joindre" />
                    </div>



                    <div>
                        <label>Ajouter votre cursus</label>
                        <input type="text" onChange={onChange} name="cursus" placeholder="Ajouter votre cursus" />
                    </div>


                    <div>
                        <label>Ajouter votre type de contrat</label>
                        {/* <input type="text" onChange={onChange} name="contrat" placeholder="Ajouter votre type de contrat" /> */}
                        <select onChange={onChange} name='contrat'>
                            <option value="Type">Type</option>
                            <option value="Stage">Stage</option>
                            <option value="Alternance">Alternance</option>
                            <option value="Emploi">Emploi</option>
                        </select>
                    </div>

                    <div>
                        <label>Ajouter votre motif</label>
                        <input type="text" onChange={onChange} name="motif" placeholder="Ajouter votre motif" />
                    </div>

                    <button type="submit"> Ajouter mes infos </button>
                </form>
            </div>
        </>
    )
}