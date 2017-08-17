import React from 'react'
import {Header} from './Header'
import {Body} from './Body'

let MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export class Icalender extends React.Component {

  render()  {
    let {selectDate} = this.props;
    selectDate = new Date(selectDate)

    let date = selectDate.getDate();
    let day = selectDate.getDay();
    let month = MONTHS[selectDate.getMonth()];
    let year = selectDate.getFullYear();

    return (
      <div style={{ border: '15px black solid', width: '500px' }}>
        <Header month={month} year={year}/>
        <Body date={date} day={day}/>
      </div>
    )
  }
}
