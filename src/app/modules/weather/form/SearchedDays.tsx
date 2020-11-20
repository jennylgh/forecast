import Form from "antd/es/form";
import InputNumber from "antd/es/input-number";
import React from "react";
import {Rule} from "rc-field-form/lib/interface";

const MAX_DAYS = 5;
const DAYS_RULES = {
    type: 'number',
    min: 0,
    max: MAX_DAYS,
    message: `Days must be between 0 and ${MAX_DAYS}`
};

interface SearchedDaysProps {
    days: number | undefined;
    onChange: (value: number | string | undefined) => void;
}

export const SearchedDays = (props: SearchedDaysProps) => {
    const { days, onChange } = props;
    return (
        <Form.Item
            name="days"
            label="Days into future"
            rules={[DAYS_RULES as Rule]}
        >
            <InputNumber
                value={days}
                placeholder="Please enter a date"
                onChange={onChange}
            />
        </Form.Item>
    );
}