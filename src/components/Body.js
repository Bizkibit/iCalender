import React from 'react'
import {Date} from './Date'

export class Body extends React.Component {
  constructor(props) {
    super(props)
    this.populateCalender = this.populateCalender.bind(this);
    this.createRow = this.createRow.bind(this);
  }

  populateCalender() {
    let {firstDay} = this.props;
    let kir = [];
    for (let i=-firstDay; i <=30; i++ ) {
      let kos = i < 0 ? (<td key={i}></td>) : (<Date date={i+1} key={i}/>)
      kir.push(kos)
    }
    return kir;
  }

  createRow() {
    let kir = this.populateCalender();
    let kun = [];
    for(let i = 0; i <= 6; i++ ) {
    	kun.push(<tr key={i}>{kir.slice(i*7, (i+1)*7)}</tr>);
    }
    return kun;
  }

  render() {
    let style={ backgroundColor: '#1a5daf',
                color: 'skyblue',
                width: '500px',
                height: '500px'
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
