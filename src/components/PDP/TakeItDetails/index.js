import React, {Component} from "react";
import '../DonateDetails/donatedetails.scss';
import donate from '../../../img/volunteer.png';
import UserInfo from "../UserInfo";
class TakeItDetails extends Component{
    render() {
        const {title,date,description} = this.props;
        const userInfo=[
            {
                title:'Name',
                content:`Orxan Babayev`
            },
            {
                title:'Email',
                content:`orxan.babayev@gmail.com`
            },
            {
                title:'Phone',
                content:`+994 51 758 96 03`
            }
        ];

        return(
            <div className={'donate-details'}>
                <div className={'donate-details__header-container'}>
                    <h3 className={'donate-details__header'}>{title}</h3>
                    <p className={'donate-details__city-date'}>Baku, {date}</p>
                </div>
                <img src={donate} className={'donate-details__img'}/>
                    <div className={'donate-details__desc-container takeIt'}>
                        <p className={'donate-details__title'}>Description</p>
                        <p>{description}</p>
                    </div>

                    <div className={'donate-details__user-info'}>
                        <p className={'donate-details__title'}>User Info</p>
                        {userInfo.map((info,index)=>{
                            return  <UserInfo
                                key={index}
                                title={info.title}
                                content={info.content}
                            />
                        })}
                    </div>
            </div>
        )
    }
}

export default TakeItDetails;