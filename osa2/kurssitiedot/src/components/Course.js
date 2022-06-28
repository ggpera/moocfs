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
    </>


const Part = ({ part }) => 
    <p>
        {part.name} {part.exercises}
    </p>

const Total = ({ parts }) => 
    <h4>
        Total exercises: {parts[0].exercises + 
                          parts[1].exercises + 
                          parts[2].exercises}
    </h4>

export default Course