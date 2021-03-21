import { Navbar } from "../components/navbar";
import Form from "../components/form";
import Calendar from "../components/calendar";
import { connect } from "react-redux";

const Home = ({ state }) => {
  return (
    <Navbar>
      <div className='home'>
        <div className='home-text'>
          <h1 className='home-text_title'>
            Choose the day for the meeting
          </h1>
          <p className='home-text_subtitle'>
            We encourage you to book your appointment online. <br/> This will save you time.
          </p>
        </div>
        {state.sDate && <Form/>}
        <Calendar/>
      </div>
    </Navbar>
  )
}

const mapStateToProps = state => ({
  state: state.store
});

export default connect(mapStateToProps, null)(Home);