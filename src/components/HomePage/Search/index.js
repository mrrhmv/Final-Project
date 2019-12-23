import React, {Component} from 'react';
import './index.scss'

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    searchItem(event) {
        event.preventDefault();
        fetch('https://my-json-server.typicode.com/LeylaM97/json_placeholder/posts')
            .then(response => response.json())
            .then(result => {
                const items = result.filter(obj => obj.title.toLowerCase().includes(this.state.value.toLowerCase()));
                const activeItems = items.filter(item => item.isActive===true);
                if(activeItems.length!==0){
                    activeItems.forEach(i=>
                        console.log(i)
                    )
                }else(
                    console.log('No items')
                )
            })
    }

    render() {
        return (
            <div className={"header__search-container hidden"}>
                <form className={"header__search-form"}>
                    <div className={"header__search-div"}>
                        <input className={'header__search-input'} type={"text"} placeholder={"Search for item"}
                               name={"search"} value={this.state.value} onChange={this.handleChange}/>
                        <button className={'header__cancel-btn'} onClick={closeSearchContainer}><i
                            className="fas fa-times"/></button>
                    </div>

                    <button className={'header__search-btn'}  onClick={this.searchItem}>Search</button>
                </form>
            </div>
        )
    }
}

function closeSearchContainer(event) {
    event.preventDefault();
    document.querySelector('.header__search-container').classList.add('hidden');
}
export default Search;