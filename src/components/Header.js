import React from 'react'

let MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export class Header extends React.Component {
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
        <i className="fa fa-arrow-circle-o-left fa-3x" aria-hidden="true"></i>
        <h2>{MONTHS[this.props.month]} {this.props.year}</h2>
        <i className="fa fa-arrow-circle-o-right fa-3x" aria-hidden="true"></i>
      </div>
    )
  }
}
