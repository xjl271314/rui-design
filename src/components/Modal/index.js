import React, { PureComponent } from 'react';
import Portal from '../Portal'
import './index.scss'

export default class Modal extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: props.visible
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
    
    handleClickButton=(e)=>{
        e.nativeEvent.stopImmediatePropagation() 
        if(this.state.showBox) return
        document.body.style.overflow = 'hidden'
        console.log('click button')
        this.setState({
            showBox:true
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
                <button onClick={this.handleClickButton}>点我显示弹窗</button>
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