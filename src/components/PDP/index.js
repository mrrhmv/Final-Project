import React from "react";
import './index.scss'
import DonateDetails from "./DonateDetails";
import TakeItDetails from "./TakeItDetails";
import Modal from '@material-ui/core/Modal';

function PDP(props){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        return(
            <div className={"pdp"}>
             <DonateDetails/>
             {/*<TakeItDetails/>*/}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <p>Modal Window</p>
                </Modal>


             <div className={'pdp__buttons'}>
                 <button className={'PDP__edit-btn PDP__btn'} onClick={handleOpen}>Edit</button>
                 <button className={'PDP__delete-btn PDP__btn'} onClick={handleOpen}>Delete</button>
             </div>
            </div>
        )

}

export default PDP;