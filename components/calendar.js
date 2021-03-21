import {connect} from 'react-redux';
import { selectDate } from "../store/actions";

const Calendar = ({state, selectDate}) =>{
  const result = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = [];

    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
}


const mapStateToProps = state => ({
  state: state.store
});

const mapDispatchToProps = {
  selectDate: selectDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);