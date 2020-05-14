import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Menu from './components/Menú/Menu';

// Components
// import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const data = [
  {
    'category':'PROGRAMMING',
    'title':'Do No Use + to join String in Python',
    'description':'A comparison of the approaches for joining string in Python, usin + and join() method.',
    'author':'Christopher Tao in Towards Data Science',
    'publicationDate':'May 5',
    'readTime':'5 min read'
  },
  {
    'category':'POPULAR ON MEDIUM',
    'title':'4 New GitHub Products That Will Change How You Code',
    'description':'Exciting announcements from the first virtual GitHub Satellite event',
    'author':'Benjamin Soyka in Better Programming',
    'publicationDate':'May 7',
    'readTime':'3 min read'
  },
  {
    'category':'Gadgets',
    'title':'An Update to Your Fitbit Could Detect a Covid-19 Symptom',
    'description':'You might have a full-featured pulse oximeter sitting on your wrist right now',
    'author':'Thomas Smith in OneZero',
    'publicationDate':'May 13',
    'readTime':'7 min read'
  },
  {
    'category':'PROGRAMMING',
    'title':'Implementing Zoom and Pan in Just 69 Lines of Javascript',
    'description':'Lightweight, open for extension, simple to use',
    'author':'Kacper Wdowik in Better Programming',
    'publicationDate':'Feb 4',
    'readTime':'5 min read'
  }
]


export default class App extends Component {

_renderCards() {
  return data.map(({
    category,
    title,
    description,
    author,
    publicationDate,
    readTime
  }) => {
    return (
      <Card 
        category={category}
        title={title}
        description={description}
        author={author}
        publicationDate={publicationDate}
        readTime={readTime}
      />
    )
  })
}

render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bootcamp white - <strong>React</strong>
        </h1>
      </header>
      <div className='cards-container'>
        {this._renderCards()}
      </div>
      {/* <Clock /> */}
    </div>
  )
}
}


