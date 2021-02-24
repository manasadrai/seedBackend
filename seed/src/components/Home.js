import React from 'react'
import { withRouter } from 'react-router-dom'
import '../components/design.css'

class Home extends React.Component {

    go() {
        console.log(' bowbow '+this.props)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <section className="background" style={{backgroundImage:"url(./bgm1.jpg)"}}></section>
                <h1 className="head" style={{position:"absolute",top:"50%", left:"15%", fontSize:"80px", color:"dark green", textShadow:"2px 2px green"}}>SEED MANAGEMENT SYSTEM</h1>
            </div >
        )
    }
}


export default withRouter(Home)

