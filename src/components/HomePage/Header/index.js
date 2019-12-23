import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss';
import './media-header.scss';
import BurgerLine from "../BurgerLine/index";
import ItemOfCategories from "../ItemOfCategories";
import Search from "../../HomePage/Search/index";
import {Link} from "react-router-dom";
import {setPostsAction} from "../../../actions/postActions";
class Header extends Component {

    constructor(props){
        super(props);
        this.state = {class:"categories__wrapper hidden"};
        this.DropDown = this.DropDown.bind(this);
    }

    DropDown(){
        if(this.state.class==='categories__wrapper hidden'){
            this.setState({class: 'categories__wrapper'});
        }else{
            this.setState({class: 'categories__wrapper hidden'});
        }

    }
    render() {
      const burgerLines=[
            {
                class_name:'header__burger-line'
            },
            {
                class_name:'header__burger-line'
            },
            {
                class_name:'header__burger-line'
            }
        ];
        const categoryList=[
            {
                content:'Donated',
                handler: ()=>{this.props.setPosts('donate')}
            },
            {
                content:'Needs',
                handler: ()=>{this.props.setPosts('take it')}
            }
        ];
        return (
        <div className={'header'}>

            <Link to='/' className={'header__logo'}>
                Believe in Tomorrow
            </Link>
            <Link to='/new' className={'header__create-post-btn'}>
                <i className="fas fa-plus"/>
            </Link>

            <a
                href={'#'}
                onClick={toggleSearchContainer}
                className={'header__search-icon'}
            >
                <i className="fas fa-search"/>
            </a>

            <div className="header__burger" onClick={this.DropDown}>
                {burgerLines.map((line, key)=>{
                    return(
                        <BurgerLine
                            key={key}
                            class_name={line.class_name}
                        />
                    )
                })}
            </div>

            <div className={'header__list-of-categories'}>
                {categoryList.map((category, key)=>{
                    return(
                        <Link
                            to={'/PLP'}
                            key={key}
                            className={'header__list-of-categories-item'}
                        >
                            <ItemOfCategories
                                handler={category.handler}
                                content={category.content}
                            />
                        </Link>
                    )
                })}
            </div>
            <Search/>
            <div className={this.state.class}>
                <ul className={"categories__list"}>
                    <li className={"categories__list--item"}>All</li>
                    <li className={"categories__list--item"}>Books</li>
                    <li className={"categories__list--item"}>Clothes/Men</li>
                    <li className={"categories__list--item"}>Clothes/Women</li>
                    <li className={"categories__list--item"}>For kids</li>
                    <li className={"categories__list--item"}>Home</li>
                </ul>
            </div>
        </div>
    )
    }

}

function toggleSearchContainer(event) {
    event.preventDefault();
    document.querySelector('.header__search-container').classList.toggle('hidden');
    document.querySelector('.header__search-input').value='';
}
const mapStateToProps=(store)=>{
   return  {
       posts:store.posts
   }
};

const mapDispatchToProps = dispatch=>{
    return{
        setPosts: (type) => dispatch(setPostsAction(type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);