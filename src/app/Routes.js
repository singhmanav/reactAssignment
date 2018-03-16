// route configuration


import React from "react";

import {
       BrowserRouter as Router,  
       Route, 
        Switch,
        } from "react-router-dom";

        
import {App} 
        from "./App";


import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import StateList from "./stateComp/containers/StateList";
import StateView from "./stateComp/containers/StateView";
import StateEdit from "./stateComp/containers/StateEdit";


// default import, alias by default


// functional component
export default function Routes(props) {
    return (
        <Router>
            <App>
               <Switch>
                    <Route path="/"  exact   component={Home} />
                    <Route path="/about"   component={About} />
                    <Route path="/contact"   component={Contact} />
                    <Route path="/states" exact   component={StateList} />
                    <Route path="/state/view/:id" exact   component={StateView} />
                    <Route path="/state/edit/:id" exact   component={StateEdit} />
                    <Route path="/state/create" exact   component={StateEdit} />
                    
                    <Route path="*"   component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}
