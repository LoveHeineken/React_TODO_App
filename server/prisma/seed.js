import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function seed() {
  await prisma.task.deleteMany()
  // await prisma.user.deleteMany()
  // const ichiro = await prisma.user.create({ data: { name: "Ichiro" } })
  // const jiro = await prisma.user.create({ data: { name: "Jiro" } })

  await prisma.task.create({
    data: {
      content: "test1",
      // userId: ichiro.id,
    },
  })

  await prisma.task.create({
    data: {
      content: "test2",
      // userId: ichiro.id,
    },
  })

  await prisma.task.create({
    data: {
      content: "test3",
      // userId: jiro.id,
    },
  })

  await prisma.task.create({
    data: {
      content: "test4",
      // userId: jiro.id,
    },
  })
}

seed()
