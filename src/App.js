import { Button, Divider, Modal } from 'antd';
import { ArrowsAltOutlined, CaretRightOutlined, PauseCircleOutlined, ShrinkOutlined } from '@ant-design/icons'
import './App.css';
import { useMachine } from '@xstate/react';
import stateMachine from './stateMachine';
import ReactPlayer from 'react-player';

function App() {
  const [state, send] = useMachine(stateMachine)
  const open = state.matches('open')
  const size = state.context.size
  const play = state.context.play

  console.log(state.context)

  const styles = {
    mini: {
      top: 10,
    }
  }

  return (
    <>
      <div className='play-window'>
        <Button type='primary' icon={<CaretRightOutlined />} onClick={() => send("TOGGLE_ON")} />
      </div>

      <Modal visible={open} onCancel={() => send("TOGGLE_OFF")} footer={false} bodyStyle={{paddingTop: 50, width: '100%', height: '70%'}} style={!size && styles.mini} width={size ? "1080px" : "480px"}>

        <ReactPlayer playing={play} width='100%' height={size ? "720px" : "360px"} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

        <Divider />

        <div style={{ textAlign: 'right', width: '100%', }}>
          <Button type='primary' icon={size ? <ShrinkOutlined /> : <ArrowsAltOutlined />} onClick={() => send("SIZE")} />
          <Button shape='circle' style={{ marginLeft: 10 }} icon={<PauseCircleOutlined />} onClick={() => send("MODE")} />
        </div>

      </Modal>
    </>
  );
}

export default App;
