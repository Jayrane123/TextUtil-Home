import React, { useState } from "react";

const foo = (text) => {
  return {
    // wordCount: !!text ? text.trim().split(" ").filter(item => !!item).length : 0,
    length: text.length,
  }
}

export default function TextBox(props) {
  const handleonchange = (event) => {
    setText(event.target.value);
    //console.log("Uppercase was click")
  };
  const handle = () => {
    setText("");
    //console.log("we are changing")
  };
  function getVoices() {
    let voices = speechSynthesis.getVoices();
    if (!voices.length) {
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  // const [word,setword]=useState(null)
  // // const wordCount= ()=>{
  // //   let wrd=text.split(" ").length()
  // //   let lett =text.length
  // // }
  // const showword =()=>{
  //   if(!text){
  //     setword(text.split(" ").length())
  //   }
  // }
  // setword
  function speak(text, voice, rate, pitch, volume) {
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume;
    speakData.rate = rate;
    speakData.pitch = pitch;
    speakData.text = text;
    speakData.voice = voice;
    speakData.lang = "en";

    speechSynthesis.speak(speakData);
  }
  const handlespeak = (event) => {
    if ("speechSynthesis" in window) {
      let voices = getVoices();
      let rate = 1,
        volume = 1,
        pitch = 1;
      let newtex = text;
      setText(newtex);
      let texts = newtex;
      speak(texts, voices[1], rate, pitch, volume);
      props.showalert("Reading text here", "success");
      document.title= "TextUtil-SpeakText "
      // setTimeout(()=>{ // speak after 2 seconds
      //   rate = 0.5; pitch = 1.5; volume = 0.5;
      //   texts = newtex;
      //   speak(texts, voices[10], rate, pitch, volume );
      // }, 3000);
    } else {
      console.log(" Speech Synthesis Not Supported 😞");
    }
  };
  const handlecopy=()=>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard","success");
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces remove","success");
  }
  const handleupclick = () => {
    // console.log("Uppercase was click" + text)
    const newstate = text.toUpperCase();
    setText(newstate);
    props.showalert("Change into Uppercase", "success");
    document.title= "TextUtil-UpperCase "
    // setText("you have click on HandleupClick")
  };
  const handleloclick = () => {
    // console.log("Lowercase was click" + text)
    const newstate = text.toLowerCase();
    setText(newstate);
    props.showalert("Change into Lowercase", "success");
    document.title= "TextUtil-LowerCase "
    // setText("you have click on HandleupClick")
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "blue" }} >
        <h1>Convert Text</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            onClick={handle}
            style={{
              backgroundColor: props.Mode === "dark" ? "#453bb2" : "white",
              color: props.Mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleupclick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleloclick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handlespeak}>
            speak the text
          </button>
          <button className="btn btn-primary mx-2" onClick={handlecopy}>
            copy text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "blue" }}
      >
        <h1>Your add summery</h1>

        <p>
          {/* word {foo(text).wordCount} and letter {foo(text).length} */}
          word {text.split(/\s+/).filter(item=>{return item.length!==0}).length} and letter {foo(text).length}
        </p>
        {/* <p>{}</p> */}
        <h3>Word read Speed</h3>
        <p>{0.008 * text.split(" ").filter(item=>{return item.length!==0}).length} minutes read</p>

        <h3 className="container mx-2">Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
