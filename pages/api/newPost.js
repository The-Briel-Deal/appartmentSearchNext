// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../lib/prisma.ts";

export default function handler(req, res) {
  const body = req.body
  const title = body.title
  const content = body.content
  const authorId = "cl21cqrsy0043ugwf9e0xwobb"
  const published = true
  console.log(body)
  prisma.Post.create({
    data: {
      title: title,
      content: content,
      published: published,
      authorId: authorId
    }
  }).then((resp)=>{console.log(resp)})
  res.status(200).send("success")
}