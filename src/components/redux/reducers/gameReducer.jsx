const stateDefaut = {
    arrXucXac : [
        {img: './img/6.png', diem : 6 },
        {img: './img/6.png', diem : 6 },
        {img: './img/6.png', diem : 6 },
    ],
    tongSoBanThang : 10 ,
    tongSoBanChoi : 11 ,
    giatriCuoc: true
}


export const gameReducer = (state = stateDefaut , action ) => {
    switch(action.type){
        case 'DAT_CUOC': {
            state.giatriCuoc = action.payload;
            return {...state};
        };
        case 'PLAY_GAME': {
            // Xử thay đổi cật nhật
             let arrXXNN = [];
             for(let i =1 ; i<= 3 ;i++){
                let soNgauNhien = Math.floor(Math.random() * 6 ) + 1 
                //
                let xuxxacNN = {diem:soNgauNhien, img: `./img/${soNgauNhien}.png`}
                // Thêm ob xx vào mảng 
                arrXXNN.push(xuxxacNN)
             }
             state.arrXucXac = arrXXNN
            // tinh diem 
            let tongDiem = arrXXNN.reduce((sum, xx) => {
                return sum + xx.diem
            }, 0)
            // xu lý thắng
            if((tongDiem > 11 && state.giatriCuoc) || (tongDiem <= 11 && !state.giatriCuoc)){
                state.tongSoBanThang +=1 ;
            }
            // Luôn luôn tăng state bàn chơi sau mỗi lần play game 
            state.tongSoBanChoi +=1 ;

             return {...state};
        }
        default : return state;
    }
}