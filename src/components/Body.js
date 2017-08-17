import React from 'react'
import {Date} from './Date'

export class Body extends React.Component {
  constructor(props) {
    super(props)
    this.populateCalender = this.populateCalender.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  populateCalender() {
    let {firstDay, date} = this.props;
    let dates = [];
    let tabledDate;
    for (let i=-firstDay; i <=30; i++ ) {
      if (i<0) {
        tabledDate = (<td key={i}></td>)
      }
      else if (i+1 < date) {
        tabledDate = (<Date date={i+1} key={i} color='grey'/>)
      }
      else if (i+1 === date) {
        tabledDate = (<Date date={i+1} key={i} color='red'/>)
      }
      else {
        tabledDate = (<Date date={i+1} key={i} color='white'/>)
      }
      // tabledDate = i < 0 ? (<td key={i}></td>) : (<Date date={i+1} key={i} />)
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
