import React, { PropTypes }  from 'react';
import Checkbox from './Checkbox';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkArr: [],
            checkAllStatus: false
        };

        this.setStatus = this.setStatus.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.check = this.check.bind(this);
    }

    componentWillMount() {
        this.setStatus();
    }

    setStatus() {
        const data = this.props.data;
        data.job != null ? data.job.map((item, index) =>
           this.state.checkArr[index] = false
        ) : this.state.checkArr = [];
    }

    checkAll() {
        let checkArr = this.state.checkArr;
        let checkAllStatus = !this.state.checkAllStatus;

        checkArr.map((item, index) =>
            checkArr[index] = checkAllStatus
        );

        this.setState({
            checkArr: checkArr,
            checkAllStatus: checkAllStatus
        });
    }

    check(index, value) {
        let checkArr = this.state.checkArr;
        let checkAllStatus = true;
        checkArr[index] = value;

        checkArr.map((citem, cindex) => {
            if (!checkArr[cindex]) checkAllStatus = false
        });

        this.setState({
            checkArr: checkArr,
            checkAllStatus: checkAllStatus
        });
    }

    clearAll() {
        let checkArr = this.state.checkArr;

        checkArr.map((item, index) =>
            checkArr[index] = false
        );

        this.setState({
            checkArr: checkArr,
            checkAllStatus: false
        });

    }

    render() {
        const { checkArr, checkAllStatus } = this.state;
        const { data } = this.props;
        return(
                <div className="depart">
                    <div className="depart-title">
                        <input type="checkbox" checked={checkAllStatus} onClick={this.checkAll}/>

                        <label>{data.departmentName}</label>
                        <span className="num">{data.total}</span>
                    </div>
                    {
                        data.job.map((item, index) =>
                            <Checkbox key={index} index={index} checked={checkArr[index]} onCheck={this.check}>
                                <label>{item.title}</label>
                                <span className="num">{item.num}</span>
                            </Checkbox>
                        )
                    }
                </div>
        );
    }
}

CheckboxGroup.propTypes = {
    data: PropTypes.object
};


export default CheckboxGroup;