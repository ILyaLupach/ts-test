import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import TodosPage from './pages/TodosPage'
import AboutPage from './pages/AboutPage'

const App: React.FC = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' component={TodosPage} exact />
                <Route path='/about' component={AboutPage}/>
            </Switch>
        </Router>
    )
}

export default App;
