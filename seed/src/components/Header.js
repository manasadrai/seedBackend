import React, { Component } from 'react'
import '../components/design.css'


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div >
                <header className="header"> 
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
                    <div className="container"><h2 className="head" style={{fontSize:"20px", color:"white", textShadow:"2px 2px black"}} class="text-success">SEED MANAGMENT APP</h2></div>
                    <br/>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header