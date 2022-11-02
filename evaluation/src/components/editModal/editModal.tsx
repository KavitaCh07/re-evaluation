import './editModal.css'
import { useState } from 'react';
import close_btn from '../../assets/icons/close_btn.png';
import eye_on from '../../assets/icons/eye_on.png';
import pathCopy from '../../assets/icons/pathCopy.png'

const EditModal = (props: any) => {

    const [editModal, setEditModal] = useState(false);

    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
    const displayData = JSON.parse(localStorage.getItem(currentUser) || "[]");
    console.log("displayData", displayData);
    const [value, setValue] = useState({
      url: "", siteName: "", selectFolder: "", userName: "", sitePassword: "", notesArea: "",
    });

   
    return (
        <div className='modal'>
            <div className='overlay-edit'>
                <div className="modal-content">

                    <div className="modal-inner-content">
                        <div className="close_btn">
                            <img src={close_btn} alt="" onClick={() => props.setEditModal(false)} />
                        </div>
                        <div className="modal-top-edit-button">
                            <div className='add-site'>Site Details</div>
                            <button type="submit" className='edit-buton'><span className='edit-text'>Edit</span></button>
                        </div>

                        <form action="" className='from-box'>
                            <div>
                                <label htmlFor="">URL</label><br />
                                <input type="text" name="url" id="" className='modal-input' />
                            </div>

                            <div className="site-div">
                                <div>
                                    <label htmlFor="">Site Name</label><br />
                                    <input type="text" name="siteName" id="" className='modal-input' />
                                </div>

                                <div className='selector'>
                                    <label htmlFor="">Sector/Folder</label><br />
                                    <input type="text" name="selectFolder" id="" className='modal-input' />
                                    <img src={pathCopy} className="pathCopy" alt="" />
                                </div>
                            </div>

                            <div className="site-div">
                                <div>
                                    <label htmlFor="">User Name</label><br />
                                    <input type="text" name="userName" id="" className='modal-input' />
                                </div>

                                <div className='site-password'>
                                    <label htmlFor="">Site Password</label><br />
                                    <input type="text" name="sitePassword" id="" className='modal-input' />
                                    <img src={eye_on} className="site-password-eye" alt="" />
                                </div>
                            </div>

                            <div className="note-area">
                                <label htmlFor="">Notes</label><br />
                                <textarea name="notesArea" id="" className='modal-input'></textarea>
                            </div>


                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default EditModal;