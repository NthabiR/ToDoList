import Red from "../Gallary/Red.png"
import Orange from "../Gallary/Orange.png"
import green from "../Gallary/green.png"
import CreateTask from '../modals/createTask';
import EditTask from '../modals/EditTask';
import React, { useEffect, useState } from 'react';
import {BsFillCircleFill } from "react-icons/bs";
import {AiOutlineCalendar} from "react-icons/ai";
import {BiEdit } from "react-icons/bi";
import { GoPrimitiveDot } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";

function Home() {

    const [modal, setModal] = useState(false);
    const [modals, setModals] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }

    }, [])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

/*     const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    } */

    const toggle = () => {
        setModal(!modal);
    }
    const toggles = () => {
        setModals(!modals);
    }

    const editdetails = (data) => {
        console.log(data);
        localStorage.setItem("details", JSON.stringify(data))
        setModals(true)
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setModal(false)
        setTaskList(tempList)
    }

   /*  const updateTask = () => {
        updateListArray()
    } */

    const handleDelete = () => {
        deleteTask()
    }

    return (
        <div className="Home">
            <head>
                <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
            </head>
            <body>
                <div className="container">
                    <div className="LEFT">
                        <nav>
                            <img className={Red} alt="" />
                            <img className={Orange} alt="" />
                            <img className={green} alt="" />
                        </nav>

                        {/* <!--NAME and initials div--> */}
                        <div>
                            <nav className="initNav">
                                <label className="init" for="display">NJ</label>
                            </nav>
                            <label className="name" for="name"> NTHABI JACKIE</label>
                        </div>
                        {/* <!--SEARCH DIV--> */}
                        <div>
                            <input type="text" placeholder="Search" className="search" />
                        </div>
                        {/*  <!--Tasks div--> */}
                        <div className="taskDiv">
                            <div className="task">
                                <img src="" alt="" />
                                <label>Tasks</label>
                            </div>
                            <div className="planned">
                                <label>Planned</label>
                            </div>
                            <div className="completed">
                                <label>Completed</label>
                            </div>
                        </div>
                        <div className="line">
                        </div>

                        {/*  <!--TASK LIST--> */}
                        <div className="listsDiv">
                            <label className="lists">LISTS</label>
                        </div>
                        <div className="titDiv">
                            <label className="titleLists">Exam prep</label>
                        </div>
                        {/*  <!--NEW LIST BUTTON --> */}
                        <div>
                            <button className="newlist">New list</button>
                        </div>
                    </div>

                    {/* <!--RIGHT SIDE--> */}
                    <div className="RIGHT">
                        <div className="header">
                            <label className="title">Exam Prep</label>
                            <button className="addTask" onClick={() => setModal(true)}>add task</button>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-sm">
                                <tbody>
                                    {taskList.map((obj, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>
                                                    <div className='d-md-flex'>
                                                        <p className="navbar-brand col-sm-4 col-md-3 mr-0"><span className='icon'><BsFillCircleFill color='pink' size={25} /></span></p>
                                                        <div>
                                                            <h5 className='name'>{obj.Activity}</h5><br />
                                                            <h6 className="text-small positions"><span><AiOutlineCalendar color='maroon' /></span>{obj.StartDate}</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p><span><GoPrimitiveDot /></span>{obj.Description}<span></span></p>
                                                </td>
                                                <td>
                                                    <p><span><BiEdit color='orange' size={20} cursor="pointer" onClick={() => editdetails(obj) /* setModals(true) */} />&nbsp;&nbsp;<MdDeleteForever color='red' size={20} cursor="pointer" onClick={handleDelete} /></span></p>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <CreateTask toggle={toggle} modal={modal} save={saveTask} ></CreateTask>
{/*                                 <EditTask toggle={toggles} modal={modals} updateTask={updateTask} ></EditTask>
 */}                                {/* <EditTask toggle={toggles} modal={modals} updateListArray={updateListArray} ></EditTask> */}
                            </table>
                        </div>


                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            </body>
        </div>
    );
}

export default Home;
