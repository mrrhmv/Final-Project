import React from "react";


class ItemOfProducts2 extends React.Component{

    render() {
        const {description, title, date} = this.props;

        console.log('SLK prodItem 2 = this.props ===', this.props);
        return(
            <div className="products__item">
                <div className="products__item_takeIt">
                    <h3 className="products__item-header">{title}</h3>{/*inline-block left*/}
                    <p className="products__item-text">{date}</p>{/*inline-block right*/}
                    <p  className="products__item-description">{description}</p>{/*block element*/}
                </div>
            </div>
        )
    }
}

export default ItemOfProducts2;