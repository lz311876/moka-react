import React, { PropTypes } from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="app">
                app
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;