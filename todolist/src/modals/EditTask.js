import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({ modal, toggle, updateTask, taskObj, updateListArray}) => {
    const [startDate, setStartDate] = useState('');
    const [activity, setActivity] = useState('');
    const [description, setDescription] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target

        if(name === ""){
            setStartDate(value)
        }
        if(name === ""){
            setActivity(value)
        }
        if(name === ""){
            setDescription(value)
        }

    setInfo(prevState => ({
        ...prevState,
        [name]: value
    }))
    }

    const [info, setInfo] = useState({})
    const [list, setlist] = useState([])
    useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem("details")))


       /*  console.log(info) */
    }, [])
 
const handleUpdate = (e) => {
    
   e.preventDefault();
   //localStorage.removeItem('details')
    console.log(info)
    setlist(JSON.parse(localStorage.getItem('taskList')))
    localStorage.removeItem('taskList')
    list[info.Activity] = info
    localStorage.setItem('taskList', JSON.stringify(list))

    let tempObj = {}
    tempObj['StartDate'] = startDate
    tempObj['Activity'] = activity
    tempObj['Description'] = description
    updateTask(tempObj)
}

    return (
        <div>
            <Modal isOpen={modal} toggle={function noRefCheck() { }}>
                <ModalHeader toggle={toggle}>UpdateTask</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <label>Start Date</label>
                            <input type="text" name='StartDate' className = "form-control" placeholder={info.StartDate} value={info.StartDate} onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label>Activity</label>
                            <input type="text" name='Activity' className = "form-control" placeholder={info.Activity} value={info.Activity} onChange={handleChange}></input>
                        </div>
                        <div className='form-group'>
                            <label>Description</label>
                            <textarea rows="5" name='Description' className = "form-control" placeholder={info.Description} value={info.Description} onChange={handleChange}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdate}>Update</Button>
                    <Button onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default EditTask;