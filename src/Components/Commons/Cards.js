import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards(props) {
    return (
        <div>
            <Card style={{ width: '18rem', minHeight:'18rem'}}>
                <Card.Img variant="top" src={props.ImagePath} className='CardImageStyle' />
                <Card.Body>
                    <Card.Title className='card-Title' >{props.CardTitle}</Card.Title>
                    <Card.Text className='card-Content'>
                        {props.CardContent}
                    </Card.Text>
                    {props.isDemo && <Button className='card-Btn' variant="warning">{props.CardBtnContent}</Button>}
                </Card.Body>
            </Card>
        </div>
    )
}
