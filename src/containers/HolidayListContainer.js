import React, { Component } from "react";
import { getAllHolidays } from "pascua";
import HolidaysList from "../components/HolidayList";

class HolidaysListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holidays: this.getHolidays(this.props.selectedYear)
    };
  }
  getHolidays = year =>
    getAllHolidays(year).sort((a, b) => a.date.localeCompare(b.date));
  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
    if (this.props.selectedYear !== prevProps.selectedYear) {
      this.setState({ holidays: this.getHolidays(this.props.selectedYear) });
    }
  }
  render() {
    return <HolidaysList holidays={this.state.holidays} />;
  }
}

export default HolidaysListContainer;
