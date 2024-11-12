import '../../../style/form.css'
// import { dataFormF3 } from "../../../data/DataForm";


export default function FieldThree({onChange, isStudent ,isJobSearch }) {


    // const dataFieldset3 = dataFormF3.map((data) =>
    
    // );

    return (

        <div className="">

        <fieldset>
            <legend> Ma recherche </legend>

            <div>
                <label className="form-label">Ajouter votre type de contrat</label>
                {/* <input type="text" onChange={onChange} name="contrat" placeholder="Ajouter votre type de contrat" /> */}
                <select onChange={onChange} name='contrat' className="form-select form-select-sm">
                    <option value="Type" readOnly >Sélectionner</option>
                    <option value="Stage">Stage</option>
                    <option value="Alternance">Alternance</option>
                    <option value="Emploi">Emploi</option>
                </select>
            </div>

            {isStudent === 'true' && (

                <div className="">
                    <label className="form-label">Ajouter votre cursus</label>
                    <input className="form-control form-control-sm" type="text" onChange={onChange} name="cursus" placeholder="Ajouter votre cursus" />
                </div>

            )}

            {isJobSearch === 'true' && (

                <div className="">
                    <label className="form-label">Quel Job </label>
                    <input className="form-control form-control-sm" type="text" onChange={onChange} name="cursus" placeholder="Ajouter votre cursus" />
                </div>

            )}


            <div className="">
                <label className="form-label">Ajouter votre motif</label>
                {/* <input  className="form-control form-control-sm" type="text" onChange={onChange} name="motif" placeholder="Ajouter votre motif" /> */}

                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={onChange} name="motif" placeholder="Ajouter votre motif"></textarea>
            </div>

        </fieldset>

    </div>

    )
}