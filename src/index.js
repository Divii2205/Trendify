import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import './styles/tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="flex items-center justify-center min-h-screen bg-soft-beige">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blush-pink mb-4">
              Oops! Something went wrong.
            </h1>
            <p className="text-pastel-blue">
              We're sorry, but an unexpected error occurred. 
              Please try refreshing the page or contact support.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create React root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with Error Boundary
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);