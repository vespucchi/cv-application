import InputGenerator from "../InputGenerator";

function PersonalDetails( { fullName, email, phoneNumber, address, onChange } ) {
    return (
        <form className='personal-info'>
            <h1>Personal Details</h1>

            <InputGenerator labelText='Full name' value={fullName} type='text' dataIndex='fullName' onChange={onChange} />
            <InputGenerator labelText='Email' value={email} type='email' dataIndex='email' onChange={onChange} />
            <InputGenerator labelText='Phone number' value={phoneNumber} type='text' dataIndex='phoneNumber' onChange={onChange} />
            <InputGenerator labelText='Address' value={address} type='text' dataIndex='address' onChange={onChange} />
        </form>
    )
}

export default PersonalDetails;
