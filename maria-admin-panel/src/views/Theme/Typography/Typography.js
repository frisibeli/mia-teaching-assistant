import React, { Component } from 'react';
import {
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';

import axios from 'axios'
// const api_url = 
class Typography extends Component {

  constructor(props) {
    super(props);
  }

  // uploadFile(){
  //     return axios.post(`/provider/fetch`, {
  //       serial_number: sn
  //     }
  //     // , {
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //     'Authorization': `Bearer ${token}`
  //     //   }
  //     // }
  //   )
  // }



  render() {
    return (
      <Row>
        <Col md="12">
          <p className="text center">Gain more knowledge by uploading a new file.</p>
          {/* <button className="add-file"><span>+</span></button> */}
        </Col>

        <Col md="6" xs="12" className="import-files">
          <div className="topics">
            <p>Select the topic of your text:</p>
            <select className="topic-select">
              <option>History</option>
              <option>Geography</option>
              <option>Law</option>
              <option>Physics</option>
              <option>Math</option>
              <option>Literature</option>
            </select>
          </div>

          <Input className="input-text" placeholder="Write your subject here" type="text" />
          <textarea className="input-text textarr" placeholder="Import your text here" />
          <button className="btn center add-file">Import</button>
        </Col>

      </Row>
    )
  }
}

export default Typography;
