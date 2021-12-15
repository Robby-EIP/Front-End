import React, {useState} from 'react';
import MyEditor from '../editor/editor';
import script from 'react';
import Navbar from '../navbar/navbar';
import {Form, Button, Label, Dropdown, DropdownButton} from 'react-bootstrap';
import Editor from "@monaco-editor/react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function RobotPageContainer() {

    const [collapsed, setCollapsed] = useState(false);
	const [theme, setTheme] = useState('vs-dark');
	const [lang, setLang] = useState('javascript');
	const [switchText, setSwitchText] = useState('Switch to Light Mode');

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

	function printValue() {
		console.log(document.getElementById('editor').firstElementChild.innerHTML );
	}

    return (
    <body id="body-pd">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<div id="screen">
		<div id="topbar">
			<Navbar/>
		</div>
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
                        <iframe src="https://player.twitch.tv/?channel=r0b0tarium&parent=localhost&muted=true" allowfullscreen="true">
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
						<DropdownButton id="dropdown-language" title="Chose Language">
							<Dropdown.ItemText>Language</Dropdown.ItemText>
							<Dropdown.Item as="button" onClick={() => changeLang('javascript')}>javascript</Dropdown.Item>
							<Dropdown.Item as="button" onClick={() => changeLang('cpp')}>cpp</Dropdown.Item>
							<Dropdown.Item as="button" onClick={() => changeLang('python')}>python</Dropdown.Item>
						</DropdownButton>
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
						<Editor id="editorPrompt" theme={theme} language={lang}/>
					</div>
					<div id="upload-submit">
						<div id="file-upload">
							<span id="upload-text">Upload your code here !</span>
							<Form.Group controlId="formFile">
  							  	<Form.Control type="file"/>
  							</Form.Group>
						</div>
						<div id="submit-button">
							<Button size="lg" variant="outline-success">Simulate</Button>
							<Button size="lg" variant="success" onClick={printValue}>Upload</Button>
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