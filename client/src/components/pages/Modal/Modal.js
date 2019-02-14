import React from "react";
import {Modal, Button} from 'react-bootstrap';
import timeFormat from "../../utils/timeFormat";

class Example extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
  
      this.state = {
        show: false,
        userTime: ""
        
      };
    }
  
    handleClose = () => {
       this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    componentDidUpdate() {
        if (this.props.finished){
            this.setState({
                userTime: this.props.userTime,
                show: true
            })
        }
    }
  
    render() {

    const prompts= ["Sweet!", "Awesome!", "Good Job!", "Wow, that was fast!"];

      return (

          <Modal show={this.state.show} onHide={this.handleClose} {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
            <Modal.Body>{`${prompts[Math.floor(Math.random() * (4))]} Your time was : ${timeFormat(this.state.userTime *425)} seconds`}</Modal.Body>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
          </Modal>
      );
    }
  }
  
  

  export default Example;