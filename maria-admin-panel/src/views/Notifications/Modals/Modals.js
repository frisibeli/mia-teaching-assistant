import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import axios from 'axios'
import { API_URL } from '../../../constants';
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
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      docs: []
    };
  }

  componentDidMount() {
    this.fetchDocs();
  }

  fetchDocs() {
    return axios.get(`${API_URL}/document`).then((response) => {
      let responseDictionary = {};
      response.data.forEach(doc => {
        if (doc.topic in responseDictionary) {
          responseDictionary[doc.topic].push(doc);
        } else {
          if (doc.topic) {
            responseDictionary[doc.topic] = [];
            responseDictionary[doc.topic].push(doc)
          }
        }
      });
      this.setState({ docs: responseDictionary });
    })
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
          {
            Object.keys(this.state.docs).map((topic, i) => {
              return <Col key={i} xs="12" sm="12" md="8">
                <Card>
                  <CardHeader className="main-topic" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                    <i className="fa fa-align-left"></i><strong>{topic}</strong>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.collapse}
                  >
                    <CardBody>
                      {
                        this.state.docs[topic].map((doc, i) => {
                          return <Col key={i} className="inline" xs="12" sm="4" md="4">
                            <Card>
                              <CardHeader>
                                <strong>{doc.title}</strong>
                              </CardHeader>
                              <CardBody>
                                <p className="elipse">
                                  {doc.content}
                                </p>
                                <button className="add-file edit"><i className="fa fa-edit"></i></button>
                                <button className="add-file delete"><i className="fa fa-minus-circle"></i></button>
                              </CardBody>
                            </Card>
                          </Col>
                        })
                      }
                    </CardBody></Collapse></Card>
              </Col>
            })
          }
        </Row>

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
