export default {
    title: 'uz',
    auth: {
        rules: "Barcha harakatlar IP manzillari saqlab boriladi!",
        username: "Username",
        password: "Parol",
        remember: "Ishonchli qurilma( ushbu qurilmada sessiya yakunlanmasin )",
        submit: "Kirish"
    },
    codes: {
        '99': 'Aloqani tekshirib qayta urinib ko\'ring',
        '100': "Davom eting",
        '101': "Kommutatsiya protokollari",
        '102': "Qayta ishlash",
        '103': "Dastlabki maslahatlar",
        // 200
        '200': "Muvofaqqiyatli",
        '201': "Yaratildi",
        '202': "Qabul qilindi",
        '203': "Vakolatsiz ma'lumotlar",
        '204': "Kontent yo'q",
        '205': "Kontentni tiklash",
        '206': "Qisman tarkib",
        '206': "IM ishlatilgan",
        '299': "Avtorizatsiya qiling!",
        // 300
        '300': "Bir nechta tanlov",
        '301': "Doimiy ko'chirildi",
        '302': "Topildi",
        '303': "Boshqaga qarang",
        '304': "O'zgartirilmagan",
        '307': "Vaqtinchalik qayta yo'naltirish",
        '308': "Doimiy qayta yo'naltirish",
        // 400
        '400': "So'rov xato yoki qatorlar to'ldirilmagan",
        '401': "Ruxsat mavjud emas",
        '402': "To'lov talab qilinadi",
        '403': "Taqiqlangan",
        '404': "Topilamdi",
        '405': "Ruxsat berilmagan usul",
        '406': "Qabul qilinmaydi",
        '407': "Proksi autentifikatsiyasi talab qilinadi",
        '408': "So'rov muddati tugashi",
        '409': "Mojaro",
        '410': "Ketdi",
        '411': "Uzunlik talab qilinadi",
        '412': "Avvalgi shart bajarilmadi",
        '413': "Tarkib juda katta",
        '414': "URI juda uzoq",
        '415': "Qo'llab quvvatlanmaydigon media turi",
        '416': "Diapazon qoniqarsiz",
        '417': "Kutish amalga oshmadi",
        '421': "Noto'g'ri yo'naltirilgan so'rov",
        '422': "Ishlov berilmaydigan tarkib",
        '423': "Qulflangan",
        '424': "Muvaffaqiyatsiz qaramlik",
        '425': "Juda erta",
        '426': "Yangilash talab qilinadi",
        '428': "Avvalgi shart talab qilinadi",
        '429': "Juda ko'p so'rovlar",
        '431': "So'rov sarlavhasi maydonlari juda katta",
        '451': "Yuridik sabablarga ko'ra mavjud emas",
        // 500
        '500': 'Serverdagi ichki xatolik',
        '501': "Amalga oshirilmadi",
        '502': "Yomon shlyuz",
        '503': "Xizmat ish faoliyatida emas",
        '504': "Gateway vaqti tugadi",
        '505': "HTTP versiyasi qo'llab-quvvatlanmaydi",
        '506': "Variant ham muzokaralar olib boradi",
        '507': "Xotira yetarli emas",
        '508': "Loop( Cheksiz so'rov ) aniqlandi",
        '509': "Tarmoq autentifikatsiyasi talab qilinadi"
    },
    settings: {
        title: "Sozlamalar",
        site_desc: "Sayt sozlamalari",
        bot_token: 'TG bot tokeni',
        bot_username: 'TG bot username (ex: sn_market_bot)',
        // 
        send_desc: "Sotuvchiga xabarlar",
        // 
        send_recontact_order: 'Qayta aloqa',
        send_recontact_order_desc: "Oqim orqali qayta aloqa uchun buyurtma bo'lganda sotuvchiga bot orqali yetkazish",
        // 
        send_new_order: 'Yangi buyurtma',
        send_new_order_desc: "Oqim orqali yangi buyurtma bo'lganda sotuvchiga bot orqali yetkazish",
        // 
        send_success_order: "Qabul qilingan buyurtma",
        send_success_order_desc: "Oqim orqali buyurtma qabul qilinsa bo'lganda sotuvchiga bot orqali yetkazish",
        // 
        send_archived_order: "Arxivlangan buyurtma",
        send_archived_order_desc: "Oqim orqali buyurtma arxivlansa sotuvchiga bot orqali yetkazish",
        // 
        send_copy_order: "Dubl buyurtma",
        send_copy_order_desc: "Oqim orqali buyurtma dubl deb topilsa sotuvchiga bot orqali yetkazish",
        // 
        send_rejected_order: "Bekor qilingan buyurtma",
        send_rejected_order_desc: "Oqim orqali buyurtma bekor qilinsa sotuvchiga bot orqali yetkazish",
        // 
        send_sended_order: "Yuborilgan buyurtma",
        send_sended_order_desc: "Oqim orqali buyurtma mijozga yuborilsa sotuvchiga bot orqali yetkazish",
        // 
        send_delivered_order: "Yetkazilgan buyurtma",
        send_delivered_order_desc: "Oqim orqali buyurtma mijozga yetkazilsa sotuvchiga bot orqali yetkazish",
        // 
        send_plus_balance: "Hisobga pul qoshilishi",
        send_plus_balance_desc: "Oqim orqali buyurtma mijozga yetkazilsa sotuvchi hisobiga pul qo'shilgani to'g'risida bot orqali yetkazish",
        // OPERATOR DIST
        oper_desc: "Operator uchun",
        min_oper_payment: "Pul yechish minimal",
        max_oper_payment: "Pul yechish maksimal",
        auto_dist: "Avto taqsimlash",
        auto_dist_desc: "Yangi buyurtma tushganda operatorlarga avtomatik taqsimlash",
        type_dist: 'Taqsimlash turi',//order_count, rating
        type_dis_order_count: 'Buyurtmalar eng kamiga',
        type_dis_rating: 'Reyting eng balandiga',
        // FOR USERS & SELLERS
        user_desc: "Foydalanuvchi & Sotuvchilar",
        register: "Ro'yhatdan o'tish",
        next_order: "Buyurtma oraligi ( Minut )",
        shopping_cart: "Savatcha",
        auto_stream: "Avto oqim",
        open_stream: "Oqim ochish",
        stream_dist: 'Oqim pulini taqsimlash',//first_product, all_product,
        stream_dist_first: "Savatchadagi birinchidan",
        stream_dist_all: "Savatchadagi barchasidan",
        // 
        min_payment: "Minimal pul yechish",
        max_payment: "Maksimal pul yechish",
        currency: "Valyuta",//USD, SO'M, UZS, RUB, UER
        coins: "Coin tizimi",
        send_coins: "Coin yuborish",
        sms_duration: "Sms yuborish oraliq vaqti ( Minut )",
        // ORDERS
        auto_new: "Qayta aloqadan yangiga avto o'tkazish",
        auto_new_time: "Qayta aloqadan yangiga har necha minutda",
        // SITE
        operator_working: "Operator paneli",
        courier_working: "Kuryer paneli",
        client_working: "Foydalanuvchi paneli",
        seller_working: "Sotuvchi paneli",
        // 
        logo: 'Logo(287x60)px',
        mobile_logo: 'Mobil logo(60x60)px',
    },
    categories: {
        title_: "Kategoriyalar",
        id: "ID",
        title: "Nomi",
        image: "Rasmi",
        products: "Mahsulotlar",
        status: "Status",
        save: "Saqlash",
        back: "Ortga"
    },
    menu: {
        dashboard: "Dashboard",
        settings: "Sozlamalar",
        categories: "Kategoriyalar"
    }
}