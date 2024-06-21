import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const CustomContainer = ({ children }) => (
    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        {children}
    </div>
);

export default function DateTimePickerValue({ open, setDate }) {
    const [value, setValue] = React.useState(dayjs());

    React.useEffect(() => {
        setDate(value);
    }, [value, setDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomContainer>
                <DateTimePicker
                    open={open}
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </CustomContainer>
        </LocalizationProvider>
    );
}
