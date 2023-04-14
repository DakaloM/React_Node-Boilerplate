import React, { useState } from 'react';
import "./profile.scss";
import CloseIcon from '@mui/icons-material/Close';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const Profile = ({setOpenProfilePage}) => {

    const [file, setFile] = useState("")
  return (
    <div className='Profile'>
        <div className="container">
            <span className='close' onClick={(e) => setOpenProfilePage(false)}><CloseIcon className='icon' /></span>
            
            <div className="wrapper">

                <div className="top">
                    <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
                    <span className="header">Personal Info</span>
                    <div className="personalInfo">
                        
                        <div className="item">
                            <span className="key">First Name:</span>
                            <span className="value">John</span>
                        </div>
                        <div className="item">
                            <span className="key">Last Name:</span>
                            <span className="value">Doe</span>
                        </div>
                        <div className="item">
                            <span className="key">Email:</span>
                            <span className="value">email@email.com</span>
                        </div>
                        <div className="item">
                            <span className="key">phone:</span>
                            <span className="value">215 847 6531</span>
                        </div>

                    </div>
                    
                    <span className="header">Shipping Info</span>
                    <div className="shippingInfo">
                        <div className="item">
                            <span className="key">Street address:</span>
                            <span className="value">23 jameson street</span>
                        </div>
                        <div className="item">
                            <span className="key">City:</span>
                            <span className="value">Johannesburg</span>
                        </div>
                        <div className="item">
                            <span className="key">State:</span>
                            <span className="value">Gauteng</span>
                        </div>
                        <div className="item">
                            <span className="key">Zip code:</span>
                            <span className="value">1800</span>
                        </div>
                    </div>
                    
                </div>

                <div className="bottom">
                    <span className="header">Edit Profile details</span>

                    <form action="">


                        <div className="group">

                        
                            <div className="form-group">
                                <label htmlFor="firstname">First name</label>
                                <input type="text" placeholder='John' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" placeholder='Doe' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" placeholder='john@Doe.com' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" placeholder='072 135 9685' />
                            </div>

                            <div className="form-group">
                                <label htmlFor="street">Street address</label>
                                <input type="text" placeholder='13 lenovia street' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" placeholder='johannesburg' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="email" placeholder='Limpopo' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">Zip code</label>
                                <input type="number" placeholder='0955' />
                            </div>

                        </div>
                        <div className="image">
                            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
                            alt="" />

                            <div className="fileinput">
                                <label htmlFor="file">Image <DriveFolderUploadOutlinedIcon className='icon'/></label>
                                <input id='file' type="file" style ={{display: "none"}}
                                onChange={e => setFile(e.target.files[0])}
                                />
                            </div>

                        </div>
                        <button>Save</button>
                        
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Profile