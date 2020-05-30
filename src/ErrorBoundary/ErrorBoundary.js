import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    ComponentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if(this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
            // Accessing props in class components requires this in front of the prop just like state.
            // This children is the component which will be wrapped inside ErrorBoundary.
            // When there is no error, it will return this, in case of error inside the wrapped component the first
            // if will be true and the error message will be displayed accordingly.
        }
    }
}

export default ErrorBoundary;
