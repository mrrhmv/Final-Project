import React from "react";
import './index.scss';
import './media-PDP.scss';
import DonateDetails from "./DonateDetails";
import TakeItDetails from "./TakeItDetails";
import Modal from '@material-ui/core/Modal';
import {withRouter} from "react-router-dom";
import Header from "../HomePage/Header";
import Footer from "../HomePage/Footer";
import {connect} from "react-redux";

function PDP(props){
    const elements = [{
        class_name: "About",
        list : [
            'About', 'History'
        ],
        header: "About"
    }, {
        class_name: "Follow",
        list : [
            'Facebook', 'Instagram'
        ],
        header: "Follow"
    } , {
        class_name: "Help",
        list : [
            'Contact'
        ],
        header: "Help"
    }];

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
        return(
            <div>
                <Header/>
            <div className={"pdp"}>
                {props.posts.posts.map((obj)=>{
                    if(`${obj.id}`===props.match.params.id){
                        if(obj.type==='donate'){
                            return  <DonateDetails
                            title={obj.title}
                            date={obj.date}
                            description={obj.description}
                            src={obj.photos[0]}
                            />
                        } else{
                            return <TakeItDetails
                                title={obj.title}
                                date={obj.date}
                                description={obj.description}
                            />
                        }
                    }

                    })
                }

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div className={"modal-win"}>
                        <div className={'modal-win__header'}>
                            <button className={'modal-win__cancel-btn'} onClick={handleClose}><i className="fas fa-times"/></button>
                        </div>
                        <form className={'modal-win__form'}>
                        <p className={'modal-win__form-desc'}>Please enter your PIN of post for further action. You can find the PIN in the letter that was sent to you when the post was published on the site.</p>
                            <p className={'modal-win__input-label'}>Your PIN</p>
                            <input className={'modal-win__input'} placeholder={'Please enter Your PIN'}/>
                            <input type={'submit'} className={'modal-win__submit-btn'} value={'SUBMIT'} onClick={(event)=>{event.preventDefault()}}/>
                            <a href={'#'} className={'modal-win__forgot-pin'} onClick={(event)=>{event.preventDefault()}}>I forgot PIN</a>
                        </form>
                    </div>

                </Modal>


             <div className={'pdp__buttons'}>
                 <button className={'PDP__edit-btn PDP__btn'} onClick={handleOpen}>Edit</button>
                 <button className={'PDP__delete-btn PDP__btn'} onClick={handleOpen}>Delete</button>
             </div>
            </div>
                <Footer
                    all={elements}
                    class_name="footer"/>
            </div>
        )

}
const mapStateToProps=(store)=>{
    return  {
        posts:store.posts
    }
};


withRouter(PDP);
export default connect(mapStateToProps)(PDP);