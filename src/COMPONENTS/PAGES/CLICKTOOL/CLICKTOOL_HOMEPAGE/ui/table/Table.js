import React, { Component } from 'react'
import ReactTable from 'react-table'
import './table.css'
import './uiTable.css'

// @params {Array} data
// @params {Array} columns

class Table extends Component {
 
  render() {
  
    return (
      <div>

        { /*  table start */ }
        <ReactTable
          data={this.props.data}
          columns={this.props.columns}
          showPagination={false}
          minRows={1}
        />
        { /*  table end */ }

      </div>
    )
  }
}

export default Table