import React, { Component } from 'react'
import './App.scss'
// import CardList from '../components/CardList'
import Card from '../components/Card'
import ListGroup from '../components/ListGroup'
import Top10 from '../components/Top10'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fad)

class App extends Component {
  constructor() {
    super()
    this.state = {
      world: [],
      countries: []
    }
  }

  componentDidMount() {
    const url = 'https://api.covid19api.com/summary';

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({world: data['Global'], countries: data['Countries']}));
  }

  render() {
    const { world, countries } = this.state;
    return (
      <div>
        <div className="App">
          <div className="container">
            <div className="jumbotron">
              <h1>Covid Updates</h1>
            </div>
            <Card
              header="Global Stats"
              cardStyle="mb-4"
            >
              <p><FontAwesomeIcon icon={['fad', 'globe-europe']} size="6x" /></p>
              <ListGroup list={world} />
            </Card>
            <div className="row">
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Confirmed"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'lungs-virus']} size="6x" /></p>
                  <Top10 list={countries} value={'TotalConfirmed'} />
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Confirmed Today"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'viruses']} size="6x" /></p>
                  <Top10 list={countries} value={'NewConfirmed'} />
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Deaths"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'book-dead']} size="6x" /></p>
                  <Top10 list={countries} value={'TotalDeaths'} />
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Deaths Today"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'tombstone-alt']} size="6x" /></p>
                  <Top10 list={countries} value={'NewDeaths'} />
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Recoveries"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'virus-slash']} size="6x" /></p>
                  <Top10 list={countries} value={'TotalRecovered'} />
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  header="Top 10 Most Recoveries Today"
                  cardStyle="mb-4"
                >
                  <p><FontAwesomeIcon icon={['fad', 'user-nurse']} size="6x" /></p>
                  <Top10 list={countries} value={'NewRecovered'} />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
