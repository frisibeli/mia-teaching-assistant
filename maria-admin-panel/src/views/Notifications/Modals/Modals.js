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
  Table,
  Collapse
} from 'reactstrap';

const brandPrimary = '#20a8d8';
const brandSuccess = '#4dbd74';
const brandInfo = '#63c2de';
const brandWarning = '#f8cb00';
const brandDanger = '#f86c6b';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed',
      fadeIn: true,
      timeout: 300
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row className="float">
          <h1 className="grad">Subjects</h1>
          <Col xs="12" sm="12" md="8">
            <Card>
              <CardHeader className="main-topic" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                <i className="fa fa-align-left"></i><strong>History</strong>
              </CardHeader>
              <Collapse
                isOpen={this.state.collapse}
                onEntering={this.onEntering}
                onEntered={this.onEntered}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <CardBody>
                  <Col className="inline" xs="12" sm="4" md="4">
                    <Card>
                      <CardHeader>
                        <strong>Lecture1</strong>
                      </CardHeader>
                      <CardBody>
                        <p>
                          History lectures from my first History class.
                         </p>
                        <button className="add-file edit"><i className="fa fa-edit"></i></button>
                        <button className="add-file delete"><i className="fa fa-minus-circle"></i></button>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col className="inline" xs="12" sm="4" md="4">
                    <Card>
                      <CardHeader>
                        <strong>Lecture2</strong>
                      </CardHeader>
                      <CardBody>
                        <p>
                          History lectures from my first History class.
                         </p>
                        <button className="add-file edit"><i className="fa fa-edit"></i></button>
                        <button className="add-file delete"><i className="fa fa-minus-circle"></i></button>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col  className="inline" xs="12" sm="4" md="4">
                    <Card>
                      <CardHeader>
                        <strong>Lecture3</strong>
                      </CardHeader>
                      <CardBody>
                        <p>
                          History lectures from my first History class.
                         </p>
                        <button className="add-file edit"><i className="fa fa-edit"></i></button>
                        <button className="add-file delete"><i className="fa fa-minus-circle"></i></button>
                      </CardBody>
                    </Card>
                  </Col>
                </CardBody>
              </Collapse>
            </Card>

          </Col>
        </Row>

        {/* <Col md="12">
          <p className="blue-text">Gain more knowledge by uploading a new file.</p>
          <button className="add-file"><span>+</span></button>
        </Col> */}

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
