import React from 'react'

export class Date extends React.Component {
  render() {
    return(
      <td style={{color: 'red'}}>{this.props.date}</td>
    )
  }
}
