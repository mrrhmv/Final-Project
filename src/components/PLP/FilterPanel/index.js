import React from "react";
import ItemOfCategories from "../../HomePage/ItemOfCategories";
import {connect} from 'react-redux';
class FilterPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {class:"filter__content hidden"};
    }

    render() {

        function getCategories(){
            fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/categories')
                .then(response => response.json())
                .then(result => {
                    return result;
                })
        }

        const categoryList=[
            {
                content:'BOOKS',
                handler: ()=>{}
            },
            {
                content:'FOR KIDS',
                handler: ()=>{}
            },
            {
                content:'CLOTHES',
                handler: ()=>{}
            },
            {
                content:'HOME',
                handler: ()=>{}
            }
        ];

        return (
            <div className="filter">

                <a href="#" onClick={(event)=>{
                    event.preventDefault();
                    if(this.state.class==="filter__content hidden"){
                        this.setState({class:"filter__content"})
                    } else{
                        this.setState({class:"filter__content hidden"})
                    }

                }}
                   className="filter__header">FILTERS</a>
                <div className={this.state.class}>
                    {categoryList.map((category, key)=>{
                        return(
                                <ItemOfCategories
                                    key={key}
                                    handler={category.handler}
                                    content={category.content}
                                />
                        )
                    })}
                </div>
            </div>
        );
    }
}


const mapStateToProps=(store)=>{
    return  {
        posts: store.posts
    }
};

export default connect(mapStateToProps)(FilterPanel);