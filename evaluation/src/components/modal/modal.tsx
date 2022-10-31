import './modal.css';
import pathCopy from '../../assets/icons/pathCopy.png';
import eye_on from '../../assets/icons/eye_on.png';


const Modal = () => {

  return <div className='modal'>
    <div className='overlay'>
      <div className="modal-content">
        <div className="modal-inner-content">
          <div className='add-site'>Add Site</div>
          <form action="" className='from-box'>
            <div>
              <label htmlFor="">URL</label><br />
              <input type="url" name="" id="" className='modal-input' />
            </div>

            <div className="site-div">
              <div>
                <label htmlFor="">Site Name</label><br />
                <input type="text" name="" id="" className='modal-input' />
              </div>

              <div className='selector'>
                <label htmlFor="">Sector/Folder</label><br />
                <input type="text" name="" id="" className='modal-input' />
                <img src={pathCopy} className="pathCopy" alt="" />
              </div>
            </div>

            <div className="site-div">
              <div>
                <label htmlFor="">User Name</label><br />
                <input type="text" name="" id="" className='modal-input' />
              </div>

              <div className='site-password'>
                <label htmlFor="">Site Password</label><br />
                <input type="text" name="" id="" className='modal-input' />
                <img src={eye_on} className="site-password-eye" alt="" />
              </div>
            </div>

            <div className="note-area">
              <label htmlFor="">Notes</label><br />
              <textarea name="" id="" className='modal-input'></textarea>
            </div>

            <div className="reset-button">
              <div>
                <button type="reset" className='reset-btn'><span className='reset'>Reset</span></button>
              </div>
              <div>
                <button type="submit" className='save-btn'><span className='save'>Save</span></button>
              </div>
            </div>



          </form>
        </div>

      </div>

    </div>


  </div>

}
export default Modal;