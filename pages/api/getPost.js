import prisma from "../../lib/prisma.ts";

export default async function handler(req, res) {
    prisma.Post.findMany().then(async (resp)=>{
        for (const post of resp) {
            const authorId = post.authorId;
            await prisma.User.findUnique({
              where: {
                id: authorId,
              },
            }).then((author)=>{
                post.authorName = author.name;
            })
          }
          console.log(resp)
          res.status(200).json(resp)
    })
}