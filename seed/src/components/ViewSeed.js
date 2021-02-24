import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import * as actionCreated from '../actions/actions'
import 'bootstrap/dist/css/bootstrap.min.css';

class ViewSeed extends Component {

    componentDidMount() {
        this.props.onGetSeeds()
    }

    delete(id) {
        this.props.onDeleteSeed(id);
    }
    updateClick(seedsList){
     //   console.log("check",seedsList,this.props.history)
        this.props.history.push({
            pathname:"/add",state:{seedsList}
        })
    }

    
    render() {

        console.log(this.props)
        let seedsList = this.props.seedsList.map((seed, index) => {
            
            return (
                <tr key={index}>
                   <th>{seed.seedId}</th>
                    <td>{seed.commonName}</td>
                    <td>{seed.bloomTime}</td>
                    <td>{seed.watering}</td>
                    <td>{seed.difficultyLevel}</td>
                    <td>{seed.temperature}</td>
                    <td>{seed.typeOfSeeds}</td>
                    <td>{seed.seedDescription}</td>
                    <td>{seed.seedStock}</td>
                    <td>{seed.seedCost}</td>
                    <td>{seed.seedsPerPacket}</td>
                    <td>
                        <button onClick={this.delete.bind(this, seed.seedId)} className="btn btn-primary">DELETE</button>
                    </td>
                    <td>
                        <button onClick={this.updateClick.bind(this,seed)} className="btn btn-primary">UPDATE</button>
                    </td>
                </tr>
            )
        })

        var tableStyle = {
            "border": "1px solid black"
         };
        return (
            <div className="container">

                <h2 style={{color:"green", textShadow:"2px 2px black"}}>SEED DETAILS</h2>
               
                <table border="8" className="table">
                    <thead style={{backgroundColor:"green"}}> 
                        <tr>
                        <th style={{border:"1px solid grey"}}>Seed Id</th>
                        <th style={{border:"1px solid grey"}}>Common Name</th>
                        <th style={{border:"1px solid grey"}}>BloomTime</th>
                        <th style={{border:"1px solid grey"}}>Watering</th>
                        <th style={{border:"1px solid grey"}}>Watering</th>
                        <th style={{border:"1px solid grey"}}>Temperature</th>
                        <th style={{border:"1px solid grey"}}>Type Of Seeds</th>
                        <th style={{border:"1px solid grey"}}>Seed Description</th>
                        <th style={{border:"1px solid grey"}}>Seed Stock</th>
                        <th style={{border:"1px solid grey"}}>Seed Cost</th>
                        <th style={{border:"1px solid grey"}}>Seeds Per Packet</th>
                        <th style={{border:"1px solid grey"}}>Delete</th>
                        <th style={{border:"1px solid grey"}}>UPDATE</th>
                        </tr>
                    </thead>

                    <tbody className="success">
                        {seedsList}
                    </tbody>
                </table>
                </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        seedsList: state.seedsList,
        returnedMessage: state.returnedMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSeeds: () => {
            return dispatch(actionCreated.getAllSeeds())
        },
        onDeleteSeed: (id) => {
            return dispatch(actionCreated.deleteSeed(id))
        },
        clearState: () => {
            return dispatch(actionCreated.clearState())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewSeed))
