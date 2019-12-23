import React, {Component} from "react";
import '../DonateDetails/donatedetails.scss';
import UserInfo from "../UserInfo";
class TakeItDetails extends Component{
    render() {
        const {title,city,date,description,name,email,phone,category} = this.props;
        const userInfo=[
            {
                title:'Name',
                content:`${name}`
            },
            {
                title:'Email',
                content:`${email}`
            },
            {
                title:'Phone',
                content:`${phone}`
            }
        ];

        return(
            <div className={'donate-details'}>
                <div className={'donate-details__top'}>
                    <h3 className={'donate-details__header'}>{title}</h3>
                    <p className={'donate-details__city-date'}>{city},{date}</p>
                    <div className={'donate-details__desc-container takeIt'}>
                        <p className={'donate-details__title'}>Description</p>
                        <p>{description}</p>
                        <p  className={'donate-details__title'}>Category</p>
                        <p>{category}</p>
                    </div>
                </div>
                <div className={'donate-details__bottom'}>
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
            </div>
        )
    }
}

export default TakeItDetails;