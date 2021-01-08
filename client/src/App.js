import React, {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchJob from "./components/search-job.component";
import Recruitment from "./components/recruitment.component";
import ApplyRecruitment from "./components/apply-recruitment.component";
import AddRecruitment from './components/add-recruitment.component';
import {StartScreen, LoginScreen, RegisterScreen, RegisterEmployerScreen, Dashboard} from "./screens";

class App extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route path={["/", "/index"]} exact component={StartScreen} />
                    <Route path="/login" exact component={LoginScreen} />
                    <Route path="/seeker/signup" exact component={RegisterScreen} />
                    <Route path="/company/signup" exact component={RegisterEmployerScreen} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/recruitment/search" exact component={SearchJob} />
                    <Route path="/recruitment/apply/:id" exact component={ApplyRecruitment} />
                    <Route path="/company/add-recruitment" exact component={AddRecruitment} />
                </Switch>
            </div>
        );
    }
}

export default App;