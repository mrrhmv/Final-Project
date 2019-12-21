import React from 'react';
import './reset.scss'
import Header from "./components/HomePage/Header";
import CreateNewPost from "./components/CreateNewPost";
import Footer from "./components/HomePage/Footer";
import './components/HomePage/Footer/index.scss';
import './components/HomePage/Footer/media.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PDP from "./components/PDP";

function App() {
    const elements = [{
        class_name: "About-us",
        list : [
            'Contact', 'How to Purchase', 'Payment'
        ],
        header: "About"
    }, {
        class_name: "Follow-us",
        list : [
            'Facebook', 'Instagram', 'Pinterest'
        ],
        header: "Follow"
    } , {
        class_name: "Help",
        list : [
            'History', 'Policy', "Work with Us"
        ],
        header: "Help"
    }];
    return (
            <Router>
                <div>
                <Switch>
                    <Route path='/' exact>
                    <Header/>
                    <Footer
                            all={elements}
                            class_name="footer"/>
                    </Route>
                    <Route path='/new'>
                        <Header/>
                        <CreateNewPost/>
                        <Footer
                            all={elements}
                            class_name="footer"/>
                    </Route>
                    <Route path='/PDP'>
                        <Header/>
                        <PDP/>
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
