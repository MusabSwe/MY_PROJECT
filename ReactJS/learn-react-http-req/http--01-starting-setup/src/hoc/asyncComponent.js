import React, { Component } from "react";

// function with paramter of a function
// that return class with a render method
const asyncComponent = (importComponent) => {

    return class extends Component {
        state = {
            component: null,
        }

        componentDidMount() {
            // importcomponent should be function refernce
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }

        render() {
            const C = this.state.component;
            // render dynamic component
            return C ? <C {...this.props} /> : null;
        }
    }

}

export default asyncComponent;