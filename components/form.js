import React from 'react';
import { selectDate } from "../store/actions";
import { connect } from "react-redux";

export const Form = ({state, selectDate}) =>{
  console.log(selectDate)
  return(
    <>
      <div className='form'>
        <span className='form-close' onClick={() => selectDate(null)}>X</span>
        <div className='form-month'>
          <h3 className='form-month_title'>Month</h3>
          <input className='form-month_input'/>
        </div>
        <div className='form-day'>
          <h3 className='form-day_title'>Day</h3>
          <input className='form-day_input'/>
        </div>
      </div>
      <div className='eclipse-background'></div>
    </>
  )
}


const mapStateToProps = state => ({
  state: state.store
});

const mapDispatchToProps = {
  selectDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);