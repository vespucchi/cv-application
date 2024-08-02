import InputGenerator from "../InputGenerator";
import data from '../../assets/savedData';

function PersonalDetails({ fullName, email, phoneNumber, address, onChange, onFocusOut } ) {
    return (
        <>
            <h1>Personal Details</h1>
            <form className='personal-info'>
                <InputGenerator labelText='Full name' value={fullName} type='text' placeholder='Josephine Meyers' dataIndex='fullName' onChange={onChange} onFocusOut={onFocusOut} />
                <InputGenerator labelText='Email' value={email} type='email' placeholder='josephine.meyers@gmail.com' dataIndex='email' onChange={onChange} onFocusOut={onFocusOut} />
                <InputGenerator labelText='Phone number' value={phoneNumber} type='text' placeholder='+44 123 456 789' dataIndex='phoneNumber' onChange={onChange} onFocusOut={onFocusOut} />
                <InputGenerator labelText='Address' value={address} type='text' placeholder='London, UK' dataIndex='address' onChange={onChange} onFocusOut={onFocusOut} />
            </form>
        </>
    )
}

export default PersonalDetails;
