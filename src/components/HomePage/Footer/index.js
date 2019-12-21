import React from "react";

class Footer extends React.Component{
    render() {
        const {all ,/*listOfparagraphs , */class_name} = this.props;
        return(
            <div className="footer">
                {
                    all.map((item , index)=>{
                        return (
                            <div className="footer__item" key={index}>
                                <a href={"#"} className="footer__item-header" onClick={handler} key={index}>{item.class_name}</a>
                                <ul className="footer__item-content "  key={index}>
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
        function handler(e){
            e.preventDefault();
            console.log(e.target.parentNode.children[1]);
            e.target.parentNode.children[1].classList.toggle("active");
        }
    }
}

export default Footer;