import React, { PropTypes }  from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    check() {
        this.props.onCheck(this.props.index, !this.props.checked);
    }

    render() {
        return(
            <div>
                <input type="checkbox" checked={this.props.checked} onClick={this.check}/>
            </div>
        );
    }
}

Checkbox.defaultProps = {
    checked: false,
    onCheck: function () {}
};

Checkbox.propTypes = {
    index: PropTypes.number,
    checked: PropTypes.bool,
    onCheck: PropTypes.func
};

export default Checkbox;