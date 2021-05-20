import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Homepage from './pages/Homepage';
import PeoplePage from './pages/PeoplePage';

import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Container>
        <Route exact path='/' component={Homepage} />
        <Route path='/people/:id' component={PeoplePage} />
      </Container>
    </Router>
  );
}

export default App;
