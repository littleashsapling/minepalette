import React, { Component } from 'react'
import api from '../api'
import { Form, Button } from 'react-bootstrap';

class BlocksInsert extends Component {
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
            gravity: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputNameSpace = async event => {
        const nameSpace = event.target.value
        this.setState({ nameSpace })
    }
    handleChangeInputColor = async event => {
        const color = event.target.value
        this.setState({ color })
    }
    handleChangeBlastResistance = async event => {
        const blastResistance = event.target.value
        this.setState({ blastResistance })
    }
    handleChangeLuminant = async event => {
        const luminant = event.target.value
        this.setState({ luminant })
    }
    handleChangeTransparent = async event => {
        const transparent = event.target.value
        this.setState({ transparent })
    }
    handleChangeFlammable = async event => {
        const flammable = event.target.value
        this.setState({ flammable })
    }
    handleChangeGravity = async event => {
        const gravity = event.target.value
        this.setState({ gravity })
    }

    handleOnChange = (event) => {
        const file = event.target.files[0];
        this.setState({ image: file });

    }
    handleIncludeBlock = async (event) => {
        event.preventDefault()
        if (!this.state.image) {
            alert("Image? Helllooo")
            return
        }

        const { name,
            image,
            nameSpace,
            color,
            blastResistance,
            luminant,
            transparent,
            flammable,
            gravity } = this.state
        const arrayColors = color.split(',')
        const payload = {
            image,
            name,
            nameSpace,
            color: arrayColors,
            blastResistance,
            luminant,
            transparent,
            flammable,
            gravity
        }

        await api.insertBlock(payload).then(res => {
            window.alert('Block')
            this.setState({
                image: '',
                name: '',
                nameSpace: '',
                color: '',
                blastResistance: '',
                luminant: '',
                transparent: '',
                flammable: '',
                gravity: ''
            })

        })
    }

    render() {
        return (

            <Form
                onSubmit={this.handleIncludeBlock}
                method='post'
                encType='multipart/form-data'
                className='uploadform'>
                <Form.Group>
                    <Form.Label>Choose image to upload</Form.Label>
                    <Form.Control type='file' name='image' onChange={this.handleOnChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Block Name</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeInputName} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Block NameSpace</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeInputNameSpace} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Color</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeInputColor} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Blast Resistance</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeBlastResistance} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Luminant? Yes or No</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeLuminant} />
                </Form.Group>.
                <Form.Group>
                    <Form.Label>Transparent? Yes or No</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeTransparent} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Flammable? Yes or No</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeFlammable} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gravity? Yes or No</Form.Label>
                    <Form.Control as='textarea' rows='1' onChange={this.handleChangeGravity} />
                </Form.Group>
                <Button
                    variant='success'
                    type='submit'
                    className={`${!this.image ? 'submit-btn' : 'submit-btn'}`}>
                    Upload Block
                </Button>
            </Form>
        )
    }
}

export default BlocksInsert