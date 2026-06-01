const { ApolloServer } = require("apollo-server")
const typeDefs  = require("./db/schema")
const resolvers = require("./db/resolvers")

//server
const server = new ApolloServer({
    typeDefs,
    resolvers
})

//start the Server

server.listen().then(({url})=>{
    console.log(`Server Ready ... Url::${url}`)
})