import React, { Component } from 'react';
import FoodGuide from './components/FoodGuide/FoodGuide';
import {Switch, Route} from 'react-router-dom';
import FoodList from "./components/FoodGuide/FoodList/FoodList";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/:id" component={FoodList} />
                    <Route path="/" exact component={FoodGuide} />
                </Switch>
            </div>
        );
    }
}

export default App;