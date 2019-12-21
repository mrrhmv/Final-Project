import React from "react";

class Footer extends React.Component{
    render() {
        const {all} = this.props;
        return(
            <div className="footer">
                {
                    all.map((item , index)=>{
                        return (
                            <div className="footer__item" key={index}>
                                <a href={"#"} className="footer__item-header" onClick={handler}>{item.class_name}</a>
                                <ul className="footer__item-content ">
                                    {
                                        item.list.map((listElem,key)=>{
                                            return <li className="footer__content-text" key={key}>{listElem}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
        function handler(event){
            event.preventDefault();
            event.target.parentNode.children[1].classList.toggle("active");
        }
    }
}

export default Footer;