const { gql } = require("apollo-server")

const typeDefs = gql`

    type Courses {
        title: String
    }
        
    type Technology {
        technology: String
    }

    input CoursesInput{
        technology: String
    }

    type Query {
        obtainCourses(input: CoursesInput!): [Courses] 
        obtainTechnology: [Technology]
    }

`;

module.exports = typeDefs;