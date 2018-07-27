import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';

class Title extends Component {
    //为什么不加上function
    handleClickOnTitle (word, e) {
        console.log(this, word)
    }

    render() {
        return(
            <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书 is good</h1>
        )
    }
}

class Header extends Component {
    render() {
        const isGoodWord = false;
        return(
            <div>
                <Title />
                <h2>This is Header.</h2>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return(
            <div>
                <h2>This is Main Content.</h2>
            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return(
            <h2>This is Footer.</h2>
        )
    }
}

class Index extends Component {
    render() {
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}


ReactDOM.render(
    <Index />,
    document.getElementById('root')
)
