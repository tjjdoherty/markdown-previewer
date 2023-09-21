import React, { useState } from 'react';
import './App.css';
import {marked} from 'marked';

function App() { 
    return (
      <div className="container">
        <div className="row">
          <div className="top">
            <h1 className="text-center">Markdown Previewer</h1>
          </div>
        </div>
        <UserInput />
      </div>
    )
}

function UserInput() {
  const [markdown, setMarkdown] = useState(`# Here is an example Markdown heading element\n ## You can edit or completely replace what's below\n <br> \n\n ### I used the hash key for a heading element and double / triple hash for h2/h3 respectively. \nHere's some *italics*, **bold text** and ~~strikethrough~~! \n\n 
    A list for you:\n\n * Here is a link to some [news](https://www.bbc.com/news). \n * Here is some inline code: \`print('hello world')\`\n * A block quote: \n > "I think, therefore I am"\n \n \n 
    Here's a code block... \n * And it would not be the internet without a cat picture:\n \n ![Cat Picture](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thesprucepets.com%2Fall-about-tabby-cats-552489&psig=AOvVaw3OE5iGTojIje3NfC7lPUD_&ust=1685982804087000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDk58KFqv8CFQAAAAAdAAAAABAF)`); 
  
  const updatePreview = (e) => {
    setMarkdown(
      e.target.value
    );
  }
  
  const createMarkup = () => {
    return { __html: marked(markdown)}
  }
  
// BELOW: updatePreview is meant to take a parameter (e) but doesn't need to  with onChange 
// Does it assume the change is (e)?

  console.log(markdown);
  return (
    <div className="body">
      <div className="col-md-7">
        <h2>Enter Text</h2>
        <textarea className="editor" 
            id="editor" 
            placeholder={markdown}
            value={markdown} 
            onChange={updatePreview}/>
      </div>
      <div className="col-md-7">
        <h2>Output Markdown</h2>
        <div className="preview" id="preview" dangerouslySetInnerHTML={createMarkup()}>
        </div>
      </div>  
    </div>
    )
}

export default App;
