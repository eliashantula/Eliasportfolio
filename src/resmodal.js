import React, { Component } from 'react'
import { Button, Modal, OverlayTrigger, Popover, Tooltip, Nav, NavItem, Row, Col, FormGroup, FieldGroup, Checkbox } from 'react-bootstrap'
import Res from './resume.pdf'

export default class ResModal extends Component {

  constructor() {
    super();
    this.render.bind(this);
    this.state = {showModal: false}
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }


  render () {
   
   
    return (
      <div >
        
        <span onClick={this.open.bind(this)}>Resume</span>

        <Modal className="modal-container" dialogClassName="my-modal"   show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Body>
           <embed src={Res} style={{height: "95vw", width: "95vw", paddingTop: "0px", margin: "0px"}}/>
			<Button color="danger" size="lg" onClick={this.close.bind(this)}>Close</Button>
            
                 
             
         

           
             
            
         
     

          </Modal.Body>

         
        </Modal>
      </div>
    )
  }

}