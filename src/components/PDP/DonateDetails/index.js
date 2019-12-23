import React, {Component} from "react";
import './donatedetails.scss';
import './media-donatedetails.scss';
import UserInfo from "../UserInfo";
import {connect} from "react-redux";

class DonateDetails extends Component{
    render() {
        const {title,date,description,src} = this.props;
        const userInfo=[
            {
                title:'Name',
                content:`Ali Valiyev`
            },
            {
                title:'Email',
                content:`ali.valiyev@gmail.com`
            },
            {
                title:'Phone',
                content:`+994 55 555 55 55`
            }
        ];

        return(

            <div className={'donate-details'}>
                <div className={'donate-details__header-container'}>
                    <h3 className={'donate-details__header'}>{title}</h3>
                    <p className={'donate-details__city-date'}>Baku, {date}</p>
                </div>
                <img src={`${src}`} className={'donate-details__img'}/>
                    <div className={'donate-details__desc-container'}>
                        <p className={'donate-details__title'}>Description</p>
                        <p className={'donate-details__content'}>{description}</p>
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
const mapStateToProps=(store)=>{
    return  {
        posts:store.posts
    }
};

export default connect(mapStateToProps)(DonateDetails);