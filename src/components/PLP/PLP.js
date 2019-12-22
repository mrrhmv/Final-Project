import React from "react";
import {connect} from 'react-redux';
import ItemOfProducts from "../HomePage/ListOfProducts/ItemOfProducts";
import ItemOfProducts2 from "../HomePage/ListOfProducts/ItemOfProducts2";
class PLP extends React.Component{

    render() {
        return(
         <div className={'plp_wrap'}>
             {
                 this.props.posts.posts.map((post,key)=>{
                if(post.type === "donate"){
                 return  <ItemOfProducts
                     key={key}
                     date={post.date}
                     title={post.title}
                     image={post.photos[0]}
                />
                }
                else {
                    return  <ItemOfProducts2
                        key={key}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                    />
                }
         })}

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