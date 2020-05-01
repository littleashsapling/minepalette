import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import style from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class BlocksList extends Component{
    constructor(props){
        super(props)
        this.state = {
            blocks: [],
            columns:[],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading:true})

        await api.getAllBlocks().then(blocks=>{
            this.setState({
                blocks: blocks.data.data,
                isLoading:false,
            })
        })
    }

    render(){
        const {blocks, isLoading} = this.state
        console.log('TCL: BlocksList -> render-> blocks',blocks)

        const columns =[
            {
                Header
            }
        ]

        return(
         <div>
            <p>In this page you'll see the list of blocks</p>
        </div>
        )
    }
}

export default BlocksList