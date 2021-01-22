import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import About from "./components/About"
import Home from "../cmm/pages/Home"
import Users from '../uss/pages/Users'

export default function BasicRouter(){
    return (<Router>
    <div style={{border:'1px solid black',width:'100%',margin:'50px auto'}}>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/users'>Users</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/users' component={Users}></Route>
            
        </Switch>
    </div>
    </Router>)
}
