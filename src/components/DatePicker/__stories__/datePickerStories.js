import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import {
  CustomDateFormat,
  DateRangePicker,
  Default,
  DisableDates,
  Disabled,
  FilterDates,
  Locale,
  WithClearButton
} from "./stories/index";

/*
  Date Picker Stories
 */
const storiesOfDatePicker = storiesOf("Date Picker", module);
storiesOfDatePicker.addDecorator(withKnobs);

// default view
storiesOfDatePicker.add("Default View", () => {
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const disabled = boolean("Disable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <Default
      label={label}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      dateFormat={dateFormat}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      fixedHeight={fixedHeight}
      // dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// with Clear Button
storiesOfDatePicker.add("With Clear Button", () => {
  const showClearButton = boolean("Clearable", true);
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const disabled = boolean("disable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <WithClearButton
      selected={moment()}
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// disable state
storiesOfDatePicker.add("Disabled", () => {
  const disabled = boolean("disable", true);
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", true);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <Disabled
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// Select a range of dates
storiesOfDatePicker.add("Select a Range of Dates", () => {
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const disabled = boolean("disable", false);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <DateRangePicker
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// Restricted Date Range
storiesOfDatePicker.add("Restricted Date Range", () => {
  const defaultValue = 7;
  const maxDate = number("Date Range Restriction", defaultValue);
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const disabled = boolean("disable", false);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <DisableDates
      maxDate={maxDate}
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// Filter Dates
storiesOfDatePicker.add("Filter Dates", () => {
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    ["Weekdays"]
  );
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const disabled = boolean("disable", false);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");

  return (
    <FilterDates
      chooseFilter={chooseFilter}
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
    />
  );
});

// calender locale
storiesOfDatePicker.add("Locale", () => {
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "fr-ca");
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const disabled = boolean("disable", false);
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <Locale
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      dateFormat={dateFormat}
      locale={locale}
      chooseFilter={chooseFilter}
    />
  );
});

// customize date format
storiesOfDatePicker.add("Custom Date Format", () => {
  const dateFormat = select(
    "Date Format",
    ["MM/DD/YYYY", "MMMM Do, YYYY", "ddd, MMM, YYYY", "YYYY-MM-DD", "DD-MM-YY"],
    "MM/DD/YYYY"
  );
  const locale = select("Locale", ["fr-ca", "en-us", "zh-cn", "ja"], "en-us");
  const label = text("Label", "Select a date");
  const showLabel = boolean("Show label", true);
  const instruction = text("Instruction", "Please choose a date ");
  const showInstruction = boolean("Show instruction", false);
  const showIcon = boolean("Icon", true);
  const showClearButton = boolean("Clearable", false);
  const fixedHeight = boolean("Fixed Calender Height", true);
  const disabled = boolean("disable", false);
  const chooseFilter = select(
    "Filter",
    ["Weekdays", "Weekends", "None"],
    "None"
  );

  return (
    <CustomDateFormat
      dateFormat={dateFormat}
      locale={locale}
      label={label}
      showIcon={showIcon}
      showClearButton={showClearButton}
      disabled={disabled}
      selected={moment()}
      showLabel={showLabel}
      instruction={instruction}
      showInstruction={showInstruction}
      fixedHeight={fixedHeight}
      chooseFilter={chooseFilter}
    />
  );
});
