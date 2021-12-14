import React, {useState} from 'react';
import MyEditor from '../editor/editor';
import script from 'react';
import Navbar from '../navbar/navbar';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function RobotPageContainer() {

    const [collapsed, setCollapsed] = useState(false);

    function on() {
        setCollapsed(!collapsed);
    }

    return (
    <body id="body-pd">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<div id="screen">
		<div id="topbar">
			<Navbar/>
		</div>
		<div id="container">
			<div id="sidebar">
                <ProSidebar collapsed={collapsed}>
                  <Menu iconShape="square">
                    <MenuItem onClick={on}>Dashboard</MenuItem>
                    <SubMenu title="Components">
                      <MenuItem>Component 1</MenuItem>
                      <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                  </Menu>
                </ProSidebar>
			</div>
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

					</div>
					<div id="editor">
						<MyEditor/>
					</div>
					<div id="upload-submit">
						<div id="file-upload">
							<Form.Group controlId="formFile">
  							  <Form.Control type="file" />
  							</Form.Group>
						</div>
						<div id="submit-button">
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