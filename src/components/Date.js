import React from 'react'

export class Date extends React.Component {
  render() {
    return(
      <td style={{color: `${this.props.color}`}}>{this.props.date}</td>
    )
  }
}
