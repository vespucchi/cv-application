import { useState } from 'react';
import './App.css';
import PersonalDetails from './components/personalDetails/PersonalDetails';
import Education from './components/educationDetails/EducationDetails';
import Experience from './components/experienceDetails/ExperienceDetails';
import data from './assets/savedData';
import PersonalDetailsResume from './components/personalDetails/PersonalDetailsResume';
import expandIcon from './assets/expand.svg'

function App() {
    const savedData = data();

    const [personalInfo, setPersonalinfo] = useState(savedData.personalInfo());

    const [educationInfo, setEducationInfo] = useState(savedData.educationList());
    const [editEducationItem, setEditEducationItem] = useState(null);
    const [addEducationItem, setAddEducationItem] = useState(null);

    const [experienceInfo, setExperienceInfo] = useState(savedData.experienceList());
    const [editExperienceItem, setEditExperienceItem] = useState(null);
    const [addExperienceItem, setAddExperienceItem] = useState(null);

    const savePersonalData = () => {
        savedData.savePersonalInfo(personalInfo);
    }

    const saveEducationEdit = (e) => {
        e.preventDefault();
        console.log(editEducationItem);
        savedData.editEducation(editEducationItem);
        setEditEducationItem(false);
        setEducationInfo(savedData.educationList());
    }

    const removeEducation = (e) => {
        e.preventDefault();
        savedData.removeEducation(editEducationItem.key);
        setEditEducationItem(null);
        setEducationInfo(savedData.educationList());
    }

    const addEducation = (e) => {
        e.preventDefault();
        savedData.addEducation(addEducationItem);
        setAddEducationItem(null);
        setEducationInfo(savedData.educationList());
    }

    const saveExperienceEdit = (e) => {
        e.preventDefault();
        console.log(editExperienceItem);
        savedData.editExperience(editExperienceItem);
        setEditExperienceItem(false);
        setExperienceInfo(savedData.experienceList());
    }

    const removeExperience = (e) => {
        e.preventDefault();
        savedData.removeExperience(editExperienceItem.key);
        setEditExperienceItem(null);
        setExperienceInfo(savedData.experienceList());
    }

    const addExperience = (e) => {
        e.preventDefault();
        savedData.addExperience(addExperienceItem);
        setAddExperienceItem(null);
        setExperienceInfo(savedData.experienceList());
    }

    return (
        <main>
            <section className="info">
                <section className='clear-load card'>
                    <button id='clear'>Clear resume</button>
                    <button id='load'>Load template</button>
                </section>

                <section className='personal-details card'>
                    <PersonalDetails 
                        fullName={personalInfo.fullName}
                        email={personalInfo.email}
                        phoneNumber={personalInfo.phoneNumber}
                        address={personalInfo.address}
                        onChange={(e) => setPersonalinfo({ ...personalInfo, [e.target.dataset.index]: e.target.value })}
                        onFocusOut={savePersonalData}
                    />
                </section>

                <section className="education card">
                    <div className="card-header">
                        <h1>Education</h1>
                        <img src={expandIcon} />
                    </div>

                    <Education 
                        educationInfo={educationInfo}
                        editEducationItem={editEducationItem}
                        addEducationItem={addEducationItem}
                        setEducationInfo={setEducationInfo}
                        setEditEducationItem={setEditEducationItem}
                        setAddEducationItem={setAddEducationItem}
                        saveEducationEdit={saveEducationEdit}
                        removeEducation={removeEducation}
                        addEducation={addEducation} 
                    />
                </section>

                <section className="experience card">
                    <div className="card-header">
                        <h1>Experience</h1>
                        <img src={expandIcon} />
                    </div>

                    <Experience
                        experienceInfo={experienceInfo}
                        editExperienceItem={editExperienceItem}
                        addExperienceItem={addExperienceItem}
                        setExperienceInfo={setExperienceInfo}
                        setEditExperienceItem={setEditExperienceItem}
                        setAddExperienceItem={setAddExperienceItem}
                        saveExperienceEdit={saveExperienceEdit}
                        removeExperience={removeExperience}
                        addExperience={addExperience}
                    />
                </section>
            </section>

            <section className="resume">
                <div className="left-side">
                    <PersonalDetailsResume
                        fullName={personalInfo.fullName}
                        email={personalInfo.email}
                        phoneNumber={personalInfo.phoneNumber}
                        address={personalInfo.address}
                    />
                </div>
                <div className="right-side">
                    <div className='education-list'>
                        <h2>Education</h2>

                        {educationInfo.map((el) => {
                            if (editEducationItem && editEducationItem.key === el.key) {
                                return (
                                    <div key={editEducationItem.key} className='education-item'>
                                        <div className='time-location'>
                                            <p>{editEducationItem.startDate} - {editEducationItem.endDate}</p>
                                            <p>{editEducationItem.location}</p>
                                        </div>
                                        <div className='school-info'>
                                            <p><strong>{editEducationItem.schoolName}</strong></p>
                                            <p>{editEducationItem.degree}</p>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div key={el.key} className='education-item'>
                                    <div className='time-location'>
                                        <p>{el.startDate} - {el.endDate}</p>
                                        <p>{el.location}</p>
                                    </div>
                                    <div className='school-info'>
                                        <p><strong>{el.schoolName}</strong></p>
                                        <p>{el.degree}</p>
                                    </div>
                                </div>
                            )
                        })}

                        {addEducationItem 
                            ? <div className='education-item'>
                                <div className='time-location'>
                                    <p>{addEducationItem.startDate} - {addEducationItem.endDate}</p>
                                    <p>{addEducationItem.location}</p>
                                </div>
                                <div className='school-info'>
                                    <p><strong>{addEducationItem.schoolName}</strong></p>
                                    <p>{addEducationItem.degree}</p>
                                </div>
                            </div>
                            : null
                        }
                    </div>

                    <div className='experience-list'>
                        <h2>Experience</h2>

                        {experienceInfo.map((el) => {
                            if (editExperienceItem && editExperienceItem.key === el.key) {
                                return (
                                    <div key={editExperienceItem.key} className='experience-item'>
                                        <div className='time-location'>
                                            <p>{editExperienceItem.startDate} - {editExperienceItem.endDate}</p>
                                            <p>{editExperienceItem.location}</p>
                                        </div>
                                        <div className='company-info'>
                                            <p><strong>{editExperienceItem.companyName}</strong></p>
                                            <p>{editExperienceItem.positionTitle}</p>
                                            <p>{editExperienceItem.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <div key={el.key} className='experience-item'>
                                    <div className='time-location'>
                                        <p>{el.startDate} - {el.endDate}</p>
                                        <p>{el.location}</p>
                                    </div>
                                    <div className='company-info'>
                                        <p><strong>{el.companyName}</strong></p>
                                        <p>{el.positionTitle}</p>
                                        <p>{el.description}</p>
                                    </div>
                                </div>
                            )
                        })}

                        {addExperienceItem
                            ? <div className='experience-item'>
                                <div className='time-location'>
                                    <p>{addExperienceItem.startDate} - {addExperienceItem.endDate}</p>
                                    <p>{addExperienceItem.location}</p>
                                </div>
                                <div className='company-info'>
                                    <p><strong>{addExperienceItem.companyName}</strong></p>
                                    <p>{addExperienceItem.positionTitle}</p>
                                    <p>{addExperienceItem.description}</p>
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </section>

            <section className="customization">
                
            </section>
        </main>
    )
}

export default App
