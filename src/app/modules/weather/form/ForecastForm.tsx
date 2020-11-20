import style from './ForecastForm.module.css';
import React, {useState} from 'react';
import { ForecastSearch } from '../types';
import Form from 'antd/es/form';
import Button from 'antd/es/button';
import { SearchedDays } from './SearchedDays';
import {CitySearch} from "./CitySearch";

const FORM_INITIALS = {
    city: '',
    days: 1
}

interface ForecastFormProps {
    onSearch: (search: ForecastSearch) => void;
}

export const ForecastForm = (props: ForecastFormProps) => {
    const { form, city, days, onChangeCity, onChangeDays, onReset } = useForecastForm();
    return (
        <Form form={form}
              name="forecast"
              layout="vertical"
              initialValues={FORM_INITIALS}
              onFinish={values => onFinish(props, values)}
              className={style.form}
        >
            <CitySearch city={city} onChange={onChangeCity} />
            <SearchedDays days={days as number} onChange={onChangeDays} />
            <div className={style.buttons}>
                <div>
                    <Button type="primary" htmlType="submit">
                        Search
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </div>
            </div>
        </Form>
    );
};

function onFinish({onSearch}: ForecastFormProps, values: ForecastSearch) {
    let { days } = values;
    if (days === undefined || days === null) {
        delete values.days;
    }
    onSearch(values);
}

function useForecastForm() {
    const [form] = Form.useForm();
    const [city, setCity] = useState(FORM_INITIALS.city);
    const [days, setDays] = useState<number | string | undefined>(FORM_INITIALS.days);

    const onChangeCity = (value: string) => {
        const newCity = value.trim();
        setCity(newCity);
        form.setFieldsValue({ city: newCity });
    };

    const onChangeDays = (value: number | string | undefined) => {
        setDays(value);
        form.setFieldsValue({ days: value });
    };

    const onReset = () => {
        setCity(FORM_INITIALS.city);
        setDays(FORM_INITIALS.days);
        form.resetFields();
    };
    return { form, city, days, onChangeCity, onChangeDays, onReset };
}