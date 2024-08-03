import { getStorage, setStorage } from "./localStorage";
import uniqid from 'uniqid';
import exampleData from "./example-data";

let savedData;

if (getStorage('savedData') === null) {
    savedData = exampleData;
    setStorage('savedData', savedData);
} else {
    savedData = getStorage('savedData');
}

export default function data() {
    const personalInfo = () => savedData.personalDetails;
    const educationList = () => savedData.education;
    const experienceList = () => savedData.experience;

    const savePersonalInfo = (data) => {
        savedData.personalDetails = data;
        setStorage('savedData', savedData);
    };

    const findEducationIndex = (key) => {
        return savedData.education.findIndex((element) => element.key === key);
    };

    const editEducation = (data) => {
        const educationIndex = findEducationIndex(data.key);
        savedData.education[educationIndex] = data;
        setStorage('savedData', savedData);
    };

    const removeEducation = (key) => {
        const educationIndex = findEducationIndex(key);
        savedData.education.splice(educationIndex, 1);
        setStorage('savedData', savedData);
    };

    const hideEducation = (key) => {
        const educationIndex = findEducationIndex(key);
        savedData.education[educationIndex].hidden = !savedData.education[educationIndex].hidden;
        setStorage('savedData', savedData);
    };

    const addEducation = ({schoolName = '', degree = '', location = '', startDate = '', endDate = ''}) => {
        savedData.education.push({ schoolName, degree, location, startDate, endDate, hidden: false, key: uniqid()});
        setStorage('savedData', savedData);
    };

    const findExperienceIndex = (key) => {
        return savedData.experience.findIndex((element) => element.key === key);
    };

    const editExperience = (data) => {
        const experienceIndex = findExperienceIndex(data.key);
        savedData.experience[experienceIndex] = data;
        setStorage('savedData', savedData);
    };

    const removeExperience = (key) => {
        const experienceIndex = findExperienceIndex(key);
        savedData.experience.splice(experienceIndex, 1);
        setStorage('savedData', savedData);
    };

    const hideExperience = (key) => {
        const experienceIndex = findExperienceIndex(key);
        savedData.experience[experienceIndex].hidden = !savedData.experience[experienceIndex].hidden;
        setStorage('savedData', savedData);
    };

    const addExperience = ({ companyName = '', positionTitle = '', location = '', startDate = '', endDate = '', description = ''}) => {
        savedData.experience.push({ companyName, positionTitle, location, startDate, endDate, description, hidden: false, key: uniqid() });
        setStorage('savedData', savedData);
    };

    const clearData = () => {
        savedData = {
            personalDetails: {
                fullName: '',
                email: '',
                phoneNumber: '',
                address: ''
            },
            education: [],
            experience: []
        }

        setStorage('savedData', savedData);
    };

    const loadData = () => {
        savedData = exampleData;
        setStorage('savedData', savedData);
    };

    return { 
        personalInfo,
        educationList,
        experienceList,
        savePersonalInfo,
        editEducation,
        removeEducation,
        hideEducation,
        addEducation,
        editExperience,
        removeExperience,
        hideExperience,
        addExperience,
        clearData,
        loadData,
    };
}