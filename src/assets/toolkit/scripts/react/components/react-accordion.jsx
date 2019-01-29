import React, { Component } from "react";
import {render} from "react-dom";
import { CSSTransition } from 'react-transition-group';

var classNames = require( 'classnames' );

class ReactAccordion extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        }

        this.toggle = function(event) {
            event.preventDefault();
            this.setState({
                active: !this.state.active
            })
        }
        this.toggleKey = (e) => {
            if(e.key == 'Enter') {
                this.toggle(e);
            }
        }
    }

    render() {
        return (
            <div className="accordion">
                <div className={classNames(['panel', {active: this.state.active}])} >
                    <h4 className="panel__heading" role="tab" aria-expanded={this.state.active} onClick={this.toggle.bind(this)} tabIndex="0" onKeyPress={this.toggleKey.bind(this)}>
                        test
                    </h4>
                    <CSSTransition classNames="expand" unmountOnExit in={this.state.active} timeout={{enter: 0, exit:1000}}>
                    {(status) => (
                        <div className='panel__content' role="tabpanel">
                            <p>Test</p>
                        </div>
                    )}
                    </CSSTransition>
                </div>
            </div>
        );
    }
}

export default ReactAccordion;