import React from 'react'

export default function About(props) {
  // const [myStyle,setmyStyle]=useState({
  //       color : "black",
  //       backgroundColor : "white",
  //       border : "1px solid white"
  //   })
  let myStyle={
    color:props.mode==='light'?'white':"black",
    backgroundColor:props.mode==='light'?'black':"white",
    border:props.mode==='light'?'2px solid black':"2px solid white",
  }
  return (
    <div className='container' >
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Analyze the text 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
      <div className="accordion-body" >
        Textutil gives you a way to analyze your text quickly and effectively.Be it word count,character count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       This website is free to use for all users
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        Our website support by all Browser like Google, FireFox, Brave ,etc.
      </div>
    </div>
  </div>
</div>
</div>
  )
}