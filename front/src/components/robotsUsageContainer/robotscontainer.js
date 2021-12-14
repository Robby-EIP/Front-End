import react from 'react';
import MyEditor from '../editor/editor';

function RobotPageContainer() {
    return (
        <>
            <h1>Robot Page Container</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '50%',
                height: '50%',
            }}>
                <MyEditor />
            </div>
        </>
    );
}

export default RobotPageContainer;