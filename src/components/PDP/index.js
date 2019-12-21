import React from "react";
import './index.scss'
import DonateDetails from "./DonateDetails";
import TakeItDetails from "./TakeItDetails";
import Modal from '@material-ui/core/Modal';

function PDP(){
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        return(
            <div>
             <DonateDetails/>
             <TakeItDetails/>
             <button className={'PDP__edit-btn PDP__btn'} onClick={handleOpen}>Edit</button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur consequatur dicta eaque, enim facere fugit illo incidunt ipsum iure iusto minima, quaerat qui quo reiciendis repellendus similique tempora voluptates.</p>
                </Modal>



             <button className={'PDP__delete-btn PDP__btn'}>Delete</button>
            </div>
        )

}

export default PDP;