import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        {this.renderValues()}
        </React.Fragment>
    );
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  renderValues() {
    if (this.state.tags.length === 0) return "Please add tags";
    return (
      <div>
        {/*     <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>
          CLICK
        </button>
        <button className="btn btn-danger btn-sm m-4" onClick={() => this.props.onDelete(this.props.id)} >DEL</button>
      </div>
    );
  }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
