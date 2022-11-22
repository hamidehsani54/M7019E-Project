import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function GenericCard() {
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea href="/">
                <CardMedia
                    component="img"
                    height="140"
                    image=".\images\6e9.jpg"
                    alt="image not found"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Wheels
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Wheeels are everywhere and they are really cool
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default GenericCard;