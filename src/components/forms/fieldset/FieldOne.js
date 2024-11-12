import '../../../style/form.css'
import { dataFormF1 } from "../../../data/DataForm";

export default function FieldOne({ onChange }) {

    const dataFieldset1 = dataFormF1.map((data) =>
        <div key={data.id} className="form_group_row">
            <label className="form-label"> {data.label} </label>
            <input className="form-control form-control-sm" onChange={onChange} type={data.input.type} name={data.input.name} placeholder={data.input.placeholder} />
        </div>
    );

    return (
        <div className='form_group'>
            <fieldset className=''>
                <legend className="">Moi</legend>

                {dataFieldset1}

            </fieldset>
        </div>
    );
}