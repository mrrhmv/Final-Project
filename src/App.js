import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/HomePage/Header";
import CreateNewPost from "./components/CreateNewPost";
import Footer from "./components/HomePage/Footer";
import PDP from "./components/PDP";
import PLP from './components/PLP/PLP';
import ListOfProducts from "./components/HomePage/ListOfProducts";
import Slider from './components/HomePage/Slider/Slider';
import './reset.scss'
import './components/HomePage/Footer/index.scss';
import './components/HomePage/Footer/media.scss';


function App() {
    const elements = [{
        class_name: "About",
        list : [
            'About', 'History'
        ],
        header: "About"
    }, {
        class_name: "Follow",
        list : [
            'Facebook', 'Instagram'
        ],
        header: "Follow"
    } , {
        class_name: "Help",
        list : [
            'Contact'
        ],
        header: "Help"
    }];
    return (
            <Router>
                <div>
                <Switch>
                    <Route path='/' exact>
                    <Header/>
                    {/*<Slider/>*/}
                    <ListOfProducts/>
                    <Footer
                            all={elements}
                            class_name="footer"/>
                    </Route>
                    <Route path='/PLP'>
                        <Header/>
                        <PLP/>
                        <Footer
                            all={elements}
                            class_name="footer"/>
                    </Route>
                    <Route path='/PDP/:id' component={PDP}>
                    </Route>
                    <Route path='/new'>
                    <Header/>
                    <CreateNewPost/>
                    <Footer
                        all={elements}
                        class_name="footer"/>
                </Route>
                </Switch>
                </div>
            </Router>
    )
}
export default App;
