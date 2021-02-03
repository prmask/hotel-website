import React, { Component } from "react"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
import Title from "./Title"

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda!",
      },
      {
        icon: <FaHiking />,
        title: "free hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shttle van",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda!",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda!",
      },
    ],
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services
