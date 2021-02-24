import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/actions'
import '../components/design.css'


class AddSeed extends Component {

    constructor(props) {
        super(props)
        this.commonName =  React.createRef();
		this.bloomTime = React.createRef();
		this.watering = React.createRef();
		this.difficultyLevel = React.createRef();
		this.temperature = React.createRef();
		this.typeOfSeeds = React.createRef();
		this.seedDescription = React.createRef();
		this.seedStock = React.createRef();
		this.seedCost = React.createRef();
		this.seedsPerPacket = React.createRef();
    }

    componentDidMount() {
        this.props.clearState()
    }
    componentDidUpdate() {

        //let check = this.props.returnedMessage.split(' ')
        if (this.props.returnedMessage === 'Successfully') {
            setTimeout(() => {
                this.props.history.push('/listseeds')
            }, 2000)
        }
    }
    add() {

        let newSeed = {
            commonName: this.commonName.current.value,
            bloomTime: this.bloomTime.current.value,
            watering: this.watering.current.value,
            difficultyLevel: this.difficultyLevel.current.value,
            temperature: this.temperature.current.value,
            typeOfSeeds:  this.typeOfSeeds.current.value,
            seedDescription: this.seedDescription.current.value,
            seedStock: this.seedStock.current.value,
            seedCost: this.seedCost.current.value,
            seedsPerPacket: this.seedsPerPacket.current.value,
        }
        this.props.onAddSeed(newSeed)
    }
    update(seedId) {
        console.log(seedId)
        let seed = {
            seedId: seedId,
            commonName: this.commonName.current.value,
            bloomTime: this.bloomTime.current.value,
            watering: this.watering.current.value,
            difficultyLevel: this.difficultyLevel.current.value,
            temperature: this.temperature.current.value,
            typeOfSeeds:  this.typeOfSeeds.current.value,
            seedDescription: this.seedDescription.current.value,
            seedStock: this.seedStock.current.value,
            seedCost: this.seedCost.current.value,
            seedsPerPacket: this.seedsPerPacket.current.value,
        }
        this.props.onUpdateSeed(seed)

    }
    render() {
       // console.log(this.props.history.location.state.seedsList.seedId)
       console.log(this.props)
        const{seedId}= this.props.history.location.state!==undefined?this.props.history.location.state.seedsList:0
        const disableUpdate= this.props.history.location.state!==undefined?false:true
        const disableAdd= this.props.history.location.state!==undefined?true:false

       // console.log(disable,seedId)
        return (
            <div className="background" style={{backgroundImage:"url(./img1.jpg)"}}>
               <div className="container" style={{paddingTop:"30px"}}>
                   <div className="grid">
                       <div>
                        <input type="text" ref={this.commonName}  id="seedcommonname" placeholder="Seed Common Name" />
                        </div>
                        <div>
                        <input type="text" ref={this.bloomTime}  id="seedbloomTime" placeholder="Bloom" />
                        </div>
                       <div>
                        <input type="text" ref={this.watering}  id="seedwatering" placeholder="Seed Watering Details" />

                       </div>
                       <div>
                        <input type="text" ref={this.difficultyLevel}  id="difficultyLevel" placeholder="Difficulty Level" />

                       </div>
                       <div>
                        <input type="text" ref={this.temperature}  id="temperature" placeholder="temperature " />

                       </div>
                       <div>
                        <input type="text" ref={this.typeOfSeeds}  id="typeofseeds" placeholder="Type of Seed" />

                       </div>
                       <div>
                        <input type="text" ref={this.seedDescription}  id="seeddescription" placeholder="Seed Description" />

                       </div>
                       <div>
                        <input type="number" ref={this.seedStock}  id="seedstock" placeholder="Seed Stock" />

                       </div>
                       <div>
                        <input type="number" ref={this.seedCost}  id="seedcost" placeholder="Seed Cost" />

                       </div>
                       <div>
                        <input type="number" ref={this.seedsPerPacket}  id="seedsperpacket" placeholder="Seeds Per Packet" />

                       </div>


                   </div>
                    {/* <div className="mb-3 add-seed">
                        <input type="number" ref={this.id} pattern="[0-9]+" className="form-control" id="seedid" placeholder="Seed ID" />
                    </div> */}
                    <div className="mb-4 add-seed" style={{marginLeft:"10px"}}>
                    </div>
                    <div className="mb-4 add-seed" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-seed" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <div className="mb-4 add-employee" style={{marginLeft:"10px"}}>
                    </div>

                    <button type="button" disabled={disableAdd} onClick={this.add.bind(this)} className="btn btn-success add-button" >Add</button>
                    <button type="button" disabled={disableUpdate} onClick={this.update.bind(this,seedId)} className="btn btn-success add-button" style={{marginLeft:"10px"}}>Update</button>
                    <br/>
                </div>

                <div className={(this.props.returnedMessage === '') ? '' : "alert "} role="alert">
                    {this.props.returnedMessage}
                </div>  
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        returnedMessage: state.returnedMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddSeed: (seed) => {
            dispatch(actionCreators.addSeed(seed))
        },
        onUpdateSeed: (id, newSeedObject) => {
            dispatch(actionCreators.updateSeed(id, newSeedObject))
        },
        clearState: () => {
            dispatch(actionCreators.clearState())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddSeed))
