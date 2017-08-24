import React from 'react'
import {Header} from './Header'
import {Body} from './Body'

export class Icalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectDate: ''
    }
    this.handleMonthChange = this.handleMonthChange.bind(this)
  }

  componentWillMount() {
    this.setState({
      selectDate: new Date()
    });
  }

  handleMonthChange(i) {
    let {selectDate} = this.state;
    this.setState({
      selectDate: new Date(selectDate.getFullYear(), selectDate.getMonth()+i, selectDate.getDate()),
    })
  }

  render()  {
    let {selectDate} = this.state;

    return (
      <div style={{ border: '15px black solid', width: '500px' }}>
        <Header month={selectDate.getMonth()} year={selectDate.getFullYear()} onClick={this.handleMonthChange}/>
        <Body selectDate={selectDate}/>
      </div>
    )
  }
}
