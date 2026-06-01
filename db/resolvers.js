//Mock data
const courses = [
    { title: "JavaScript Moderno", technology: "Frontend" },
    { title: "React desde cero", technology: "Frontend" },
    { title: "Node.js API REST", technology: "Backend" },
    { title: "GraphQL con Apollo", technology: "Backend" },
    { title: "TypeScript esencial", technology: "Fullstack" },
    { title: "MongoDB para desarrolladores", technology: "Base de datos" },
    { title: "Docker para principiantes", technology: "DevOps" },
    { title: "Git y GitHub profesional", technology: "Herramientas" },
    { title: "CSS Grid y Flexbox", technology: "Frontend" },
    { title: "Python automatización", technology: "Backend" },
  ];

//Resolver


const resolvers ={
    Query:{
        obtainCourses:(_,{input},context, info )=> {
             
            const response =courses.filter(item => item.technology.toLowerCase() === input.technology.toLowerCase() )
            
            return response
        },
    }
}

module.exports = resolvers