import React from 'react'
import { Card } from 'react-bootstrap'

const Image = ({ id }) => {
    return (
        <Card className="image" >
            I am block
            <Card.Img
                variant="top"
                src={`http://localhost:3000/api/block/${id}`}
                alt="Image"
            />
        </Card>
    )
}

export default Image;