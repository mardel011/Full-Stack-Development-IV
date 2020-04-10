import React from 'react';
class College extends React.Component {
    render() { 
        return (
        <p> College <b>{this.props.name}</b> with address <b>{this.props.Location}</b> 
        </p>
        );
    }
}
 
export default College;