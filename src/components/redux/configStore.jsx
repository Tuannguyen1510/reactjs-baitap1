import {configureStore} from '@reduxjs/toolkit';
import { arrNguoiDungReducer } from './reducers/arrNguoiDungReduces';
import { gameReducer } from './reducers/gameReducer';
import { BurgerReducer } from './reducers/BurgerReduces';
export const store = configureStore({
    reducer: {
        //Các state ứng dụng đặt tại đây
        fontSizeState: (state = 16, action) => {
            console.log('action1', action);
            switch (action.type) {
                case 'TANG_GIAM_FONT_SIZE': {
                    state = state + action.payload;
                    return state;
                }
                default : return state
            }
        },
        imgSrcReducer: (state = './img/imgBlackCar.jpg', action) => {
            switch(action.type) {
                case 'CHANGE_COLOR': {
                    state = action.payload;
                    return state;
                }
                default : return state;
            }
        },
        // arrNguoiDungReducer: arrNguoiDungReducer,
        // gameReducer:gameReducer

        arrNguoiDungReducer : arrNguoiDungReducer,
        gameReducer : gameReducer,
        BurgerReducer: BurgerReducer
    }
})



