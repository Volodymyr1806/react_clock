import React from 'react';

type State = {
  date: Date,
};

type Props = {
  name: number,
};

export class Clock extends React.Component<Props, State> {
  state = {
    date: new Date(),
  };

  timerId: NodeJS.Timeout = setInterval(() => {
    this.setState({
      date: new Date(),
    });
    // eslint-disable-next-line
    console.log(this.state.date.toLocaleTimeString());
  }, 1000);

  componentDidMount() {
    return this.timerId;
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      // eslint-disable-next-line no-console
      console.log('The Clock was renamed from oldName to newName');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  cancel = () => {
    clearInterval(this.timerId);
    // eslint-disable-next-line no-console
    console.log('cancelled');
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.date.toLocaleTimeString()}
        </p>
        <button type="button" onClick={this.cancel}>Cancel</button>
      </div>
    );
  }
}