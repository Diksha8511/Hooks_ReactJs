import React from "react";
import {Route, Switch} from "react-router-dom";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import User from "./User";
import Search from "./Search"

const App = () => {
    return(
        <>
        <Menu />
            <Switch>
                <Route exact path='/' component={()=><About name="About" />} />
                <Route exact path="/service" render={()=><Service name="Service" />} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/search' component={Search} />
                <Route path="/user/:name" component={User} />
                <Route component={Error}/>
            </Switch>
            {/* <About />
            <Contact /> */}
        </>
    )
}

export default App;