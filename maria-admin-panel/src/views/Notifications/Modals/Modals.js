import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
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

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      openTextarea: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected
    });
  }

  render() {

    return (
      <div className="animated fadeIn">

        <Row className="float">
          {/* <Col> */}
          <Col xs="12" sm="6" md="6">
            <Card className="blue">
              <CardHeader>
                History
              </CardHeader>
              <CardBody>
                History lectures from my first History class.
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="6">
            <Card className=" blue">
              <CardHeader>
                Geography
              </CardHeader>
              <CardBody>
                My Geography book.
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="6">
            <Card className="blue">
              <CardHeader>
                English
              </CardHeader>
              <CardBody>
                My English classes.
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Col md="12">
          <p className="blue-text">Gain more knowledge by uploading a new file.</p>
          <button className="add-file"><span>+</span></button>
        </Col>

        <div className="aside-right">
          <iframe width="350" height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/e20cf5c1-941d-4d11-a3a8-d594a04bed81">
          </iframe>
        </div>

      </div>
    )
  }
}

export default Dashboard;
