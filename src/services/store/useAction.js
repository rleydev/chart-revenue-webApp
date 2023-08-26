import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as dataActions from './actions/data.action';
import {actions as rangeActions } from './slices/range.slice'

const rootActions = {
    ...dataActions,
    ...rangeActions
}


export const useActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}