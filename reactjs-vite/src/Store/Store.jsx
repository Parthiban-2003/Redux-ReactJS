import {configureStore} from '@reduxjs/toolkit';
import FormSlices from '../Features/SliceContent'
import ThemeColor from '../Features/ThemeColorSlice';

let Store = configureStore({
    reducer:{
        FromContent: FormSlices,
        Themes: ThemeColor,
    }
});

export default Store;