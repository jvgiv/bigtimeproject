const { GraphQLServer } = require('graphql-yoga')

// 1



// 2 

const resolvers = {
    Query: {
        info: () => `This is the API here to use`,

        feed: () => links,
    },
    Mutation: {
        // update: (parent, args) => {

        // },
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            links.push(link)
            return link
        }
    },

    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url
    }
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))