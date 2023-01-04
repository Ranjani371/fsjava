import React from 'react'

function ReportTable() {
  return (
    <div>
        <h1>Report</h1>
        <table>
            <thead>
                <tr>
                    <th>employeeId</th>
                    <th>Name</th>
                    <th>Absent Date</th>
                    <th>Leave Type</th>
                </tr>
            </thead>
        </table>

        <button type='submit' className='submit'>
                 SEND
                </button>

    </div>
  )
}

export default ReportTable