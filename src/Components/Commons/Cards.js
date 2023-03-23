import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Cards(props) {
    useEffect(() => {
        const handleWindowResize = () => {
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      });

      const ScreenWidth = React.useMemo(()=>{
        return window.innerWidth
      },[window.innerWidth])
    return (
        <div className={`${props.classID}`} >
            <Card style={{ width: ScreenWidth<450 ? '16rem' : '18rem', minHeight:ScreenWidth<450 ? '15rem' : '18rem'}}>
                <Card.Img variant="top" src={props.ImagePath} className='CardImageStyle' />
                <Card.Body>
                    <Card.Title className='card-Title' >{props.CardTitle}</Card.Title>
                    <Card.Text className='card-Content'>
                        {props.CardContent}
                    </Card.Text>
                    {props.isDemo && <Button className='card-Btn animate__animated animate__shakeX animate__delay-5s animate__faster' variant="warning" onClick={props.ReadMorePressed} >{props.CardBtnContent}</Button>}
                </Card.Body>
            </Card>
        </div>
    )
}
