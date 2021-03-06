
import { changeFilter } from './filter-types';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('',
    {
        [changeFilter]: (_, action) => action.payload
    });