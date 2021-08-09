import React from "react";

const Courses = (props) => {
  return (
    <div>
      {props.courses.map((course) => {
        return (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  
  const Total = (props) => {
  
    let totalEx = props.course.parts.reduce((sum, part) => (sum + part.exercises),0)
    
  
    return (
      <div>
        <p>
          <b>Total of {totalEx} exercises</b>
        </p>
      </div>
    )
  }

export default Courses;