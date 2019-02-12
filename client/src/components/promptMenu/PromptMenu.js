import React from "react";
import "./promptmenu.css";

function PromptMenu(props) {
    return(
        <div className="btn-group btn-block mb-1" role="group">
            <button id="prompts" type="button" className="alert-info btn btn-info btn-lg dropdown-toggle border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PROMPT
            </button>
            
            <div className="dropdown-menu col-md-12" aria-labelledby="prompts">
                <button className="dropdown-item" value="forLoop" onClick={props.handlePrompt}>forLoop</button>
                
                <button className="dropdown-item" value="fizzBuzz" onClick={props.handlePrompt}>fizzBuzz</button>
                
                <button className="dropdown-item" value="expressServer" onClick={props.handlePrompt}>expressServer</button>
                
                <button className="dropdown-item" value="newObj" onClick={props.handlePrompt}>newObj</button>

                <button className="dropdown-item" value="factorial" onClick={props.handlePrompt}>factorial</button>

                <button className="dropdown-item" value="reversedArray" onClick={props.handlePrompt}>reversedArray</button>

                <button className="dropdown-item" value="size" onClick={props.handlePrompt}>size</button>

                <button className="dropdown-item" value="tree" onClick={props.handlePrompt}>tree</button>

                <button className="dropdown-item" value="linkedList" onClick={props.handlePrompt}>linkedList</button>

                <button className="dropdown-item btn-block" value="hashFunction" onClick={props.handlePrompt}>hashFunction</button>
            </div>
        </div>
    );
}

export default PromptMenu;