import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to console or an error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
                    <div className="text-center max-w-lg">
                        <div className="mb-6">
                            <svg
                                className="w-24 h-24 mx-auto text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
                        <p className="text-gray-300 mb-6">
                            We encountered an unexpected error. Don't worry, it's not your fault!
                        </p>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mb-6 text-left bg-gray-800 p-4 rounded-lg">
                                <summary className="cursor-pointer text-sm font-semibold mb-2">
                                    Error Details (Development Only)
                                </summary>
                                <pre className="text-xs text-red-400 overflow-auto">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={this.handleReload}
                                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors font-semibold"
                            >
                                Reload Page
                            </button>
                            <a
                                href="/"
                                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors font-semibold inline-block"
                            >
                                Go Home
                            </a>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
