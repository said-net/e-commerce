import { useDispatch, useSelector } from "react-redux";
import UZ from '../assets/uz.png';
import RU from '../assets/ru.png';
import { setLang } from "../reducers/lang.reducer";
function SelectLang() {
    const dp = useDispatch();
    const { title } = useSelector(e => e?.lang?.lang);
    return (
        <div className="fixed top-[10px] right-[2%] z-[100]">
            <div className={`flex items-center flex-col w-[45px] h-[45px] bg-white rounded-full duration-300 overflow-hidden cursor-pointer hover:h-[95px] hover:border ${title === 'uz' ? 'rotate-0 justify-start' : 'rotate-180 justify-end'}`}>
                <div onClick={() => dp(setLang('uz'))} className={`flex items-center justify-center w-[45px] h-[45px] duration-300 mb-[5px] ${title === 'ru' && 'rotate-180'}`}>
                    <img src={UZ} alt="uz" />
                </div>
                <div onClick={() => dp(setLang('ru'))} className={`flex items-center justify-center w-[45px] duration-300 h-[45px] ${title === 'uz' && 'rotate-180'}`}>
                    <img src={RU} alt="ru" />
                </div>
            </div>
        </div>
    );
}

export default SelectLang;