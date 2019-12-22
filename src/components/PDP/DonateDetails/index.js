import React, {Component} from "react";
import './donatedetails.scss';
import UserInfo from "../UserInfo";
import {connect} from "react-redux";

class DonateDetails extends Component{
    render() {


        const {title,city,date,description,name,email,phone,category} = this.props;
        const userInfo=[
            {
                title:'Name',
                content:`Ali Valiyev`
                // ${name}`
            },
            {
                title:'Email',
                content:`ali.valiyev@mail.ru`
                // ${email}
            },
            {
                title:'Phone',
                content:`+994 55 987 65 43`
                // ${phone}`
            }
        ];

        return(

            <div className={'donate-details'}>
                <div className={'donate-details__top'}>
                    <h3 className={'donate-details__header'}>Shoes{title}</h3>
                    <p className={'donate-details__city-date'}>Baku{city}, 18-11-2019{date}</p>
                    <img src={'https://via.placeholder.com/300/771796'} className={'donate-details__img'}/>
                </div>
                <div className={'donate-bottom'}>
                    <div className={'donate-details__desc-container'}>
                        <p className={'donate-details__title'}>Description</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi id iusto sapiente voluptates! Adipisci in iure nemo odit similique tempora veritatis! Consectetur eum fuga natus nostrum quod sapiente vero vitae?{description}</p>
                        <p  className={'donate-details__title'}>Category</p>
                        <p>Shoes{category}</p>
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