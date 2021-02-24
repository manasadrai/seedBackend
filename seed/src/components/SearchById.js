import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actions'

class SearchById extends Component {

    constructor(props) {
        super(props)

        this.id = React.createRef()
    }


    componentDidMount() {
        this.props.clearState()
    }


    search() {
        this.props.onGetSeedsbyId(this.id.current.value)
    }



    render() {
        const{seedsList}=this.props
         return (
             
            <div className="container">
                 <br/>
                <div className="card col-md-4 offset-md-4 offset-md-4" style={{ marginRight: "5px" }}>

                    <input type="text" ref={this.id}  id="id" placeholder="Seed ID" />
                </div>

                <br/>
                <div>
                    <button className="btn btn-success add-button" onClick={this.search.bind(this)}>Search</button>
                </div>

                <hr />
                <div className="container">
                    <h2 className="head" style={{left:"25%", fontSize:"80px", color:"green", textShadow:"2px 2px black"}}>PLANTS WITH GIVEN ID </h2>
                    <table border="8" className="table">

                    <thead style={{backgroundColor:"#9FF781"}}> 

                            <tr>
                                <th scope="col">Seed Id</th>
                                <th scope="col">Common Name</th>
                                <th scope="col">BloomTime</th>
                                <th scope="col">Watering</th>
                                <th scope="col">Difficulty Level</th>
                                <th scope="col">Temperature</th>
                                <th scope="col">Type Of Seeds</th>
                                <th scope="col">Seed Description</th>
                                <th scope="col">Seed Stock</th>
                                <th scope="col">Seed Cost</th>
                                <th scope="col">Seeds Per Packet</th>

                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <th>{seedsList.seedId}</th>
                        <td>{seedsList.commonName}</td>
                        <td>{seedsList.bloomTime}</td>
                        <td>{seedsList.watering}</td>
                        <td>{seedsList.difficultyLevel}</td>
                        <td>{seedsList.temperature}</td>
                        <td>{seedsList.typeOfSeeds}</td>
                        <td>{seedsList.seedDescription}</td>
                        <td>{seedsList.seedStock}</td>
                        <td>{seedsList.seedCost}</td>
                        <td>{seedsList.seedsPerPacket}</td>
                    </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage,
        seedsList: state.seedsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetSeedsbyId: (id) => dispatch(actionCreators.getSeedsById(id)),
        clearState: () => dispatch(actionCreators.clearState())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchById)