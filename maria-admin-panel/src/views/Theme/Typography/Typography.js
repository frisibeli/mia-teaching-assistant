import React, { Component } from 'react';
import {
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Table
} from 'reactstrap';
class Typography extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openTextarea: false
    };
  }


  render() {
    return (
      <Row>
        <Col md="12">
          <p className="text center">Gain more knowledge by uploading a new file.</p>
          {/* <button className="add-file"><span>+</span></button> */}
        </Col>

        <Col md="6" className="import-files">
          <input className="input-text" placeholder="Write your subject here" type="text" />
          <textarea className="input-text textarr" placeholder="Import your text here" />
          <button className="btn center add-file">Import</button>
        </Col>

      </Row>
    )
  }
}

export default Typography;
