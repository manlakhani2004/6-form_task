import './Form.css';
import { useState } from 'react';
function Form() {

    const [formdata, setFormdata] = useState(
        {
            FirstName: '',
            LastName: '',
            Email: '',
            Country: '',
            Address:'',
            City:'',
            State:'',
            Zip_code:'',
            Comments:false,
            Candidates:false,
            Offers:false,
            sms:'',
        }
    )

    function changesHandler(event) {
        let { name, value, checked, type } = event.target;

        setFormdata((previousdata) => {
            return {
                ...previousdata,
                [name]:(type === "checkbox")?checked: value,
            }
        })
    }
    // console.log(formdata);

    function submitHandler(event)
    {
        event.preventDefault();
        console.log(formdata);
    }


    return (
        <div className='form-container'>
            <form onSubmit={submitHandler}>
                <div className='input-field'>
                    <label htmlFor='firstname'>First Name</label>
                    <input type='text' id='firstname' placeholder='Enter Your FirstName'
                        onChange={changesHandler}
                        name='FirstName'
                        value={formdata.FirstName || ""}></input>
                </div>

                <div className='input-field'>
                    <label htmlFor='lastname'>Last Name</label>
                    <input type='text' id='lastname' placeholder='Enter Your LastName'
                        onChange={changesHandler}
                        name='LastName'
                        value={formdata.LastName || ""}></input>
                </div>


                <div className='input-field'>
                    <label htmlFor='email'>Email Addresss</label>
                    <input type='text' id='email' placeholder='Enter Your Email'
                        onChange={changesHandler}
                        name='Email'
                        value={formdata.Email}></input>
                </div>

                {/* dropdownlist */}
                <div className='dropdownlist input-field'>
                    <label id='country'>Country</label>
                    <select htmlFor="country"
                        onChange={changesHandler}
                        name='Country'
                        value={formdata.Country}>
                        <option className='select-placeholder' selected hidden>Select Your Country...</option>
                        <option>India</option>
                        <option>Caneda</option>
                        <option>Dubai</option>
                        <option>Austelia</option>
                    </select>
                </div>

                <div className='input-field'>
                    <label htmlFor='Streetaddress'>Street Addreess</label>
                    <input type='text' id='Streetaddress' placeholder='Enter Your Street Address'
                    onChange={changesHandler}
                    name='Address'
                    value={formdata.Address}></input>
                </div>

                <div className='input-field'>
                    <label htmlFor='city'>City</label>
                    <input type='text' id='city' placeholder='Enter Your City'
                    onChange={changesHandler}
                    name='City'
                    value={formdata.City}></input>
                </div>

                <div className='input-field'>
                    <label htmlFor='state'>State/ Provicne</label>
                    <input type='text' id='state' placeholder='Enter Your State'
                    onChange={changesHandler}
                    name='State'
                    value={formdata.State}></input>
                </div>

                <div className='input-field'>
                    <label htmlFor='zip-code'>Zip / Postal code </label>
                    <input type='text' id='zip-code' placeholder='Enter Your Zip-code'
                        onChange={changesHandler}
                        name='Zip_code'
                        value={formdata.Zip_code}></input>
                </div>

                {/* checkbox  */}
                <div className='checkbox-container'>
                    <h3 className='checkbox-heading'>By Email</h3>
                    <div className='checkbox'>
                        <div>
                            <input type='checkbox' id="comments"
                            onChange={changesHandler}
                            name='Comments'
                            checked = {formdata.Comments}
                            ></input>
                            <label className='checkboxlabel' htmlFor='comments'>Comments</label>
                        </div>
                        <h4>Get notified when someone posts a comments on a paging</h4>
                    </div>
                    <div>
                        <div>
                            <input type='checkbox' id="candidates"
                            onChange={changesHandler}
                            name='Candidates'
                            checked={formdata.Candidates}></input>
                            <label className='checkboxlabel' htmlFor='candidates'>Candidates</label>
                        </div>
                        <h4>Get notified when candidates applied for job</h4>
                    </div>
                    <div>
                        <div>
                            <input type='checkbox' id="offers"
                            onChange={changesHandler}
                            name='Offers'
                            checked={formdata.Offers}></input>
                            <label className='checkboxlabel' htmlFor='offers'>Offers</label>
                        </div>
                        <h4>Get notified when candidates accepts or reject an offer</h4>
                    </div>
                </div>

                {/* radio button  */}
                <div className='radio-container'>
                    <div className='radio-heading'>
                        <h3 className='radio-heading'>Push Notifications</h3>
                        <h4>These are deliverd via SMS to your mobile phone.</h4>
                    </div>
                    <div>
                        <div className='radio-field'>
                            <input type='radio' name='sms' id='everything' 
                            onChange={changesHandler}
                            value="everything"
                            //not required
                            // checked={"everything" === formdata.sms}
                            ></input>
                            <label htmlFor='everything'>Everything</label>
                        </div>
                        <div className='radio-field'>
                            <input type='radio' name='sms' id='same-as-email'
                            onChange={changesHandler}
                            value="same-as-email"
                            // checked={"same-as-email"===formdata.sms}
                            ></input>
                            <label htmlFor='same-as-email'>Same as Email</label>
                        </div>
                        <div className='radio-field'>
                            <input type='radio' name='sms' id='no-notification'
                            onChange={changesHandler}
                            value="no-notification"
                            // checked={"no-notification"===formdata.sms}
                            ></input>
                            <label htmlFor='no-notification'>No push Notifications</label>
                        </div>
                    </div>
                </div>
                <div className='submitbtn'>
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Form;