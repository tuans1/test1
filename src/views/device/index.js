import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import test from '../../redux/deviceReducer';
import { createDevice, updateDevice, deleteDevice, getDevice } from '../../redux/deviceReducer';
import deviceApi from '../../api/deviceApi';
import ModalComp from '../../components/modal';

const DEFAULT_DEVICE = { name: '', status: 1, comment: '', user: '', code: '' }

export default function Device() {
    const [device, setDevice] = useState(DEFAULT_DEVICE)
    const dispatch = useDispatch();
    const { devices } = useSelector(state => state.device)
    const [show, setShow] = useState(false)
    const [deleteItem, setDeleteItem] = useState({})
    useEffect(() => {
        dispatch(getDevice(deviceApi))
    }, [])

    const handleSubmit = () => {
        if (device.code) {
            dispatch(updateDevice(device))
            alert('Update Successfully !')
        } else {
            console.log("RUN");
            dispatch(createDevice(device))
            alert('Create Successfully !')
        }
        setDevice(DEFAULT_DEVICE)
    }
    const handleChange = e => {
        setDevice({ ...device, [e.target.name]: e.target.value })
    }
    const handleDelete = () => {
        dispatch(deleteDevice(deleteItem.code))
        setShow(!show)
        alert("Delete Successfully !")
    }
    const handleShow = dev => {
        if (dev?.name) setDeleteItem(dev)
        setShow(!show)
    }
    const handleReset = () => {
        setDevice(DEFAULT_DEVICE)
    }
    return (
        <>
            <div className='todo-container'>
                <div className='todo-form col-lg-3'>
                    <div className="form-group ">
                        <label >Name</label>
                        <input onChange={handleChange} value={device.name} name="name" type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group ">
                        <label >User</label>
                        <input onChange={handleChange} value={device.user} name="user" type="text" className="form-control" placeholder="user" />
                    </div>
                    <div className="form-group ">
                        <label>Status</label>
                        <select className="form-control" value={device.status} name='status' onChange={handleChange}>
                            <option value='1' >OK</option>
                            <option value='0'>Hỏng</option>
                            <option value='2'>Sửa</option>
                        </select>
                    </div>
                    <div className="form-group ">
                        <label >Comment</label>
                        <input onChange={handleChange} value={device.comment} name="comment" type="text" className="form-control" placeholder="comment" />
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary" >Submit</button>
                    <button onClick={handleReset} className="btn btn-warning" >Reset</button>
                </div>
                <div className='col-lg-9'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" >#</th>
                                <th scope="col" className='text-center'>Code</th>
                                <th scope="col" className='text-center' >Name</th>
                                <th scope="col" className='text-center'>User</th>
                                <th scope="col" className='text-center'>Status</th>
                                <th scope="col" className='text-center'>Comment</th>
                                <th scope="col" className='text-center'>Created</th>
                                <th scope="col" className='text-center'>Updated</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {devices.map((x, i) => {
                                return (
                                    <tr key={x.code}>
                                        <th scope="row">{i + 1}</th>
                                        <td>{x.code}</td>
                                        <td>{x.name}</td>
                                        <td>{x.user}</td>
                                        <td>{x.status === 1 ? 'OK' : x.status === 2 ? 'Sửa' : 'Hỏng'}</td>
                                        <td>{x.comment}</td>
                                        <td>{moment(x.createdAt).format('DD/MM/YYYY hh:mm')}</td>
                                        <td>{moment(x.updatedAt).format('DD/MM/YYYY hh:mm')}</td>
                                        <td><button type="submit" onClick={() => setDevice(x)} className="btn-sm btn btn-primary">Edit</button>
                                            <button type="submit" className="btn-sm btn btn-warning" onClick={() => handleShow(x)} >Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <ModalComp deleteItem={deleteItem} show={show} handleShow={handleShow} title="Delete Device" handleDelete={handleDelete} />
        </>
    )
}
