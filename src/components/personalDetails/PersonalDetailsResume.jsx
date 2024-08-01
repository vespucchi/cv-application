function PersonalDetailsResume({ fullName, email, phoneNumber, address }) {
    return(
        <section className="personal-details">
            <h1>{fullName}</h1>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p>{address}</p>
        </section>
    )
}

export default PersonalDetailsResume;