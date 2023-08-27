import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CragCard({ title, description, region, town, id, type }) {
    const navigate = useNavigate()
    let imgUrls = ["https://images.unsplash.com/photo-1516592673884-4a382d1124c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "https://images.unsplash.com/photo-1586887507406-3a1fde6dea04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80", "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1844&q=80", "https://images.unsplash.com/photo-1682685796186-1bb4a5655653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1570030289513-f44af3cd0944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80", "https://images.unsplash.com/photo-1612555909781-8fb3094ca82b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80", "https://images.unsplash.com/photo-1597698639798-32d54e443f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"]
    let randomImgNum = Math.floor(Math.random() * imgUrls.length)
    return (
        <div className='card'>
            <Card onClick={() => navigate('/crags/' + id)} sx={{ minWidth: '50vvw', maxWidth: '50vw', borderRadius: "20px", mb: '40px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={imgUrls[randomImgNum]}
                        alt="climbing rope"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Divider />
                        <Typography gutterBottom variant="h6" component="div">
                            {type}
                        </Typography>
                        <Divider />
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Divider />

                        <Typography variant="body2" color="text.secondary">
                            {town} {region}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default CragCard