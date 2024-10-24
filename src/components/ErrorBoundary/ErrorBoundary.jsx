import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  handleResetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? (
      <>
        <h1 style={{ textAlign: 'center', margin: '3rem', fontSize: '5rem' }}>
          Sorry.. there was an error
        </h1>
        <button
          className="button"
          type="button"
          onClick={this.handleResetError}
          style={{ margin: '4rem auto' }}
        >
          Reset Error
        </button>
      </>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
