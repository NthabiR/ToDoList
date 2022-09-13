import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({ modal, toggle, save }) => {
    const [startDate, setStartDate] = useState('');
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === "startDate"){
            setStartDate(value)
        }
        if(name === "activity"){
            setActivity(value)
        }
        if(name === "description"){
            setDescription(value)
        }
    }

const handleSave = () => {
    let taskObj = {}
    taskObj["StartDate"] = startDate
    taskObj["Activity"] = activity
    taskObj["Description"] = description
    save(taskObj)
}

    return (
        <div>
            <Modal isOpen={modal} toggle={function noRefCheck() { }}>
                <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Start Date</label>
                            <input type="text" name='startDate' className = "form-control" placeholder='Enter start date' value={startDate} onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label>Activity</label>
                            <input type="text" name='activity' className = "form-control" placeholder='Enter Activity name' value={activity} onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" name='description' className = "form-control" placeholder='Activity description' value={description} onChange={handleChange}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Add</Button>{' '}
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CreateTask;