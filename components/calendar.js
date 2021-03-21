import { connect } from 'react-redux';
import { selectDate } from "../store/actions";
import { bindActionCreators } from 'redux'
import React, { useState, useEffect } from 'react';
import { datesGenerator } from 'dates-generator';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']


const Calendar = ({state: {sDate}, selectDate}) => {
  const date = new Date()
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }, [])

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }

  const onSelectDate = ({ year, month, date }) => {
    if (month === calendar.month) selectDate(new Date(year, month, date))
  }

  const getClassDay = ({ month, year, date }) => {
    const arr = []
    if (month !== calendar.month) arr.push('n-current')
    if (sDate && month === sDate.getMonth() && year === sDate.getFullYear() && date === sDate.getDate()) arr.push('active')

    return arr.join(' ')
  }

  const DaysWeek = () => {
    return (
      <table className='calendar-content_week'>
        <tbody>
        <tr className='calendar-content_week__day'>
          {days.map((day, i) => <td key={i}>{day}</td>)}
        </tr>
        </tbody>
      </table>
    )
  }

  return (
    <div className='home-calendar'>
      <div className='container'>
        <div className="calendar-month">
          <div className='calendar-month_switch' onClick={onClickPrevious}>
            &lt;
          </div>
          <div className='calendar-month_text'>
            {months[calendar.month]} {calendar.year}
          </div>
          <div className='calendar-month_switch' onClick={onClickNext}>
            &gt;
          </div>
        </div>
        <div className='calendar-content'>
          <table className='calendar-content_days'>
            <tbody>
            {dates.length > 0 && dates.map((week) => (
              <tr key={JSON.stringify(week[0])} className='calendar-content_days__day'>
                {week.map((each) => (
                  <td key={JSON.stringify(each)}
                      className={getClassDay(each)}
                      onClick={() => onSelectDate(each)}
                  >
                    {each.date}
                  </td>
                ))}
              </tr>
            ))}
            </tbody>
          </table>

          <table className='calendar-content_week'>
            <tbody>
            <tr className='calendar-content_week__day'>
              {days.map((day, i) => <td key={i}>{day}</td>)}
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({ state: state.store });

const mapDispatchToProps = dispatch => bindActionCreators({ selectDate }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);


// const Calendar = ({ state: { sDate }, selectDate }) => {
//
//   return (
//     <div className='home-calendar'>
//       <div className='container'>
//         <div className="calendar-month">
//           <div className='calendar-month_switch' onClick={onClickPrevious}>
//             &lt;
//           </div>
//           <div className='calendar-month_text'>
//             {months[calendar.month]} {calendar.year}
//           </div>
//           <div className='calendar-month_switch' onClick={onClickNext}>
//             &gt;
//           </div>
//         </div>
//         <div className='calendar-content'>
//           <table className='calendar-content_days'>
//             <tbody>
//             {dates.length > 0 && dates.map((week) => (
//               <tr key={JSON.stringify(week[0])} className='calendar-content_days__day'>
//                 {week.map((each) => (
//                   <td key={JSON.stringify(each)}
//                       className={getClassDay(each)}
//                       onClick={() => onSelectDate(each)}
//                   >
//                     {each.date}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//             </tbody>
//           </table>
//           <DaysWeek/>
//         </div>
//       </div>
//     </div>
//   );
// }

