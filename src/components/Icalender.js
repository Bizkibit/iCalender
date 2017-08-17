import React from 'react'
import {Header} from './Header'
import {Body} from './Body'

export class Icalender extends React.Component {

  render()  {
    let {selectDate} = this.props;
    selectDate = new Date(selectDate)

    let date = selectDate.getDate();
    let day = selectDate.getDay();
    let month = selectDate.getMonth();
    let year = selectDate.getFullYear();
    let firstDay = new Date(year, month, 1)

    return (
      <div style={{ border: '15px black solid', width: '500px' }}>
        <Header month={month} year={year}/>
        <Body date={date} day={day} firstDay={firstDay.getDay()}/>
      </div>
    )
  }
}
