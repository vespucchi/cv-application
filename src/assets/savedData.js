import { getStorage, setStorage } from "./localStorage";
import uniqid from 'uniqid';


let savedData;

if (getStorage('savedData') === null) {
    savedData = {
        personalDetails: {},
        education: [],
        experience: []
    }

    setStorage('savedData', savedData);
} else {
    savedData = getStorage('savedData');
}

export default function data() {
    const educationList = () => savedData.education;

    const findIndex = (key) => {
        return savedData.education.findIndex((element) => element.key === key);
    }

    const editEducation = (data) => {
        const educationIndex = findIndex(data.key);
        savedData.education[educationIndex] = data;
        setStorage('savedData', savedData);
    }

    const removeEducation = (key) => {
        const educationIndex = findIndex(key);
        savedData.education.splice(educationIndex, 1);
        setStorage('savedData', savedData);
    }

    const addEducation = ({schoolName = '', degree = '', location = '', startDate = '', endDate = ''}) => {
        savedData.education.push({ schoolName, degree, location, startDate, endDate, key: uniqid()});
        setStorage('savedData', savedData);
    }

    return { educationList, editEducation, removeEducation, addEducation };
}