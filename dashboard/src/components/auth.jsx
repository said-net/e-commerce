import { Button, Input, Switch } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { } from 'react-icons/bi'
import { setLoader } from "../reducers/loader.reducer";
import axios from "axios";
import { API } from "../config";
import toast from "react-hot-toast";
import { setRefreshAuth } from "../reducers/auth.reducer";
function Auth() {
    const { auth: a, codes: c } = useSelector(e => e?.lang?.lang);
    const [state, setState] = useState({ username: '', password: '', remember: false });
    const dp = useDispatch();
    function Submit() {
        dp(setLoader(true));
        axios.post(`${API}/admin/sign-in`, state).then((res) => {
            const { code, access } = res.data;
            dp(setLoader(false));
            if (code !== 202) {
                toast.error(c[code]);
            } else {
                localStorage.setItem('access', access);
                toast.success(c[code]);
                setTimeout(() => {
                    dp(setRefreshAuth());
                }, 1000);
            }
        }).catch(() => {
            dp(setLoader(false));
            toast.error(c[99]);
        });
    }
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex items-center justify-start flex-col w-[90%] md:w-[700px] p-[10px] bg-white shadow-lg rounded-lg">
                {/*  */}
                <p className="text-[12px] text-center p-[5px] rounded-full border mb-[10px]">{a?.rules}</p>
                {/*  */}
                <div className="w-full mb-[10px]">
                    <Input color="green" label={a?.username} required onChange={e => setState({ ...state, username: e?.target?.value })} value={state?.username} />
                </div>
                <div className="w-full mb-[10px]">
                    <Input color="green" label={a?.password} required onChange={e => setState({ ...state, password: e?.target?.value })} value={state?.password} />
                </div>
                <div className="w-full mb-[10px]">
                    <Switch color="green" onChange={e => setState({ ...state, remember: e?.target?.checked })} value={state?.checked} label={<p className="text-[12px]">{a?.remember}</p>} />
                </div>
                <Button onClick={Submit} color="green" disabled={state?.username?.length < 4 || state?.password?.length < 5} fullWidth>{a?.submit}</Button>
            </div>
        </div>
    );
}

export default Auth;