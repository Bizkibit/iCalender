import React from 'react'


export class Date2 extends React.Component {
  render() {
    let {date} = this.props;
    let currentDate = new Date();
    let color = 'white';
    if (date < currentDate) {
      if (date.toDateString() === currentDate.toDateString()) {
        color = 'red';
      } else {
        color = 'grey'
      }
    }

    return(
      <td style={{color: color}}>{date.getDate()}</td>
    )
  }
}
