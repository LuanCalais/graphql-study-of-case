const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  Query: {
    authors: () =>
      prisma.author.findMany({
        include: {
          books: true,
        },
      }),
    author: () =>
      prisma.author.findUnique({
        where: { id },
        include: { books: true },
      }),
  },

  Mutation: {
    createAuthor: (_, { name }) =>
      prisma.author.create({
        data: { name },
      }),
  },

  Author: {
    books: (parent) =>
      prisma.book.findMany({
        where: { authorId: parent.id },
      }),
  },
};
