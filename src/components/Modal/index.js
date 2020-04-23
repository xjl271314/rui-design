import React, { PureComponent } from 'react';
import Portal from '../Portal'
import './index.scss'

export class Modal extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showBox: props.visible || true
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickBody, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickBody, false)
    }

    handleClickBody = (e) => {
        document.body.style.overflow = 'visible'
        console.log('click body',e.target)
        this.setState({
            showBox:false
        })
    }
    
    clickModal=(e)=>{
        e.nativeEvent.stopImmediatePropagation() 
        console.log('click modal',e.target)
    }
    render() {
        const { showBox } = this.state 
        return (
            <Portal isBody>
                {showBox && <div 
                    className="modal"
                    onClick={this.clickModal}
                />
                }
                {this.props.children}
            </Portal> 
        )
    }
}   