import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


interface Props {
    onChange: (e: any) => void;
    value: any;
}

export default function DateAndTimePicker({onChange, value}:Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
       
          <DateTimePicker onChange={onChange} value={value} />
        
    </LocalizationProvider>
  );
}
