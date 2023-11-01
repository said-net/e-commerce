import { createSlice } from "@reduxjs/toolkit";
import uz from "../langs/uz";
import ru from "../langs/ru";

const LangReducer = createSlice({
    name: 'lang',
    initialState: {
        lang: !localStorage.getItem('lang') || localStorage?.getItem('lang') === 'uz' ? uz : ru
    },
    reducers: {
        setLang: (state, { payload }) => {
            if (payload === 'uz') {
                state.lang = uz;
                localStorage.setItem('lang', 'uz')
            } else {
                state.lang = ru;
                localStorage.setItem('lang', 'ru')
            }
        }
    }
});
export const { setLang } = LangReducer.actions;
export default LangReducer.reducer;