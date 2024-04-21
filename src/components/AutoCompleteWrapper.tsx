import React, { useEffect, useState } from 'react';
import AutoCompleteBox from './AutoCompleteBox';
import { API_URL } from '../constants/constants';
import { Typography } from '@mui/material';
import './styles.css';
import getDisplayLabel from '../utils/getDisaplayLabel';

const AutoCompleteWrapper: React.FC = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedItem, setSelectedItem] = useState<User | null>(null);
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleItemSelect = (value: User | null) => {
        setSelectedItem(value);
    }

    return (
        <React.Fragment>
            <div className='box-container'>
                <AutoCompleteBox
                    data={users}
                    handleItemSelect={handleItemSelect}
                    selectedItem={selectedItem}
                />
            </div>

            {selectedItem && (
                <Typography variant="h6" style={{ marginTop: 20 }}>
                    <strong>Name:</strong> {getDisplayLabel(selectedItem)}<br />
                    <strong>Address:</strong> {`${selectedItem.address.street}, ${selectedItem.address.suite}, ${selectedItem.address.city}, ${selectedItem.address.zipcode}`}
                </Typography>
            )}
        </React.Fragment>
    )
};

export default AutoCompleteWrapper;