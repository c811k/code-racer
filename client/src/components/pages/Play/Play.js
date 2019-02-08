import React from "react";

class Play extends React.Component {

    state=  {
        input: "State statet state"
    }
    
    render(){
        return (
            <div>
    
            
                <span>Sample Text</span>
                <input type="text" defaultValue={this.state.input}/>
    
                <br></br>
                <input type="text"/>
            </div>
        );
        
    }
    
    
}

export default Play;