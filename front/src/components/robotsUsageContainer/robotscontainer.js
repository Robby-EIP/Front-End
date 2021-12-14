import Editor from '@monaco-editor/react';
import react from 'react';
import MyEditor from '../editor/editor';
import script from 'react';

function RobotPageContainer() {
    return (
    <body id="body-pd">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	<div id="screen">
		<div id="topbar">
			<nav id="logo-brand">
				<a id="logo" href="#">
				    ROBBY
				</a>
			</nav>
		</div>
		<div id="container">
			<div id="sidebar">
				<div className="l-navbar" id="nav-bar">
					<i className='bx bx-menu' id="header-toggle"></i>
					<nav className="nav">
						<div>
							<div className="nav_list">
								<a href="#" className="nav_link active">
									<i className='bx bx-grid-alt nav_icon'></i>
									<span className="nav_name">Dashboard</span>
								</a> 
								<a href="#" className="nav_link">
									<i className='bx bx-user nav_icon'></i>
									<span className="nav_name">Users</span>
								</a>
								<a href="#" className="nav_link">
									<i className='bx bx-message-square-detail nav_icon'></i>
									<span className="nav_name">Messages</span>
								</a>
								<a href="#" className="nav_link">
									<i className='bx bx-bookmark nav_icon'></i>
									<span className="nav_name">Bookmark</span>
								</a>
								<a href="#" className="nav_link">
									<i className='bx bx-folder nav_icon'></i>
									<span className="nav_name">Files</span>
								</a>
								<a href="#" className="nav_link">
									<i className='bx bx-bar-chart-alt-2 nav_icon'></i>
									<span className="nav_name">Stats</span>
								</a>
							</div>
						</div>
						<a href="#" className="nav_link">
							<i className='bx bx-log-out nav_icon'></i>
							<span className="nav_name">SignOut</span>
						</a>
					</nav>
				</div>
			</div>
			<div id="content">
				<div id="twitch">
					<div id="stream">
						<div id="player">
                        <iframe
                            src="https://player.twitch.tv/?channel=r0b0tarium&parent=localhost&muted=true"
                            height="400"
                            width="1280"
                            allowfullscreen="true">
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
						
					</div>
				</div>
			</div>
		</div>
	</div>
  </body>
    );
}

export default RobotPageContainer;