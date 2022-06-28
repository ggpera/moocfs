const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
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


export default Course