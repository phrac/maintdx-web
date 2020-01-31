import React, { Component } from 'react';
import { NavLink } from 'reactstrap';

class AssetDetailsTabParts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeout: 300,
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/work_orders/`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ a: data })
            })
            .catch(console.log)
    }

    render() {
        return (
                 <div>This is a test</div>
        );
    }
}

export default AssetDetailsTabParts
