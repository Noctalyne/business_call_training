import '../../style/form.css'

export default function Formulaire({ onSubmit, onChange }) {

    return (
        <div className='container w-50'>
            <h1> Ajouter mes informations </h1>

            <div className="form_container">
                <form onSubmit={onSubmit} className="formulaire" >


                    {/* Moi */}
                    <div className="mb-3">
                        <label className="form-label"> Ajouter votre nom </label>
                        <input className="form-control form-control-sm" type="text" onChange={onChange} name="nom" placeholder="Ajouter votre nom" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ajouter votre prénom</label>
                        <input className="form-control form-control-sm" type="text" onChange={onChange} name="prenom" placeholder="Ajouter votre prénom" />
                    </div>



                    {/* La personne qu'on veux joindre */}
                    <div className="mb-3">
                        <label className="form-label">Connaissez vous la personne ? </label>
                        {/* <input type='radio' onChange={onChange} name="recipient" value="true" /> Oui
                        <input type='radio' onChange={onChange} name="recipient" value="false" /> Non */}


                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="knowRecipient" onChange={onChange} name="recipient" value="true" />
                            <label className="form-check-label" for="knowRecipient">Oui</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="recipientUnknow" onChange={onChange} name="recipient" value="false" />
                            <label className="form-check-label" for="recipientUnknow">Non</label>
                        </div>

                    </div>


                    <div className="mb-3">
                        <label className="form-label">Ajouter le nom de la personne que vous voulez joindre</label>
                        {/* <select onChange={onChange} name='genderInterlocuteur' className="form-select form-select-sm">
                            <option value="Autres">Civilité</option>
                            <option value="Mme">Mme</option>
                            <option value="Mr">Mr</option>
                        </select> */}


                        {/* <input type="text" className="form-control form-control-sm" onChange={onChange} name="nomInterlocuteur" placeholder="Ajouter le nom de la personne que vous voulez joindre" /> */}

                        <div className="input-group mb-3">
                            {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Civilité</button> */}
                            {/* <ul className="dropdown-menu">
                                <li className="dropdown-item">Mme</li>
                                <li className="dropdown-item">Mr</li>
                            </ul> */}
                            <select onChange={onChange} name='genderInterlocuteur' className="btn btn-outline-tertiary form-select form-select-sm">
                                <option value="Autres">Civilité</option>
                                <option value="Mme">Mme</option>
                                <option value="Mr">Mr</option>
                            </select>

                            <input type="text" className="form-control form-control-sm" onChange={onChange} name="nomInterlocuteur" placeholder="Nom Prénom" />
                        </div>


                    </div>



                    <div className="mb-3">
                        <label className="form-label">Ajouter votre cursus</label>
                        <input className="form-control form-control-sm" type="text" onChange={onChange} name="cursus" placeholder="Ajouter votre cursus" />
                    </div>


                    <div className="mb-3">
                        <label className="form-label">Ajouter votre type de contrat</label>
                        {/* <input type="text" onChange={onChange} name="contrat" placeholder="Ajouter votre type de contrat" /> */}
                        <select onChange={onChange} name='contrat' className="form-select form-select-sm">
                            <option value="Type" readonly >Sélectionner</option>
                            <option value="Stage">Stage</option>
                            <option value="Alternance">Alternance</option>
                            <option value="Emploi">Emploi</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Ajouter votre motif</label>
                        {/* <input  className="form-control form-control-sm" type="text" onChange={onChange} name="motif" placeholder="Ajouter votre motif" /> */}

                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onChange} name="motif" placeholder="Ajouter votre motif"></textarea>
                    </div>

                    <button classNameName='btn btn-secondary' type="submit"> Ajouter mes infos </button>


                </form>
            </div>
        </div>
    )
}