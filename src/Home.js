import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import { Steps, Card } from 'antd';

const { Step } = Steps;

function Home() {
  return (
    <div className="App">

      <Card title="Default size card" extra={<a href="/aa">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>

      <Steps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </Steps>
    </div>
  );
}

export default Home;
