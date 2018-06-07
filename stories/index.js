import React from 'react';
import moment from 'moment'
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';
import DatePicker from "../src/components/myDatePicker/index";

//import stories
import Default from "./DatePicker_stories/Default";
import Portal from "./DatePicker_stories/Portal";
import WithClearButton from "./DatePicker_stories/WithClearButton";
import DateRangePicker from "./DatePicker_stories/DateRangePicker";
import DisableDates from "./DatePicker_stories/DisableDates";
import Locale from "./DatePicker_stories/Locale";
import CustomDateFormat from "./DatePicker_stories/CustomDateFormat";

//storybook module
const stories = storiesOf('Date Picker', module);
stories.addDecorator(withKnobs);

/**
 default view
 */
stories.add('Default View', () => (<Default label="Pick a date"/>));

/**
 portal view
 */
stories.add('Portal View', () => (<Portal label="Pick a date"/>));

/**
 with Clear Button
 */
stories.add('With Clear Button', () => {
    const defaultValue = true;
    const isClearable = boolean('Clearable', defaultValue);

    return (
      (<WithClearButton selected={moment()} label={isClearable ? "Clearable" : "Not Clearable"}
                        isClearable={isClearable}/>)
    )
  }
);

/**
 disable state
 */
stories.add('Disabled', () => {
    const disable_label = 'Disable State';
    const enable_label = 'Enabled';
    const defaultValue = true;
    const disable = boolean('Disabled State', defaultValue);

    return (
      (<DatePicker label={disable ? disable_label : enable_label} disabled={disable}/>)
    )
  }
);

/**
 Select a range of dates
 */
stories.add('Select a Range of Dates', () => (<DateRangePicker
  startDateLabel={"Pick your start date"}
  endDateLabel={"Pick your end date"}/>));

/**
 disable certain days
 */
stories.add('Disable Certain Days', () => {
  const label = 'Num of future days to be selectable';
  const defaultValue = 7;
  const maxDate = number(label, defaultValue);
  return (
    (<DisableDates maxDate={maxDate}/>)
  )
});

/**
 calender locale
 */
stories.add('Locale', () => {
  const label = 'Locale';
  const options = ['fr-ca', 'en-us', 'zh-cn', 'ja'];
  const defaultValue = 'fr-ca';
  const locale = select(label, options, defaultValue);

  return (
    (<Locale label="Calender with Locale Setting" locale={locale}/>)
  )
});

/**
 customize date format
 */
stories.add('Custom Date Format', () => {
  const label = 'Date Format';
  const options = ['ddd, d MMM, YYYY', 'YYYY-MM-DD', 'DD-MM-YY'];
  const defaultValue = 'ddd, d MMM, YYYY';
  const dateFormat = select(label, options, defaultValue);

  return (
    (<CustomDateFormat label="Input with Custom Date Format" dateFormat={dateFormat}/>)
  )
});
