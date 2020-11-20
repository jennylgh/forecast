import React, { useState, useEffect } from 'react';
import Form from 'antd/es/form';
import Select from 'antd/es/select';
import {Rule} from "rc-field-form/lib/interface";
import {LocationService} from "../../../services/LocationService";

const { Option } = Select;

interface CitySearchProps {
    city: string;
    onChange: (city: string) => void;
}

const CITY_RULES = [{ type: 'string', required: true, message: 'City is required' }];

export const CitySearch = (props: CitySearchProps) => {
    const cities = useCitySearch();
    const { city, onChange } = props;
    return (
        <Form.Item
            label="City"
            name="city"
            rules={CITY_RULES as Rule[]}
        >
            <Select placeholder="Please select a city" value={city} onChange={onChange} showSearch>
                {cities.map(c => (
                    <Option key={c} value={c}>{c}</Option>
                ))}
            </Select>
        </Form.Item>
    );
};

function useCitySearch() {
    const [cities, setCities] = useState([] as string[]);

    useEffect(() => {
        LocationService.getCities().then(results => {
            const sorted = results.sort((c1, c2) => (c1 > c2) ? 1 : -1);
            setCities(sorted);
        });
    }, []);

    return cities;
}