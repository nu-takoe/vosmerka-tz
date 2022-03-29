import { Button, Divider, Modal } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
import './App.css';
import { useMachine } from '@xstate/react';
import stateMachine from './stateMachine';
import ReactPlayer from 'react-player';

function App() {
  const [state, send] = useMachine(stateMachine)
  const open = state.matches('open')

  return (
    <>
      <div className='play-window'>
        <Button type='primary' icon={<CaretRightOutlined />}  onClick={()=> send("TOGGLE_ON")}/>
      </div>
      <Modal visible={open} onCancel={() => send("TOGGLE_OFF")}>
        <ReactPlayer/>
      </Modal>
    </>
  );
}

export default App;
