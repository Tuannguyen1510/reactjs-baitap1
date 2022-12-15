
const stateDefaut = [
    {taiKhoan : 'khaiDo', matKhau: '123'},
    {taiKhoan : 'sangng', matKhau: '321'}
]



export const arrNguoiDungReducer = (state = stateDefaut, action ) => {
    switch(action.type){
        case 'THEM_NGUOI_DUNG' : {
            state.push(action.payload);
            return [...state]; // immutable : tính bất biến 
        }
        // Xoa du liêu 

        default: return state;
    }
}