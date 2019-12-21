import React from "react";
import '../../Home Page/ListOfProducts/ItemOfProducts'
import ItemOfProducts2 from "./ItemOfProducts2/index";
import ItemOfProducts from "../../Home Page/ListOfProducts/ItemOfProducts/index"

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
        // let all =[];
        // fetch("https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts")
        //     .then(response => response.json())
        //     .then(result=>{
        //         console.log(result);
        //         all = result;
        //         {
        //             all.map(each=>{
        //                 console.log(each.title);
        //                 return <ItemOfProducts
        //                     image={each.photos[0]}
        //                     title={each.title}
        //                     date={each.date}
        //                     // city={each.city}
        //                 />
        //             })
        //         }
        //         // {all = result.date };//baxarsan
        //     });
        return(
            <div >
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
                        })) : "loading..."
                }
            </div>
        )
    }
}

export default ListOfProducts;