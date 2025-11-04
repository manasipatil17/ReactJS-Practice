import React from 'react'

function App() {

  const name='manasi';
  const n1=10;
  const n2=20;
  const student={name:"ram", age:12, class:"7th"};
  const names =['aa','bb','cc'];

  function fun(){
    return "keep studying"
  }
  const fun2=()=>{
    return "wakeup early"
  }
  const fun3=()=>{
    alert("button clicked")
  }
  return (
    <>
    <h1>hiiiii {name}</h1>
    <h2>Addition : {n1+n2}</h2>
    <hr />
    <h2>student info : </h2>
    Name : {student.name}<br/>
    Age :{student.age} <br/>
    class : {student.class} <br/>

    <hr />
    <ul>
      {
        names.map((name)=>
        (
          <li>{name}</li>
        ))
      }
    </ul>
    <hr />
    <h2>{fun()}</h2>
    <hr/>
    <h2>{fun2()}</h2>

    <button onClick={fun3}>submit</button>

</>
  )
}

export default App;

