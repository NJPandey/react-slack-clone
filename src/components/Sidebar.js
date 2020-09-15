import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="user-profile">
                    <div>
                        <img alt="txt" />
                    </div> 
                    <div>Ronald</div>
                </div>
                <div className="user-channel"></div>
            </div>
        );
    }
}

export default Sidebar;