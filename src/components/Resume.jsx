import '../styles/resume-style.css';
import PersonalDetailsResume from "./personalDetails/PersonalDetailsResume";

function Resume({ personalInfo }) {
    return(
        <>
            <PersonalDetailsResume
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.phoneNumber}
                address={personalInfo.address}
            />
        </>
    )
}

export default Resume;