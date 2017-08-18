import React from 'react'

let MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let {target} = e;
    target.preventDefault;
    if (target.id === 'increase')
      {this.props.onClick(1)}
    else
      {this.props.onClick(-1)}
  }

  render()  {
    let style={backgroundColor: 'skyblue',
          display: 'flex',
          justifyContent: `space-around`,
          alignItems: 'center',
          width: '500px',
          color: 'white'
        }

    return(
      <div style={style}>
        <i id='decrease' className="fa fa-arrow-circle-o-left fa-3x" aria-hidden="true" onClick={this.handleClick}></i>
        <h2>{MONTHS[this.props.month]} {this.props.year}</h2>
        <i id='increase' className="fa fa-arrow-circle-o-right fa-3x" aria-hidden="true" onClick={this.handleClick}></i>
      </div>
    )
  }
}
