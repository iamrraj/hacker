import React from "react";
import ErrorMessage from "./ErrorPage";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ error: error.message || "Unexpected error" });
  }

  render() {
    if (this.state.hasError) {
      // Error path
      return (
        <div className="justify-center text-white items-center">
          {!process.env.NODE_ENV || process.env.NODE_ENV === "development" ? (
            <>
              <h2>Something went wrong</h2>
              <details style={{ whiteSpace: "pre-wrap" }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.error}
              </details>
            </>
          ) : (
            <ErrorMessage />
          )}
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;
