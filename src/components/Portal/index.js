import { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portal extends Component {
  static defaultProps = {
    isBody: false
  }

  constructor(props) {
    super(props)
    this.el = document.createElement('div');
    this.container = props.container || document.body
  }

  componentDidMount() {
    this.container.appendChild(this.el);
  }

  componentWillUnmount() {
    this.container.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.props.isBody ? document.body : this.el
    )
  }
}