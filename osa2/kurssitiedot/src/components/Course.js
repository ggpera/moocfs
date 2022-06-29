const Header = ({ course }) => <h2>{course.name}</h2>

const Content = ({ parts }) => 
    parts.map(part =>
        <Part key={part.id} part={part} />
    )

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

const Course = ({ course }) => {
    
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course