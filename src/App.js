import React, { Component } from 'react';
import Header from './components/Header';
import News from './components/News';
import Form from './components/Form'

class App extends Component {
  
  state = {
    news: []
  }

  componentDidMount(){
    this.getNews()
  }

  getNews = (category = 'general') => {
    
    let key = "8c61100b2550420cbabd18af1a43388d"
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`

    fetch(url)
      .then(respuesta => {
        return respuesta.json()  
      })
      .then(news => {
        this.setState({
          news: news.articles
        })
      })
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header 
          titulo = "News Portal" 
        />

        <div className="container white contenedor-noticias">
          <Form 
            getNews = {this.getNews}
          />
          <News 
            news = {this.state.news}
          />
        </div>
      </div>
    );
  }
}

export default App;
