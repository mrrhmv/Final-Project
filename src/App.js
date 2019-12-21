import React from 'react';
import './reset.scss'
import Header from "./components/HomePage/Header";
import CreateNewPost from "./components/CreateNewPost";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PDP from "./components/PDP";

function App() {
    return (

            <Router>
                <div>
                <Switch>
                    <Route path='/' exact>
                    <Header/>
                    <Menu/>
                    </Route>
                    <Route path='/new'>
                        <Header/>
                        <Menu/>
                        <CreateNewPost/>
                    </Route>
                    <Route path='/PDP'>
                        <Header/>
                        <Menu/>
                        <PDP/>
                    </Route>
                </Switch>
                </div>
            </Router>

    )
}

export default App;
