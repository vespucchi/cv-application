import mail from '../../assets/mail.svg';
import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';


function PersonalDetailsResume({ fullName, email, phoneNumber, address }) {
    return(
        <section className="personal-details">
            <h1>{fullName}</h1>
            <div>
                <img src={email !== '' ? mail : null} alt="" />
                <p>{email}</p>
            </div>
            <div>
                <img src={phoneNumber !== '' ? phone : null} alt="" />
                <p>{phoneNumber}</p>
            </div>
            <div>
                <img src={address !== '' ? location : null} alt="" />
                <p>{address}</p>
            </div>
        </section>
    )
}

export default PersonalDetailsResume;