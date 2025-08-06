//displays the course title passed in via props
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

//displays the name of the course and the number of exercises
const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

//loops through the parts array and renders a Part component for each index
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => (
        // key={index} ensures each child in the list has a unique identifier for React
        <Part key={index} part={part} />
      ))}
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {/* reduce() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */}
        {parts.reduce((sum, part) => sum + part.exercises, 0)}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
