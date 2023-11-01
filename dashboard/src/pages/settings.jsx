import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ACCESS, API } from "../config";
import { IconButton, Input, Option, Popover, PopoverContent, PopoverHandler, Select, Spinner, Switch } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { FaBagShopping, FaBoxArchive, FaCartShopping, FaCheck, FaCheckDouble, FaCirclePlus, FaCoins, FaCopy, FaLink, FaMoneyBill, FaMoneyBillTransfer, FaPhone, FaQuestion, FaTruck, FaTruckFast, FaUserPlus, FaUsers, FaXmark } from "react-icons/fa6";
import { BiRefresh, BiSave, BiSolidCheckCircle } from "react-icons/bi";

function Settings() {
    const { settings: s, codes: c } = useSelector(e => e?.lang?.lang);
    document.title = s?.title?.toUpperCase();
    const [state, setState] = useState({
        id: 0,
        // BOT
        bot_token: '',
        bot_username: '',
        send_new_order: true,
        send_success_order: true,
        send_archived_order: true,
        send_copy_order: true,
        send_rejected_order: true,
        send_sended_order: true,
        send_delivered_order: true,
        send_recontact_order: true,
        send_plus_balance: true,
        // OPERATOR DIST
        min_oper_payment: 5000,
        max_oper_payment: 500000,
        next_order: 0,
        auto_dist: false,
        type_dist: 'order_count',//order_count, location, rating
        // FOR USERS & SELLERS
        register: true,
        shopping_cart: false,
        auto_stream: true,
        open_stream: true,
        stream_dist: 'first_product',//first_product, all_product,
        min_payment: 5000,
        max_payment: 5000000,
        currency: "SO'M",//USD, SO'M, UZS, RUB, UER
        send_coins: false,
        sms_duration: 120,
        // ORDERS
        auto_new: false,
        auto_new_time: 360,
        coins: false,
        // SITE
        operator_working: true,
        courier_working: true,
        client_working: true,
        seller_working: true,
        logo: '',
        mobile_logo: '',
        new_logo: '',
        new_mobile_logo: ''
    });
    useEffect(() => {
        axios(`${API}/setting/get-settings`, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then(res => {
            const { code, data } = res.data;
            if (code === 200) {
                setState(data);
            }
        });
    }, []);
    // functions
    function SetClinetWorking(e) {
        axios.post(`${API}/setting/set-client-working`, { working: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, client_working: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetOperatorWorking(e) {
        axios.post(`${API}/setting/set-operator-working`, { working: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, operator_working: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSellerWorking(e) {
        axios.post(`${API}/setting/set-seller-working`, { working: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, seller_working: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetCourierWorking(e) {
        axios.post(`${API}/setting/set-courier-working`, { working: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, courier_working: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    // BOT
    function SetBotToken() {
        axios.post(`${API}/setting/set-bot-token`, { bot_token: state.bot_token }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetBotUsername() {
        axios.post(`${API}/setting/set-bot-username`, { bot_username: state.bot_username }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    // SEND MESSAGES
    function SetSendRejected(e) {
        axios.post(`${API}/setting/set-send-rejected`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_rejected_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendArchived(e) {
        axios.post(`${API}/setting/set-send-archived`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_archived_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendCopy(e) {
        axios.post(`${API}/setting/set-send-copy`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_copy_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendRecontact(e) {
        axios.post(`${API}/setting/set-send-recontact`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_recontact_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendNew(e) {
        axios.post(`${API}/setting/set-send-new`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_new_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendSuccess(e) {
        axios.post(`${API}/setting/set-send-success`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_success_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendSended(e) {
        axios.post(`${API}/setting/set-send-sended`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_sended_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendDelivered(e) {
        axios.post(`${API}/setting/set-send-delivered`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_delivered_order: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetPlusBalance(e) {
        axios.post(`${API}/setting/set-plus-balance`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_plus_balance: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    // OPERS
    function SetOperatorMinPayment() {
        axios.post(`${API}/setting/set-operator-min-payment`, { min_oper_payment: state.min_oper_payment }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetOperatorMaxPayment() {
        axios.post(`${API}/setting/set-operator-max-payment`, { max_oper_payment: state.max_oper_payment }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetOperatorAutoDist(e) {
        axios.post(`${API}/setting/set-operator-auto-dist`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, auto_dist: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetOperatorTypeDist(e) {
        axios.post(`${API}/setting/set-operator-type-dist`, { type_dist: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    // USERS & SELLERS
    function SetRegister(e) {
        axios.post(`${API}/setting/set-register`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, register: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetShoppingCart(e) {
        axios.post(`${API}/setting/set-shopping-cart`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, shopping_cart: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetAutoStream(e) {
        axios.post(`${API}/setting/set-auto-stream`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, auto_stream: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetOpenStream(e) {
        axios.post(`${API}/setting/set-open-stream`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, open_stream: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetStreamDist(e) {
        axios.post(`${API}/setting/set-stream-dist`, { stream_dist: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, stream_dist: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetNextOrder() {
        axios.post(`${API}/setting/set-next-order`, { next_order: state.next_order }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetMinPaymet() {
        axios.post(`${API}/setting/set-min-payment`, { min_payment: state.min_payment }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetMaxPaymet() {
        axios.post(`${API}/setting/set-max-payment`, { max_payment: state.max_payment }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetCurrency(e) {
        axios.post(`${API}/setting/set-currency`, { currency: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, currency: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetCoins(e) {
        axios.post(`${API}/setting/set-coins`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, coins: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSendCoins(e) {
        axios.post(`${API}/setting/set-send-coins`, { value: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, send_coins: e });
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetSmsDuration() {
        axios.post(`${API}/setting/set-sms-duration`, { sms_duration: state.sms_duration }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetLogo(e) {
        axios.postForm(`${API}/setting/set-logo`, { logo: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, new_logo: e })
            } else {
                toast.error(c[code]);
            }
        });
    }
    function SetMobileLogo(e) {
        axios.postForm(`${API}/setting/set-mobile-logo`, { logo: e }, {
            headers: {
                'x-auth-token': ACCESS()
            }
        }).then((res) => {
            const { code } = res.data;
            if (code === 200) {
                toast.success(c[code]);
                setState({ ...state, new_mobile_logo: e })
            } else {
                toast.error(c[code]);
            }
        });
    }
    return (
        <div className="flex items-center justify-start flex-col w-full px-[2%]">
            {/*  */}
            <div className="h-[70px] mb-[20px]">
                <div className="flex items-center justify-center w-full bg-white fixed top-0 left-0 h-[70px] z-[99] border-b shadow-sm">
                    <p className="text-[20px] uppercase">{s?.title}</p>
                </div>
            </div>
            {/*  */}
            {state?.id !== 1 ? <Spinner /> :
                <div className="flex items-center justify-start flex-col w-full bg-white rounded-[10px] p-[10px_2%]">
                    {/*  */}
                    <div className="flex items-center justify-center w-full my-[20px]">
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                        <p className="mx-[10px] text-[12px] lg:text-[16px]">{s?.site_desc}</p>
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                    </div>
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <div className="flex items-end justify-start flex-col">
                            <img src={state?.new_logo ? URL.createObjectURL(state?.new_logo) : state?.logo} alt="logo" className="sm:w-[287px] sm:h-[60px] w-[143.5px] h-[30px]" />
                            <p>{s?.logo}</p>
                        </div>
                        <label className="cursor-pointer">
                            <input type="file" accept="image/*" onChange={e => SetLogo(e?.target?.files[0])} className="hidden" />
                            <div className="flex items-center justify-center w-[45px] h-[45px] bg-green-500 rounded-full text-[20px] text-[white]">
                                <BiRefresh />
                            </div>
                        </label>
                    </div>
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <div className="flex items-start justify-start flex-col">
                            <img src={state?.new_mobile_logo ? URL.createObjectURL(state?.new_mobile_logo) : state?.mobile_logo} alt="logo" className="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px]" />
                            <p>{s?.mobile_logo}</p>
                        </div>
                        <label className="cursor-pointer">
                            <input type="file" accept="image/*" onChange={e => SetMobileLogo(e?.target?.files[0])} className="hidden" />
                            <div className="flex items-center justify-center w-[45px] h-[45px] bg-green-500 rounded-full text-[20px] text-[white]">
                                <BiRefresh />
                            </div>
                        </label>
                    </div>
                    {/* PANNELS */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaUsers className="mr-[5px] text-gray-600" />
                            {s?.client_working}
                        </p>
                        <Switch id="1" onChange={e => SetClinetWorking(e.target.checked)} color="green" defaultChecked={state?.client_working} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCartShopping className="mr-[5px] text-gray-600" />
                            {s?.seller_working}
                        </p>
                        <Switch id="2" onChange={e => SetSellerWorking(e.target.checked)} color="green" defaultChecked={state?.seller_working} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaPhone className="mr-[5px] text-gray-600" />
                            {s?.operator_working}
                        </p>
                        <Switch id="3" onChange={e => SetOperatorWorking(e.target.checked)} color="green" defaultChecked={state?.operator_working} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaTruck className="mr-[5px] text-gray-600" />
                            {s?.courier_working}
                        </p>
                        <Switch id="4" onChange={e => SetCourierWorking(e.target.checked)} color="green" defaultChecked={state?.courier_working} />
                    </div>
                    {/* BOT */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input label={s?.bot_token} color="green" onChange={e => setState({ ...state, bot_token: e.target.value.trim() })} value={state?.bot_token} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetBotToken()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input label={s?.bot_username} color="green" onChange={e => setState({ ...state, bot_username: e.target.value.trim() })} value={state?.bot_username} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetBotUsername()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/* MESSAGES */}
                    <div className="flex items-center justify-center w-full my-[20px]">
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                        <p className=" mx-[10px] text-[12px] lg:text-[16px]">{s?.send_desc}</p>
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                    </div>
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaXmark className="mr-[5px] text-gray-600" />
                            {s?.send_rejected_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_rejected_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="5" onChange={e => SetSendRejected(e.target.checked)} color="green" defaultChecked={state?.send_rejected_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaBoxArchive className="mr-[5px] text-gray-600" />
                            {s?.send_archived_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_archived_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="6" onChange={e => SetSendArchived(e.target.checked)} color="green" defaultChecked={state?.send_archived_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCopy className="mr-[5px] text-gray-600" />
                            {s?.send_copy_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_copy_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="7" onChange={e => SetSendCopy(e.target.checked)} color="green" defaultChecked={state?.send_copy_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <BiRefresh className="mr-[5px] text-gray-600" />
                            {s?.send_recontact_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_recontact_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="8" onChange={e => SetSendRecontact(e.target.checked)} color="green" defaultChecked={state?.send_recontact_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaBagShopping className="mr-[5px] text-gray-600" />
                            {s?.send_new_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_new_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="9" onChange={e => SetSendNew(e.target.checked)} color="green" defaultChecked={state?.send_new_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCheck className="mr-[5px] text-gray-600" />
                            {s?.send_success_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_success_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="10" onChange={e => SetSendSuccess(e.target.checked)} color="green" defaultChecked={state?.send_success_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaTruckFast className="mr-[5px] text-gray-600" />
                            {s?.send_sended_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_sended_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="11" onChange={e => SetSendSended(e.target.checked)} color="green" defaultChecked={state?.send_sended_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <BiSolidCheckCircle className="mr-[5px] text-gray-600" />
                            {s?.send_delivered_order}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_delivered_order_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="12" onChange={e => SetSendDelivered(e.target.checked)} color="green" defaultChecked={state?.send_delivered_order} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaMoneyBill className="mr-[5px] text-gray-600" />
                            {s?.send_plus_balance}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.send_plus_balance_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="13" onChange={e => SetPlusBalance(e.target.checked)} color="green" defaultChecked={state?.send_plus_balance} />
                    </div>
                    {/* FOR OPERATORS */}
                    <div className="flex items-center justify-center w-full my-[20px]">
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                        <p className="mx-[10px] text-[12px] lg:text-[16px]">{s?.oper_desc}</p>
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.min_oper_payment} color="green" onChange={e => setState({ ...state, min_oper_payment: e.target.value.trim() })} value={state?.min_oper_payment} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetOperatorMinPayment()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.max_oper_payment} color="green" onChange={e => setState({ ...state, max_oper_payment: e.target.value.trim() })} value={state?.max_oper_payment} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetOperatorMaxPayment()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCheckDouble className="mr-[5px] text-gray-600" />
                            {s?.auto_dist}
                            <Popover>
                                <PopoverHandler>
                                    <IconButton className="p-[10px] w-auto h-auto rounded-full">
                                        <FaQuestion />
                                    </IconButton>
                                </PopoverHandler>
                                <PopoverContent className="bg-blue-gray-100 text-black z-[9999]">
                                    {s?.auto_dist_desc}
                                </PopoverContent>
                            </Popover>
                        </p>
                        <Switch id="14" onChange={e => SetOperatorAutoDist(e.target.checked)} color="green" defaultChecked={state?.auto_dist} />
                    </div>
                    {/*  */}
                    {state?.auto_dist &&
                        <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                            <Select color="green" label={s?.type_dist} value={state?.type_dist} onChange={e => SetOperatorTypeDist(e)}>
                                <Option value='order_count'>{s?.type_dis_order_count}</Option>
                                <Option value='rating'>{s?.type_dis_rating}</Option>
                            </Select>
                        </div>
                    }
                    {/* USERS & SELLERS */}
                    <div className="flex items-center justify-center w-full my-[20px]">
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                        <p className="mx-[10px] text-[12px] lg:text-[16px]">{s?.user_desc}</p>
                        <span className="w-[20%] h-[1px] bg-gray-400"></span>
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaUserPlus className="mr-[5px] text-gray-600" />
                            {s?.register}
                        </p>
                        <Switch id="u-0" onChange={e => SetRegister(e.target.checked)} color="green" defaultChecked={state?.register} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCartShopping className="mr-[5px] text-gray-600" />
                            {s?.shopping_cart}
                        </p>
                        <Switch id="u-1" onChange={e => SetShoppingCart(e.target.checked)} color="green" defaultChecked={state?.shopping_cart} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaLink className="mr-[5px] text-gray-600" />
                            {s?.auto_stream}
                        </p>
                        <Switch id="u-2" onChange={e => SetAutoStream(e.target.checked)} color="green" defaultChecked={state?.auto_stream} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCirclePlus className="mr-[5px] text-gray-600" />
                            {s?.open_stream}
                        </p>
                        <Switch id="u-3" onChange={e => SetOpenStream(e.target.checked)} color="green" defaultChecked={state?.open_stream} />
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Select color="green" label={s?.stream_dist} value={state?.stream_dist} onChange={e => SetStreamDist(e)}>
                            <Option value='first_product'>{s?.stream_dist_first}</Option>
                            <Option value='all_product'>{s?.stream_dist_all}</Option>
                        </Select>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.next_order} color="green" onChange={e => setState({ ...state, next_order: e.target.value.trim() })} value={state?.next_order} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetNextOrder()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.min_payment} color="green" onChange={e => setState({ ...state, min_payment: e.target.value.trim() })} value={state?.min_payment} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetMinPaymet()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.max_payment} color="green" onChange={e => setState({ ...state, max_payment: e.target.value.trim() })} value={state?.max_payment} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetMaxPaymet()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Select color="green" label={s?.currency} value={state?.currency} onChange={e => SetCurrency(e)}>
                            <Option value="SO'M">SO'M</Option>
                            <Option value='UZS'>UZS</Option>
                            <Option value='USD'>USD</Option>
                            <Option value='RUB'>RUB</Option>
                            <Option value='EUR'>EUR</Option>
                        </Select>
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaCoins className="mr-[5px] text-gray-600" />
                            {s?.coins}
                        </p>
                        <Switch id="u-4" onChange={e => SetCoins(e.target.checked)} color="green" defaultChecked={state?.coins} />
                    </div>
                    {/*  */}
                    <div className="hover:bg-gray-100 p-[5px] flex items-center justify-between w-full mb-[10px] border rounded">
                        <p className="flex items-center justify-start text-[13px] lg:text-[16px]">
                            <FaMoneyBillTransfer className="mr-[5px] text-gray-600" />
                            {s?.send_coins}
                        </p>
                        <Switch id="u-5" onChange={e => SetSendCoins(e.target.checked)} color="green" defaultChecked={state?.send_coins} />
                    </div>
                    {/*  */}
                    <div className="p-[5px] flex items-center justify-between w-full mb-[10px] border rounded relative">
                        <Input type="number" label={s?.sms_duration} color="green" onChange={e => setState({ ...state, sms_duration: e.target.value.trim() })} value={state?.sms_duration} />
                        <div className="absolute right-[5px]">
                            <IconButton onClick={() => SetSmsDuration()} color="green">
                                <BiSave className="text-[20px]" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Settings;