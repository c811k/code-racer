import React from "react";

function PromptMenu() {
    return(
        <div className="btn-group btn-block" role="group">
            <button id="prompts" type="button" className="alert-info btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PROMPT
            </button>
            <div className="dropdown-menu" aria-labelledby="prompts">
            <a className="dropdown-item">forLoop</a>
            <a className="dropdown-item">fizzBuzz</a>
            <a className="dropdown-item">expressServer</a>
            <a className="dropdown-item">newObj</a>
            </div>
        </div>
    );
}

export default PromptMenu;