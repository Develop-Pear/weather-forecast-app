import React from "react";

class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }

    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if(this.state.hasError) {
            return this.props.fallback || <h1>Something went wrong</h1>
        }

        return this.props.children
    }

}

export default ErrorBoundary