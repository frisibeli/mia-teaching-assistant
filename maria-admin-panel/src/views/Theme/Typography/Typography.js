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
import { API_URL } from '../../../constants';

class Typography extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      topic: "history",
      success: false
    }
  }

  uploadFile(title, content, topic) {
    return axios.post(`${API_URL}/document`, {
      title: title,
      content: content,
      topic: topic
    }).then((response)=>{
      console.log(response)
      this.setState({success: true});
    })
  }


  render() {
    return (
      <Row>
        <Col md="12">
          <p className="text center">Gain more knowledge by uploading a new file.</p>
          {/* <button className="add-file"><span>+</span></button> */}
        </Col>

        <Col md="6" xs="12" className={!this.state.success ? "import-files" : "hide"}>
          <div className="topics">
            <p>Select the topic of your text:</p>
            <select onChange={(e)=>{this.setState({topic: e.target.value})}} className="topic-select">
              <option value="history">History</option>
              <option value="geography">Geography</option>
              <option value="law">Law</option>
              <option value="physics">Physics</option>
              <option value="math">Math</option>
              <option value="literature">Literature</option>
            </select>
          </div>

          <Input className="input-text" onChange={(e)=>{this.setState({title: e.target.value})}} placeholder="Write your subject here" type="text" />
          <textarea className="input-text textarr" onChange={(e)=>{this.setState({content: e.target.value})}} placeholder="Import your text here" />
          <button onClick={()=>{this.uploadFile(this.state.title, this.state.content, this.state.topic)}} className="btn center add-file">Import</button>
        </Col>


        <Col md="12" className={this.state.success ? "sucess-story" : "hide"}>
          <h1 className="succ">You have successfully uploaded your file.</h1>
          <button onClick={()=>{this.setState({success: false})}} className="btn center add-file">Close</button>
        </Col>

      </Row>
    )
  }
}

export default Typography;
