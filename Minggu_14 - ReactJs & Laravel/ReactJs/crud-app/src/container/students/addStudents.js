import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

export default class AddStudent extends Component {
  render() {
    return (
      <div>
        <Button
          className="mb-4"
          color="primary"
          style={{ float: "right" }}
          onClick={this.props.toggleNewStudentModal}
        >
          Add Student
        </Button>
        <Modal
          isOpen={this.props.newStudentModal}
          toggle={this.props.toggleNewStudentModal}
        >
          <ModalHeader toggle={this.props.toggleNewStudentModal}>
            Add new Student
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="first_name">First Name</Label>
              <Input
                id="first_name"
                name="first_name"
                className="my-3"
                value={this.props.newStudentData.first_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last Name</Label>
              <Input
                id="last_name"
                name="last_name"
                className="my-3"
                value={this.props.newStudentData.last_name}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                className="my-3"
                value={this.props.newStudentData.email}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                className="my-3"
                value={this.props.newStudentData.phone}
                onChange={this.props.onChangeAddStudentHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addStudent()}>
              Add
            </Button>
            <Button
              color="secondary"
              onClick={this.props.toggleNewStudentModal}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
