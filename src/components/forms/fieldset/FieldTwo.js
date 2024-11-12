import '../../../style/form.css'
import { dataFormF2 } from "../../../data/DataForm";

export default function FieldTwo({ onChange, isChecked }) {

    const dataFieldset2 = dataFormF2.map((data) =>
        <div key={data.id}  className="form-check form-check-inline">
            <input className="form-check-input" type={data.input.type} onChange={onChange} name={data.input.name} value={data.input.value} />
            <label className="form-check-label">{data.label}</label>
        </div>
    );

    return (
        <div className="">
            <fieldset className='fom_group_checkbox'>

                <legend>La personne contacter</legend>

                <div className='form_group'>
                    <label className="form-label">Connaissez vous la personne ? </label>
                    {dataFieldset2}
                </div>

                {isChecked === 'true' && (

                    <div className="form_group_row">
                        <label className="form-label">Qui est ce ? </label>

                        <div className="input-group ">

                            <select onChange={onChange} name='genderInterlocuteur' className="btn btn-outline-tertiary form-select form-select-sm">
                                <option value="Autres">Civilité</option>
                                <option value="Mme">Mme</option>
                                <option value="Mr">Mr</option>
                            </select>

                            <input type="text" className="form-control form-control-sm" onChange={onChange} name="nomInterlocuteur" placeholder="Nom Prénom" />
                        </div>

                    </div>
                )}

            </fieldset>
        </div>
    )
}