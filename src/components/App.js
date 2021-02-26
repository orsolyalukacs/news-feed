import { Component } from 'react'
import './App.css'
import News from './News/News'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      techNews: {
        title: 'Tech News',
        query: 'top-headlines?sources=techcrunch&'
      },
      businessNews: {
        title: 'Business News',
        query: 'top-headlines?country=us&category=business&'
      },
      wsjNews: {
        title: 'WSJ News',
        query: 'everything?domains=wsj.com&'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <News news={this.state.techNews}/>
        <News news={this.state.businessNews}/>
        <News news={this.state.wsjNews}/>
      </div>
    );
  }
}

export default App;
