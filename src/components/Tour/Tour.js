import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
	state={
		showInfo: false,
	}
  render() {
		const { id, name, city, info, img} = this.props.tour
		const {removeTour} = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img
            src={img}
            alt=""
          />
					<span className="close-btn" onClick={() => {removeTour(id)}}>
						<i className="fas fa-window-close" />
					</span>
        </div>
				<div className="tour-info">
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h5>
						Info{" "}
						<span onClick={() => this.setState({showInfo: !this.state.showInfo})}>
							<i className="fas fa-caret-square-down" />
						</span>
					</h5>
				
				{this.state.showInfo &&	<p>
						{info}
					</p>}
				</div>
      </article>
    );
  }
}
