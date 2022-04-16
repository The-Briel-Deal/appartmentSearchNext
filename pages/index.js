import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma.ts";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import ModalInside from "../components/ModalInside"
import { Box } from "@mui/system";

export async function getServerSideProps() {
  const post_table = await prisma.Post.findMany();
  for (const post of post_table) {
    const authorId = post.authorId;
    const author = await prisma.User.findUnique({
      where: {
        id: authorId,
      },
    });
    post.authorName = author.name;
  }
  return { props: { post_table: post_table } };
}

export default function Home(props) {
  const [open, setOpen] = React.useState(false);
  const [postTable, setPostTable] = React.useState(props.post_table);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Test App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello, I am the title 😎</h1>
        <Button onClick={handleOpen}>Press here to post new note</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalInside
            setPostTable={setPostTable}
            setOpen={setOpen}
          />
        </Modal>
        {postTable.map((item) => {
          return (
            <Card key={item.id} sx={{ my: 3, width: 600 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.content}</Typography>
                <br />
                <Typography variant="body2">-{item.authorName}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by&nbsp;
          <strong>Gabriel 🤓</strong>
        </a>
      </footer>
    </div>
  );
}
