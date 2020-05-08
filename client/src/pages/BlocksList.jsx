import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'


class BlocksList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            image: '',
            name: '',
            nameSpace: '',
            color: '',
            blastResistance: '',
            luminant: '',
            transparent: '',
            flammable: '',
            gravity: '',
            isLoading: false,
            blocks: []
        }
    }
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBlocks().then(res => {
            this.setState({
                blocks: res.data.blocks,
                isLoading: false
            })
        })
    }
    render() {
        const { blocks, isLoading } = this.state
        console.log('Blockslist->render->blocks', blocks)

        const columns = [
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true
            },
            {
                Header: 'NameSpace',
                accessor: 'nameSpace',
                filterable: true
            },
            {
                Header: 'Color',
                accessor: 'color',
                filterable: true
            },
            {
                Header: 'Blast Resistance',
                accessor: 'blastResistance',
                filterable: true
            },
            {
                Header: 'Luminant',
                accessor: 'luminant',
                filterable: true
            },
            {
                Header: 'Transparent',
                accessor: 'transparent',
                filterable: true
            }, {
                Header: 'Flammable',
                accessor: 'flammable',
                filterable: true
            }, {
                Header: 'Gravity',
                accessor: 'gravity',
                filterable: true
            }
        ]

        let showTable = true
        if (!blocks.length) {
            showTable = false
        }
        return (
            <table class='table'>

                <tr class='col-header'>
                    {columns.map(col => {
                        return (<td>{col.Header}</td>)
                    })}
                </tr>
                {blocks.map(block => {
                    return (
                        <tr class='col-content'>
                            {columns.map(col => {
                                return (<td>{block[col.accessor]}</td>)
                            })}
                        </tr>
                    )
                })}
            </table>
        )
    }
}

export default BlocksList