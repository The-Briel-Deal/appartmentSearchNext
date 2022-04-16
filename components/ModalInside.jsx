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
import axios from "axios";
export default function Home(props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const submitPost = ()=>{
      axios.post('/api/newPost', {title: title, content: content}).then((resp)=>{
          console.log(resp)
          setTitle('')
          setContent('')
          props.setOpen(false)
          axios.get('/api/getPost').then((resp)=>{
              console.log(resp)
              props.setPostTable(resp.data)
          })
      })
  }
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
        <Button onClick={submitPost} variant="outlined">😛</Button>
      </CardActions>
    </Card>
  );
}
