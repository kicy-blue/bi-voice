import Home from "@/views/Home";
import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="home" component={Home}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router