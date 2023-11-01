export const API = 'http://localhost:5000/api';
export const ACCESS = ()=>{
    return `Bearer ${localStorage.getItem('access')}`
}