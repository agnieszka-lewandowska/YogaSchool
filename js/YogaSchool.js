import React, { Component } from "react";
import ReactDOM from "react-dom";

// import background from "logo_1.png"

const navigationLinks = [
  {
    label: "Rozkład zajęć",
    link: "#rozkladzajec"
  },
  {
    label: "Kursy dla początkujących",
    link: "#kursy"
  },
  {
    label: "Zajęcia dla początkoujących",
    link: "#poczatkujacy"
  },
  {
    label: "Regulamin",
    link: "#regulamin"
  },
  {
    label: "Cennik",
    link: "#cennik",
  },
  {
    label: "Kontakt",
    link: "#kontakt",
  }
]

// console.log(navigationLinks);


class Header extends Component {
  constructor(props) {
    super(props)
  }



  render() {

    const listElementsStyles = {
      padding: "20px"
    }

    const headerNavigation = this.props.links.map((element, index) => (
      <li style={listElementsStyles} key={index}>
        <a href={element.link}>{element.label}</a>
      </li>
    ))
    console.log(headerNavigation);

    const liststyles = {
      listStyleType: "none",
      display: "flex",
      justyfyContent: "space-between",

    }



    const navStyles = {
      display: "flex",
      justyfyContent: "center",
    }

    return (
      <div className="header">
        <nav style={navStyles} className="header">
          <div className="logo" >
            <h1>{this.props.logo.title}</h1>
          </div>
          <ul style={liststyles} className="navigation-list">
            {headerNavigation}
          </ul>
        </nav>
      </div>
    )
  }
}

class App extends Component {

  render() {
    let logoObject = {
      title: "yogaschool",
      src: ""
    }

    return <Header links={navigationLinks} logo={logoObject} />
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
