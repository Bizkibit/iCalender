import React from 'react'
import {Header} from './Header'
import {Body} from './Body'

export class Icalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDate: this.props.selectDate
    }
    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  handleMonthChange(i) {
    let {selectDate} = this.state;
    selectDate = new Date(selectDate)
    debugger
    this.setState({
      selectDate: new Date(selectDate.getFullYear(), selectDate.getMonth()+i, selectDate.getDate())
    })
  }

  render()  {
    let {selectDate} = this.state;
    selectDate = new Date(selectDate)

    let date = selectDate.getDate();
    let day = selectDate.getDay();
    let month = selectDate.getMonth();
    let year = selectDate.getFullYear();
    let firstDay = new Date(year, month, 1)

    return (
      <div style={{ border: '15px black solid', width: '500px' }}>
        <Header month={month} year={year} onClick={this.handleMonthChange}/>
        <Body date={date} day={day} firstDay={firstDay.getDay()}/>
      </div>
    )
  }
}
