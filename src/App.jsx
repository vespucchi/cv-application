import { useState } from 'react';
import './App.css';
import { setStorage, getStorage } from './assets/localStorage';
import LayoutCard from './components/customization/Layout';
import ThemeColorCard from './components/customization/Theme';
import PersonalDetails from './components/personalDetails/PersonalDetails';
import Education from './components/educationDetails/EducationDetails';
import Experience from './components/experienceDetails/ExperienceDetails';
import data from './assets/savedData';
import PersonalDetailsResume from './components/personalDetails/PersonalDetailsResume';
import expandIcon from './assets/expand.svg';
import education from './assets/education.svg';
import work from './assets/work.svg';
import content from './assets/content.svg';
import customization from './assets/customization.svg';


function App() {
    const savedData = data();

    const [personalInfo, setPersonalInfo] = useState(savedData.personalInfo());

    const [educationInfo, setEducationInfo] = useState(savedData.educationList());
    const [editEducationItem, setEditEducationItem] = useState(null);
    const [addEducationItem, setAddEducationItem] = useState(null);
    const [educationCardVisible, setEducationCardVisible] = useState(true);

    const [experienceInfo, setExperienceInfo] = useState(savedData.experienceList());
    const [editExperienceItem, setEditExperienceItem] = useState(null);
    const [addExperienceItem, setAddExperienceItem] = useState(null);
    const [experienceCardVisible, setExperienceCardVisible] = useState(false);

    const [currentTab, setCurrentTab] = useState('content');
    const [currentLayout, setCurrentLayout] = useState(() => getStorage('layout') !== null ? getStorage('layout') : 0);
    const [currentTheme, setCurrentTheme] = useState(() => getStorage('theme') !== null ? getStorage('theme') : '#00649E');

    document.documentElement.style.setProperty('--theme', currentTheme);
    document.documentElement.style.setProperty('--title-bg', `${currentTheme}52`);

    const savePersonalData = () => {
        savedData.savePersonalInfo(personalInfo);
    };

    const saveEducationEdit = (e) => {
        e.preventDefault();
        savedData.editEducation(editEducationItem);
        setEditEducationItem(false);
        setEducationInfo(savedData.educationList());
    };

    const removeEducation = (e, key) => {
        e.stopPropagation();
        savedData.removeEducation(key);
        setEditEducationItem(null);
        const newList = savedData.educationList();
        setEducationInfo(newList.map((el) => {
            return { ...el };
        }));
    };

    const toggleEducation = (key) => {
        savedData.hideEducation(key);
        const newList = savedData.educationList();
        setEducationInfo(newList.map((el) => {
            return {...el};
        }));
    };

    const addEducation = (e) => {
        e.preventDefault();
        savedData.addEducation(addEducationItem);
        setAddEducationItem(null);
        setEducationInfo(savedData.educationList());
    };

    const saveExperienceEdit = (e) => {
        e.preventDefault();
        console.log(editExperienceItem);
        savedData.editExperience(editExperienceItem);
        setEditExperienceItem(false);
        setExperienceInfo(savedData.experienceList());
    };

    const removeExperience = (key) => {
        savedData.removeExperience(key);
        setEditExperienceItem(null);
        setExperienceInfo(savedData.experienceList());
    };

    const toggleExperience = (key) => {
        savedData.hideExperience(key);
        const newList = savedData.experienceList();
        setExperienceInfo(newList.map((el) => {
            return { ...el };
        }));
    };

    const addExperience = (e) => {
        e.preventDefault();
        savedData.addExperience(addExperienceItem);
        setAddExperienceItem(null);
        setExperienceInfo(savedData.experienceList());
    };

    const clearResume = () => {
        savedData.clearData();
        setPersonalInfo(savedData.personalInfo());
        setEducationInfo(savedData.educationList());
        setExperienceInfo(savedData.experienceList());
    };

    const loadTemplate = () => {
        console.log('test')
        savedData.loadData();
        console.log(savedData.personalInfo())

        const personalInfo = savedData.personalInfo()
        setPersonalInfo({ ...personalInfo });

        const educationList = savedData.educationList()
        setEducationInfo(educationList.map((edu) => {
            return { ...edu }
        }));

        const experienceList = savedData.experienceList()
        setExperienceInfo(experienceList.map((exp) => {
            return { ...exp }
        }));
    };

    const changeLayoutDesign = (index) => {
        setStorage('layout', index);
        setCurrentLayout(index);
    };

    const changeThemeColor = (color) => {
        document.documentElement.style.setProperty('--theme', color);
        document.documentElement.style.setProperty('--title-bg', `${color}52`);
        setStorage('theme', color);
        setCurrentTheme(color);
    };

    const resetThemeColor = () => {
        document.documentElement.style.setProperty('--theme', '#00649E');
        document.documentElement.style.setProperty('--title-bg', '#00649E52');
        setStorage('theme', '#00649E');
        setCurrentTheme('#00649E');
    }

    return (
        <main>
            <section className="info">
                <section className="customization card">
                    <button id='content' className={currentTab === 'content' ? 'active' : null} onClick={() => setCurrentTab('content')} disabled={currentTab === 'content' ? true : null} >
                        <img src={content} alt="" />
                        <p>Content</p>
                    </button>
                    <button id='customization' className={currentTab === 'customization' ? 'active' : null} onClick={() => setCurrentTab('customization')} disabled={currentTab === 'customization' ? true : null}>
                        <img src={customization} alt="" />
                        <p>Customize</p>
                    </button>
                </section>
                <section className='clear-load card'>
                    <button id='clear' onClick={clearResume} >Clear resume</button>
                    <button id='load' onClick={loadTemplate} >Load template</button>
                </section>

                {
                    currentTab === 'content'
                        ?   <>
                                <section className='personal-details card'>
                                        <PersonalDetails
                                            fullName={personalInfo.fullName}
                                            email={personalInfo.email}
                                            phoneNumber={personalInfo.phoneNumber}
                                            address={personalInfo.address}
                                            onChange={(e) => setPersonalInfo({ ...personalInfo, [e.target.dataset.index]: e.target.value })}
                                            onFocusOut={savePersonalData}
                                        />
                                </section>

                                <section className="education card">
                                    <div className="card-header" onClick={() => setEducationCardVisible(!educationCardVisible)} >
                                        <img src={education} alt="" />
                                        <h1>Education</h1>
                                        <img src={expandIcon} className={educationCardVisible ? 'expanded' : 'collapsed'} />
                                    </div>
                                    {educationCardVisible && <Education
                                        educationInfo={educationInfo}
                                        editEducationItem={editEducationItem}
                                        addEducationItem={addEducationItem}
                                        setEducationInfo={setEducationInfo}
                                        setEditEducationItem={setEditEducationItem}
                                        setAddEducationItem={setAddEducationItem}
                                        saveEducationEdit={saveEducationEdit}
                                        removeEducation={removeEducation}
                                        addEducation={addEducation}
                                        toggleEducation={toggleEducation}
                                    />}
                                </section>

                                <section className="experience card">
                                    <div className="card-header" onClick={() => setExperienceCardVisible(!experienceCardVisible)} >
                                        <img src={work} alt="" />
                                        <h1>Experience</h1>
                                        <img src={expandIcon} className={experienceCardVisible ? 'expanded' : 'collapsed'} />
                                    </div>

                                    {experienceCardVisible && <Experience
                                        experienceInfo={experienceInfo}
                                        editExperienceItem={editExperienceItem}
                                        addExperienceItem={addExperienceItem}
                                        setExperienceInfo={setExperienceInfo}
                                        setEditExperienceItem={setEditExperienceItem}
                                        setAddExperienceItem={setAddExperienceItem}
                                        saveExperienceEdit={saveExperienceEdit}
                                        removeExperience={removeExperience}
                                        addExperience={addExperience}
                                        toggleExperience={toggleExperience}
                                    />}
                                </section>
                            </>
                    :   <>
                            <section className='layout card'>
                                <h2>Layout</h2>
                                <LayoutCard 
                                    currentLayout={currentLayout}
                                    setCurrentLayout={changeLayoutDesign}
                                />
                            </section>
                                
                            <section className='color card'>
                                <h2>Theme color</h2>
                                <ThemeColorCard 
                                    currentTheme={currentTheme}
                                    setCurrentTheme={setCurrentTheme}
                                    saveCurrentTheme={changeThemeColor}
                                    resetThemeColor={resetThemeColor}
                                />
                            </section>
                        </>
                }
                
            </section>
            { 
                currentLayout === 0
                    ? <section className='resume layout-left'>
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
                                        // IF EDUCATION IS CURRENTLY BEING EDITED, RENDER THIS ONE INSTEAD
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
                                        // RENDER SAVED EDUCATION
                                        return el.hidden === false
                                            ? (
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
                                            : null
                                    })}

                                    { // RENDER NEW EDUCATION
                                        addEducationItem
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
                                        // IF EXPERIENCE IS CURRENTLY BEING EDITED, RENDER THIS ONE INSTEAD
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
                                        // RENDER SAVED EXPERIENCE
                                        return el.hidden === false
                                            ? (
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
                                            : null;
                                    })}

                                    { // RENDER NEW EXPERIENCE
                                        addExperienceItem
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
                    :   <section className="resume layout-right">
                            <div className="left-side">
                                <div className='education-list'>
                                    <h2>Education</h2>

                                    {educationInfo.map((el) => {
                                        // IF EDUCATION IS CURRENTLY BEING EDITED, RENDER THIS ONE INSTEAD
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
                                        // RENDER SAVED EDUCATION
                                        return el.hidden === false
                                            ? (
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
                                            : null
                                    })}

                                    { // RENDER NEW EDUCATION
                                        addEducationItem
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
                                        // IF EXPERIENCE IS CURRENTLY BEING EDITED, RENDER THIS ONE INSTEAD
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
                                        // RENDER SAVED EXPERIENCE
                                        return el.hidden === false
                                            ? (
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
                                            : null;
                                    })}

                                    { // RENDER NEW EXPERIENCE
                                        addExperienceItem
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
                            <div className="right-side">
                                <PersonalDetailsResume
                                    fullName={personalInfo.fullName}
                                    email={personalInfo.email}
                                    phoneNumber={personalInfo.phoneNumber}
                                    address={personalInfo.address}
                                />
                            </div>
                        </section>
            }
        </main>
    )
}

export default App
