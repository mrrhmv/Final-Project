import React from "react";

class ItemOfProducts extends React.Component{

    render() {
        const {image, title, date} = this.props;
        return(
            <a className="products__item">
                <img src={image} className="products__item-img">

                </img>
                <div className="products__item-content">
                    <h3 className="products__content-header">{title}</h3>
                    <p className="products__content-text">
                        {date}
                    </p>
                </div>
            </a>
        )
    }
}

export default ItemOfProducts;