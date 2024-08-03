import InputGenerator from '../InputGenerator';
import trash from '../../assets/trash.svg';
import eyeShow from '../../assets/eye-show.svg';
import eyeOff from '../../assets/eye-off.svg';

const Education = ({ educationInfo, editEducationItem, addEducationItem, setEditEducationItem, setAddEducationItem, saveEducationEdit, removeEducation, addEducation, toggleEducation }) => {
    if (!editEducationItem) {
        if (!addEducationItem) {
            // EDUCATION LIST
            return (
                <>
                    {
                        educationInfo.length !== 0 &&
                        <ul>
                            {
                                educationInfo.map((element) => (
                                    <li key={element.key} onClick={() => setEditEducationItem(element)}>
                                        {element.schoolName}
                                        <img src={element.hidden ? eyeOff : eyeShow} alt="" onClick={(e) => toggleEducation(e, element.key)} />
                                        <img src={trash} alt="" onClick={(e) => removeEducation(e, element.key)} />
                                    </li>
                                ))
                            }
                        </ul>
                    }
                    

                    <button type='click' onClick={() => setAddEducationItem(true)} className='add'>Add new</button>
                </>
            )
        }
        // ADD NEW EDUCATION
        return (
            <>
                <form id='add-education' onSubmit={addEducation}>
                    <InputGenerator labelText='School name' type='text' placeholder='Enter school / university' dataIndex='schoolName' onChange={(e) => setAddEducationItem({ ...addEducationItem, schoolName: e.target.value })} />
                    <InputGenerator labelText='Degree' type='text' placeholder='Enter degree / Field of study' dataIndex='degree' onChange={(e) => setAddEducationItem({ ...addEducationItem, degree: e.target.value })} />
                    <InputGenerator labelText='Location' type='text' placeholder='Enter location' dataIndex='location' onChange={(e) => setAddEducationItem({ ...addEducationItem, location: e.target.value })} />
                    <InputGenerator labelText='Start date' type='text' placeholder='Enter start date' dataIndex='startDate' onChange={(e) => setAddEducationItem({ ...addEducationItem, startDate: e.target.value })} />
                    <InputGenerator labelText='End date' type='text' placeholder='Enter end date' dataIndex='endDate' onChange={(e) => setAddEducationItem({ ...addEducationItem, endDate: e.target.value })} />
                </form>

                <div className="edu-btns">
                    <button type='click' onClick={() => setAddEducationItem(null)} className='cancel'>Cancel</button>
                    <button type='submit' className='save' form='add-education'>Save</button>
                </div>
            </>
        )        
    }
    // EDIT EXISTING EDUCATION
    return (
        <>
            <form id='edit-education' onSubmit={saveEducationEdit}>
                <InputGenerator labelText='School name' value={editEducationItem.schoolName} type='text' placeholder='Enter school / university' dataIndex='schoolName' onChange={(e) => setEditEducationItem({ ...editEducationItem, schoolName: e.target.value})} />
                <InputGenerator labelText='Degree' value={editEducationItem.degree} type='text' placeholder='Enter degree / Field of study' dataIndex='degree' onChange={(e) => setEditEducationItem({ ...editEducationItem, degree: e.target.value })} />
                <InputGenerator labelText='Location' value={editEducationItem.location} type='text' placeholder='Enter location' dataIndex='location' onChange={(e) => setEditEducationItem({ ...editEducationItem, location: e.target.value })} />
                <InputGenerator labelText='Start date' value={editEducationItem.startDate} type='text' placeholder='Enter start date' dataIndex='startDate' onChange={(e) => setEditEducationItem({ ...editEducationItem, startDate: e.target.value })} />
                <InputGenerator labelText='End date' value={editEducationItem.endDate} type='text' placeholder='Enter end date' dataIndex='endDate' onChange={(e) => setEditEducationItem({ ...editEducationItem, endDate: e.target.value })} />
            </form>
            <div className="edu-btns">
                <button type='click' onClick={() => removeEducation(editEducationItem.key)} className='remove'>Remove</button>
                <button type='click' onClick={() => setEditEducationItem(null)} className='cancel'>Cancel</button>
                <button type='submit' className='save' form='edit-education'>Save</button>
            </div>
        </>
    )
};

export default Education;