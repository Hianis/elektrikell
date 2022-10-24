import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


function App() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'High price', value: '1' },
    { name: 'Low Price', value: '2' },
    
  ];

  return (
    <Container>
      <Row>
        <Col><h3>Elektrikell</h3>
        </Col>
      </Row>
      <Row>
        <Col>Status</Col>
        <Col>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
               type="radio"
                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
               name="radio"
               value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
                {radio.name}
              </ToggleButton>
        ))}
          </ButtonGroup>
        </Col>
        <Col> Hind </Col>
      </Row>
      <Row>   </Row>
      <Row> 
        <Col>  Järgmine tiputund on </Col>
      </Row>
      <Row> 
        <Col>  9:00st 10:00ni </Col>
      </Row>
      <Row> 
        <Col>  Siis on kilovatt-tunni hind 27.01 senti, mis on 3% kallim kui praegu </Col>
      </Row>
      <Row> 
        <Col>  oovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa ühisele eesmärgile alandada tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust. Loe lähemalt </Col>
      </Row>
    </Container>
    
  );
}

export default App;
