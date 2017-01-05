import React from 'react';
import ReactDOM from 'react-dom';
import CheckboxGroup  from '../components/CheckboxGroup';
import data from '../data.json';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.data
        };
        this.clearAll = this.clearAll.bind(this);
    }

    clearAll() {
        let refs = this.refs;
        Object.keys(refs).map(item=> refs[item].clearAll());
    }

    render() {
        const { data } = this.state;
        return(
            <div>
                <h3 className="example-title">招聘职位</h3>
                <span className="clearAll" onClick={this.clearAll}>清空</span>
                {
                    data.map((item, index) =>
                        <CheckboxGroup data={item} key={index} ref={index}/>
                    )

                }
            </div>
        );
    }
}

export default Example;