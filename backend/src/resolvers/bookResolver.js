const { PrismaClient } = require("@prisma/client");
const { Mutation } = require("./authorResolver");
const prisma = new PrismaClient();

module.exports = {
  Query: {
    books: () =>
      prisma.book.findMany({
        include: { author: true },
      }),
    book: (_, { id }) =>
      prisma.book.findUnique({
        where: { id },
        include: {
          author: true,
        },
      }),
  },

  Mutation: {
    createBook: (_, { title, authorId }) =>
      prisma.book.create({
        data: { title, authorId },
      }),
  },

  Book: {
    author: (parent) =>
      prisma.author.findUnique({
        where: {
          id: parent.authorId,
        },
      }),
  },
};
