import React from "react";
import "./ItemOfProducts/index"
import ItemOfProducts from "./ItemOfProducts";
import ItemOfProducts2 from "./ItemOfProducts2";

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
            console.log('getData = ', url, method);
            await fetch(url)
                .then(result => result.json())
                .then(data => {
                    const obj = {};
                    obj[method] = data;
                    console.log('TEST TEST ', Object.assign(
                        {},
                        {
                            ...this.state,
                            isLoaded: true,
                        },
                        obj
                    ));
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
                        })) : "Loading..."
                }
            </div>
        )
    }
}

export default ListOfProducts;