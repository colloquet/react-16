import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // report to Sentry or whatever
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '1rem',
            background: '#f5f6f7',
            color: '#4d5054',
          }}
        >
          <h3 style={{ marginTop: 0 }}>[!] Ops, Something went wrong.</h3>
          <p>Errors have been reported.</p>
          <button onClick={() => this.setState({ hasError: false })}>Retry</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
