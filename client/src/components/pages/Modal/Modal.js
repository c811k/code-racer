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
  
    handleShow = () => {
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
      const prompts= ["SWEET! ", "AWESOME! ", "GOOD JOB! ", "WOW, THAT WAS FAST! "];

      return (
        <Modal show={this.state.show} onHide={this.handleClose} {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Body>
            <h5 className="text-center">
            {`${prompts[Math.floor(Math.random() * (4))]}
            YOUR TIME WAS : ${timeFormat(this.state.userTime *425)} SECONDS`}
            </h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary border-0" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
  

  export default Example;