import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AddSeed from './AddSeed'
import ViewSeed from './ViewSeed';
import Home from './Home'
import SearchByName from './SearchByName'
import SearchById from './SearchById'
// import Header from './Header';
// import Footer from './Footer';
function ReactRouter() {
    return (
        <Router>
             {/* <Header/> */}
             {/* <Footer/> */}
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item" style={{color:"green"}}>
                                    <Link className="nav-link" to="/"> <h5 class="text-success">Home </h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listseeds" >  <h5 class="text-success">List of Seeds</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/add">  <h5 class="text-success">Add Seed </h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchByCommonName"> <h5 class="text-success">Search By Common Name</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/searchById"> <h5 class="text-success">Search By ID</h5></Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

                
                <Switch>
                    <Route exact path="/listseeds">
                        <ViewSeed></ViewSeed>
                    </Route>
                    <Route path="/add">
                        <AddSeed></AddSeed>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/searchByCommonName" component={SearchByName}/>
                    <Route path="/searchById" component={SearchById}/>
                </Switch>
            </div>
        </Router>
    )
}

export default ReactRouter
