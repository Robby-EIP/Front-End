import React, { useState, useRef } from 'react';
import MyEditor from '../editor/editor';
import script from 'react';
import Navbar from '../navbar/navbar';
import { Form, Button, Label, Dropdown, DropdownButton, Alert } from 'react-bootstrap';
import Editor from "@monaco-editor/react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { getRobots, sendRobotBlockCode, sendRobotRawCode } from '../../utils/utils';

function RobotPageContainer() {

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [lang, setLang] = useState('javascript');
  const [switchText, setSwitchText] = useState('Switch to Light Mode');
  const [editorValue, setEditorValue] = useState('');
  const [robot, changeRobot] = useState('');
  const [availableRobots, setAvailableRobots] = useState([]);
  const [isBlock, setIsBlock] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [variant, setVariant] = useState('danger');
  const [isBlockLoop, setIsBlockLoop] = useState(false);
  const willMount = useRef(true);

  function changeLang(lang) {
    setLang(lang);
  }

  function on() {
    setCollapsed(!collapsed);
  }

  function changeTheme() {
    setSwitchText(theme === 'vs-light' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    setTheme(theme === 'vs-dark' ? 'vs-light' : 'vs-dark');
  }

  async function uploadCode() {
    // console.log(document.getElementById('editor').firstElementChild.innerHTML );
    if (robot === '') {
      setShowError(true);
      setErrorMessage('Please select a robot before uploading code');
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    if (editorValue.length === 0) {
      setShowError(true);
      setErrorMessage('Please enter some code / bloks before uploading');
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    if (isBlock == true) {
      let res = await sendRobotBlockCode(robot, editorValue, isBlockLoop);
      if (res === true) {
        setShowError(true);
        setVariant('success');
        setErrorMessage('Code uploaded successfully');
        setTimeout(() => {
          setShowError(false);
          setVariant('danger');
        }, 3000);
      } else {
        setShowError(true);
        setVariant('danger');
        setErrorMessage('Error while uploading code');
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
      return;
    }
    console.log("editorValue", editorValue);
    if (editorValue.length > 0) {
      let res = await sendRobotRawCode(robot, editorValue);
      if (res === true) {
        setShowError(true);
        setVariant('success');
        setErrorMessage('Code uploaded successfully');
        setTimeout(() => {
          setShowError(false);
          setVariant('danger');
        }, 3000);
      }
      else {
        setShowError(true);
        setVariant('danger');
        setErrorMessage('Error while uploading code');
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
      return;
    }
  }

  if (willMount.current) {
    (async function name() {
      let robots = await getRobots();
      console.log('robots === ', robots);
      setAvailableRobots(robots);
      console.log('here');
      console.log("availableRobots", availableRobots);
      willMount.current = false;
    })();
    willMount.current = false;
  }

  return (
    <body id="body-pd">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
      <div id="screen">
        <div id="topbar">
          <Navbar />
        </div>
        <Alert variant={variant} show={showError} onClose={() => setShowError(false)} dismissible
          style={{
            right: "0", left: "0",
            marginRight: "auto", marginLeft: "auto",
            width: "20%", height: '10%', textAlign: 'center',
            marginTop: "auto", marginBottom: "auto", zIndex: '1000', position: 'fixed'
          }}>
          <Alert.Heading>{errorMessage}</Alert.Heading>
        </Alert>
        <div id="container">
          <ProSidebar collapsed={collapsed}>
            <Menu iconShape="square">
              <MenuItem onClick={on}>Dashboard</MenuItem>
              <SubMenu title="Components">
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
              </SubMenu>
            </Menu>
          </ProSidebar>
          <div id="content">
            <div id="twitch">
              <div id="stream">
                <div id="player">
                  <iframe src="https://player.twitch.tv/?channel=r0b0tarium&parent=localhost&muted=true" allowFullScreen={true}>
                  </iframe>
                </div>
              </div>
              <div id="chat">
                <iframe src="https://www.twitch.tv/embed/r0b0tarium/chat?parent=localhost">
                </iframe>
              </div>
            </div>
            <div id="code">
              <div id="options">
                <DropdownButton id="dropdown-language" title={(lang != '') ? lang : "Chose Language"}>
                  {/* <Dropdown.ItemText>Language</Dropdown.ItemText> */}
                  <Dropdown.Item as="button" onClick={() => changeLang('javascript')}>javascript</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => changeLang('cpp')}>cpp</Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => changeLang('python')}>python</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-language" title={(robot != '') ? robot : "Chose robot"}>
                  {
                    (availableRobots.length <= 0) ?
                      <Dropdown.Item>No robots available</Dropdown.Item>
                      :
                      availableRobots.map(robot => {
                        return <Dropdown.Item as="button" onClick={() => changeRobot(robot)}>{robot}</Dropdown.Item>
                      }, this)
                  }
                </DropdownButton>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Use Blocks"
                    onChange={() => setIsBlock(!isBlock)}
                  />
                </Form>
                <Form>
                  <Form.Check
                    type='switch'
                    id="custom-switch"
                    label="Loop code"
                    onChange={() => setIsBlockLoop(!isBlockLoop)}
                  />
                </Form>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={switchText}
                    onChange={changeTheme}
                  />
                </Form>
              </div>
              <div id="editor">
                <Editor id="editorPrompt" theme={theme} language={lang} value={editorValue} onChange={(value) => {
                  setEditorValue(value);
                }} />
              </div>
              <div id="upload-submit">
                <div id="file-upload">
                  <span id="upload-text">Upload your code here !</span>
                  <Form.Group controlId="formFile">
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
                <div id="submit-button">
                  <Button size="lg" variant="outline-success">Simulate</Button>
                  <Button size="lg" variant="success" onClick={uploadCode}>Upload</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default RobotPageContainer;