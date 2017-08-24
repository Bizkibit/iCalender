import React from 'react'
import {Date2} from './Date2'

export class Body extends React.Component {
  constructor(props) {
    super(props)
    this.populateCalender = this.populateCalender.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  populateCalender() {
    let {selectDate} = this.props;
    let month = selectDate.getMonth();
    let year = selectDate.getFullYear();
    let firstDay = new Date(year, month, 1)
    let lastDay = new Date(year, month+1, 0)
    let dates = [];
    let tabledDate;
    for (let i = -firstDay.getDay(); i < lastDay.getDate(); i++)  {
      if (i<0) {
        tabledDate = (<td key={i}></td>)
      }
      else {
        tabledDate = (<Date2 key={i} date={new Date(firstDay.getFullYear(), firstDay.getMonth(), 1+i)}/>)
      }
      dates.push(tabledDate)
    }
    return dates;
  }

  createRow() {
    let dates = this.populateCalender();
    let rowArray = [];
    for(let i = 0; i <= 6; i++ ) {
    	rowArray.push(<tr key={i}>{dates.slice(i*7, (i+1)*7)}</tr>);
    }
    return rowArray;
  }

  render() {
    let style={ backgroundColor: '#1a5daf',
                color: 'skyblue',
                width: '500px',
                }
    return (
      <div style={style}>
        <table>
          <thead>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </thead>
          <tbody>
              {this.createRow()}
          </tbody>
        </table>
      </div>

    )
  }
}
