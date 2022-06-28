const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = ({ course }) => <h1>{course.name}</h1>

const Content = ({ parts }) => 
    <>
        <Part
            part={parts[0]} 
        />
        <Part
            part={parts[1]} 
        />
        <Part
            part={parts[2]} 
        />      
        <Part
            part={parts[3]}
        />
    </>


const Part = ({ part }) => 
    <p>
        {part.name} {part.exercises}
    </p>

const Total = ({ parts }) => {
    const total = parts.reduce( (sum, part) => {
        return sum + part.exercises
    }, 0)

    return <h4>Total exercises: {total}</h4>
}

export default Course