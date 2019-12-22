import React from "react";
import {connect} from 'react-redux';
import ItemOfProducts from "../HomePage/ListOfProducts/ItemOfProducts";
import ItemOfProducts2 from "../HomePage/ListOfProducts/ItemOfProducts2";
import FilterPanel from "./FilterPanel";
import {Link} from "react-router-dom";
class PLP extends React.Component{

    render() {
        return(
         <div>
             <FilterPanel/>
            
         <div className={'plp_wrap'}>
             {
                 this.props.posts.posts.map((post,key)=>{
                if(post.type === "donate") {
                 return (
                     <Link to={'PDP/' + `${post.id}`}>
                        <ItemOfProducts
                         key={key}
                         date={post.date}
                         title={post.title}
                         image={post.photos[0]}
                         />
                    </Link>) }
                else {
                    return  <Link to={'PDP/' + `${post.id}`}>
                        <ItemOfProducts2
                        key={key}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                    />
                    </Link>
                }
         })}
             </div>

         </div>
        )
    }
}

const mapStateToProps=(store)=>{
    return  {
        posts: store.posts
    }
};

export default connect(mapStateToProps)(PLP);