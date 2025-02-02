import React from "react";
import "./ItemOfProducts/index";
import "./index.scss";
import ItemOfProducts from "./ItemOfProducts";
import ItemOfProducts2 from "./ItemOfProducts2";
import loading from '../../../img/loading.svg';

class ListOfProducts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded: false,
            posts: [],
            users: []
        }
    }
    componentDidMount(){
        const  getData = async (options) =>{
            const url = options.url;
            const method = options.method;
            await fetch(url)
                .then(result => result.json())
                .then(data => {
                    const obj = {};
                    obj[method] = data;
                    this.setState(Object.assign(
                        {},
                        {
                        ...this.state,
                        isLoaded: true,
                        },
                        obj
                    ))
                })
        };

        getData({url: "https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts", method: 'posts'});
    }

    render() {
        return(
            <div className="products__container">
                {
                    this.state.isLoaded ? (
                        this.state.posts.map((post,key)=> {
                            if(post.isActive){
                                if (post.photos[0] === "" || post.photos[0] == null)
                                {
                                    return(
                                        <ItemOfProducts2
                                            key={key}
                                            title={post.title}
                                            date={post.date}
                                            description={post.description}
                                        />)}
                                else {
                                    return (
                                        <ItemOfProducts
                                            key={key}
                                            date={post.date}
                                            title={post.title}
                                            image={post.photos[0]}
                                        />)
                                }
                            }
                        })) :<div className={'div'}><img src={loading} className={'loading-img'} alt={'Loading...'} /></div>
                }
            </div>
        )
    }
}

export default ListOfProducts;