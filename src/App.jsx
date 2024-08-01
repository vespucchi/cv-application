import { useState } from 'react';
import './App.css';
import exampleData from './assets/example-data';
import TemplateLoader from './components/TemplateLoader';
import PersonalDetails from './components/personalDetails/PersonalDetails';
import Resume from './components/Resume';

function App() {
    const [personalInfo, setPersonalinfo] = useState(exampleData.personalInfo);
    const [educationInfo, setEducationInfo] = useState(exampleData.education);
    const [experienceInfo, setExperienceInfo] = useState(exampleData.experience);

    const handlePersonalInfoChange = (e) => {
        const { index } = e.target.dataset;
        setPersonalinfo({...personalInfo, [index]: e.target.value});
    }
    
    return (
        <main>
            <section className="info">
                <section className='clear-load card'>
                </section>

                <section className='personal-details card'>
                    <PersonalDetails 
                        fullName={personalInfo.fullName}
                        email={personalInfo.email}
                        phoneNumber={personalInfo.phoneNumber}
                        address={personalInfo.address}
                        onChange={handlePersonalInfoChange} 
                    />
                </section>

                <section className="education card">
                </section>

                <section className="experience card">
                </section>
            </section>

            <section className="resume">
                <div className="left-side">
                    <Resume
                        personalInfo={personalInfo}
                    />
                </div>
            </section>

            <section className="customization">
                
            </section>
        </main>
    )
}

export default App
