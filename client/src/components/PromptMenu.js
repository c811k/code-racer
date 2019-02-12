import React from "react";

function PromptMenu() {
    return(
        <div className="btn-group btn-block" role="group">
            <button id="prompts" type="button" className="alert-info btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PROMPT
            </button>
            <div className="dropdown-menu" aria-labelledby="prompts">
            <button className="dropdown-item">forLoop</button>
            <button className="dropdown-item">fizzBuzz</button>
            <button className="dropdown-item">expressServer</button>
            <button className="dropdown-item">newObj</button>
            </div>
        </div>
    );
}

export default PromptMenu;