import React, { PropTypes }  from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
    }

    check() {
        this.props.onCheck(this.props.index, !this.props.checked);
    }

    render() {
        return(
            <div className="check-box">
                <input type="checkbox" name="check-box" checked={this.props.checked} onClick={this.check} />
                {this.props.children}
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
    onCheck: PropTypes.func,
    children: PropTypes.array
};

export default Checkbox;