import React from 'react';

class SbComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'world' };
  }

  render() {
    return (
      <div className="hello-form">
        <input type="text" onChange={this.onChange.bind(this)} />
      </div>
    );
  }

  onChange(e) {
    this.setState({ name: e.target.value });
  }
}

export default SbComponent;
