import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Home(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <Card
      outline
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 4,
      }}
    >
      <CardContent>
        <Grid container direction={"column"} spacing={2}>
            <Grid item>
                <Typography id="modal-modal-title" variant="h6" omponent="h2">
                    Feel free to submit in me 😉
                </Typography>
            </Grid>
            <Grid item>
                <TextField id="filled-basic" label="Title" variant="filled" margin="4"
                    value={title}
                    onChange={(event)=>{
                        setTitle(event.target.value)
                    }}
                />
            </Grid>
            <Grid item>
                <TextField id="filled-basic" label="Content" variant="filled" margin="50px"
                    value={content}
                    onChange={(event)=>{
                        setContent(event.target.value)
                    }}
                />
            </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ alignItems: "right" }}>
        <Button variant="outlined">😛</Button>
      </CardActions>
    </Card>
  );
}
