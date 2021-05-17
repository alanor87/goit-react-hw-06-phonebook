import { changeFilter } from './filter-types';
import { createAction } from '@reduxjs/toolkit';

export const onChangeFilter = createAction(changeFilter);
