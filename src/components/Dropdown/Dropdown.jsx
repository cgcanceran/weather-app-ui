import React from "react";
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Dropdown = React.memo(({ id, label, options, onChange }) => {
    return (
        <Select
            id={id}
            input={<OutlinedInput label={label} />}
            MenuProps={MenuProps}
            onChange={e => onChange(e.target.value)}
        >
            { options.map((option) => (
                <MenuItem
                    key={option.city}
                    value={option.city}
                >
                    {option.city}
                </MenuItem>
            ))}
        </Select>
    );
});

Dropdown.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default Dropdown;