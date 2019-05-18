import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

function InlineDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <label htmlFor="meet-date" className="new-meet-create__label-date">
        Date
      </label>
      <DatePicker
        className="new-meet-create__meet-date"
        onlyCalendar
        variant="inline"
        value={selectedDate}
        onChange={handleDateChange}
        InputProps={{
         disableUnderline: true,
        }}
        format="MMM d yyyy"
      />
    </MuiPickersUtilsProvider>
  )
}

export default InlineDatePicker;
