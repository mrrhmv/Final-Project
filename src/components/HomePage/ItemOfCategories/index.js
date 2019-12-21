import React, {Component} from "react";

class ItemOfCategories extends Component {
    render() {
        const {content,handler} = this.props;
        return (
            <p onClick={handler}>{content}</p>
        )
    }
}

export default ItemOfCategories;