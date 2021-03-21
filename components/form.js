import React from 'react';
import { selectDate } from "../store/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Form = ({ state: { sDate }, selectDate }) => {
  const day = sDate && days[sDate.getDay()]
  const month = sDate && months[sDate.getMonth()]

  return (
    <>
      <div className='form'>
        <span className='form-close' onClick={() => selectDate(null)}>X</span>
        <div className='form-month'>
          <h3 className='form-month_title'>Month</h3>
          <input className='form-month_input' value={month} onChange={() => {}}/>
        </div>
        <div className='form-day'>
          <h3 className='form-day_title'>Day</h3>
          <input className='form-day_input' value={day} onChange={() => {}}/>
        </div>
      </div>
      <div className='eclipse-background'></div>
    </>
  )
}


const mapStateToProps = state => ({ state: state.store });

const mapDispatchToProps = dispatch => bindActionCreators({ selectDate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);