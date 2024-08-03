import InputGenerator from "../InputGenerator";
import trash from '../../assets/trash.svg';
import eyeShow from '../../assets/eye-show.svg';
import eyeOff from '../../assets/eye-off.svg';


function Experience({ experienceInfo, editExperienceItem, addExperienceItem, setEditExperienceItem, setAddExperienceItem, saveExperienceEdit, removeExperience, addExperience, toggleExperience }) {
    if (!editExperienceItem) {
        if (!addExperienceItem) {
            // EXPERIENCE LIST
            return (
                <>
                    {
                        experienceInfo.length !== 0 &&
                        <ul>
                            {
                                experienceInfo.map((element) => (
                                    <li key={element.key} onClick={() => setEditExperienceItem(element)}>
                                        {element.companyName}
                                        <img src={element.hidden ? eyeOff : eyeShow} alt="" onClick={(e) => toggleExperience(e, element.key)} />
                                        <img src={trash} alt="" />
                                    </li>
                                ))
                            }
                        </ul>
                    }

                    <button type='click' onClick={() => setAddExperienceItem(true)} className='add'>Add new</button>
                </>
            )
        }
        // ADD NEW EXPERIENCE
        return (
            <>
                <form id='add-experience' onSubmit={addExperience}>
                    <InputGenerator labelText='Company name' type='text' placeholder='Enter company name' dataIndex='companyName' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, companyName: e.target.value })} />
                    <InputGenerator labelText='Position title' type='text' placeholder='Enter position title' dataIndex='positionTitle' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, positionTitle: e.target.value })} />
                    <InputGenerator labelText='Location' type='text' placeholder='Enter location' dataIndex='location' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, location: e.target.value })} />
                    <InputGenerator labelText='Start date' type='text' placeholder='Enter start date' dataIndex='startDate' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, startDate: e.target.value })} />
                    <InputGenerator labelText='End date' type='text' placeholder='Enter end date' dataIndex='endDate' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, endDate: e.target.value })} />
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' placeholder='Enter description' data-index='description' onChange={(e) => setAddExperienceItem({ ...addExperienceItem, description: e.target.value })} />
                </form>

                <div className="edu-btns">
                    <button type='click' onClick={() => setAddExperienceItem(null)} className='cancel'>Cancel</button>
                    <button type='submit' className='save' form='add-experience'>Save</button>
                </div>
            </>
        )
    }
    // EDIT EXISTING EXPERIENCE
    return (
        <>
            <form id='edit-experience' onSubmit={saveExperienceEdit}>
                <InputGenerator labelText='Company name' value={editExperienceItem.companyName} type='text' placeholder='Enter company name' dataIndex='companyName' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, companyName: e.target.value })} />
                <InputGenerator labelText='Position title' value={editExperienceItem.positionTitle} type='text' placeholder='Enter position title' dataIndex='positionTitle' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, positionTitle: e.target.value })} />
                <InputGenerator labelText='Location' value={editExperienceItem.location} type='text' placeholder='Enter location' dataIndex='location' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, location: e.target.value })} />
                <InputGenerator labelText='Start date' value={editExperienceItem.startDate} type='text' placeholder='Enter start date' dataIndex='startDate' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, startDate: e.target.value })} />
                <InputGenerator labelText='End date' value={editExperienceItem.endDate} type='text' placeholder='Enter end date' dataIndex='endDate' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, endDate: e.target.value })} />
                <label htmlFor="description">Description</label>
                <textarea id='description' value={editExperienceItem.description} placeholder='Enter description' data-index='description' onChange={(e) => setEditExperienceItem({ ...editExperienceItem, description: e.target.value })} />
            </form>
            <div className="edu-btns">
                <button type='click' onClick={removeExperience} className='remove'>Remove</button>
                <button type='click' onClick={() => setEditExperienceItem(null)} className='cancel'>Cancel</button>
                <button type='submit' className='save' form='edit-experience'>Save</button>
            </div>
        </>
    )
}

export default Experience;