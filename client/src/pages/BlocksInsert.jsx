import React, { Component } from 'react'
import {beginAddImage} from '../actions/images'
import api from '../api'



class BlocksInsert extends Component{

    constructor(props) {
        super(props)

        this.state = {
            imageData: '',
            name: '',
            nameSpace: '',
            id:'',
            tags:'',
            color:'',
            blastResistance:'',
            luminant:'',
            flammable:'',
            gravity:'',
            location:'',
            versionPC:'',
            bedrock:'',
            versionConsole:'',
            
        }
    }
    render() {
        return(
            <div>
                <p>In this page we'll see the form to add blocks</p>
            </div>
        )
    }
}

export default BlocksInsert