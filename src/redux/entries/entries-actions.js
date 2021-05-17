import actionTypes from './entries-types';
import { createAction } from '@reduxjs/toolkit';

export const addEntry = createAction(actionTypes.addEntry);

export const deleteEntry = createAction(actionTypes.deleteEntry);

