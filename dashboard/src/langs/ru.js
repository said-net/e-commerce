export default {
    title: 'ru',
    auth: {
        rules: "Все IP-адреса активности сохраняются!",
        username: "Имя пользователя(Username)",
        password: "Пароль",
        remember: "Доверенное устройство (не завершать сеанс на этом устройстве)",
        submit: "Входить"
    },
    codes: {
        '99': 'Проверьте соединение и повторите попытку',
        '100': "Продолжить",
        '101': "Протоколы переключения",
        '102': "Переработка",
        '103': "Начальные советы",
        // 200
        "200": "Успешный",
        '201': "Создано",
        '202': "Принято",
        '203': "Несанкционированные данные",
        '204': "Нет контента",
        '205': "Восстановить контент",
        '206': "Частичное содержимое",
        '206': "IM используется",
        '299':"Авторизовать!",
        // 300
        "300": "Множественный выбор",
        '301': "Переехал навсегда",
        '302': "Найден",
        '303': "Поищите в другом месте",
        '304': "Не изменено",
        '307': "Временное перенаправление",
        '308': "Постоянное перенаправление",
        // 400
        '400': "Ошибка запроса или строки не заполнены",
        '401': "Разрешение недоступно",
        '402': "Требуется оплата",
        '403': "Запрещено",
        '404': "Не Найдено",
        '405': "Метод не разрешен",
        '406': "Не принято",
        '407': "Требуется аутентификация прокси",
        '408': "Тайм-аут запроса",
        '409': "Конфликт",
        '410': "Ушел",
        '411': "Требуемая длина",
        '412': "Предварительное условие не выполнено",
        "413": "Содержимое слишком велико",
        '414': "URI слишком длинный",
        '415': "Неподдерживаемый тип носителя",
        '416': "Диапазон неудовлетворительный",
        '417': "Ожидание не удалось",
        '421': "Неверно направленный запрос",
        '422': "Содержимое не может быть обработано",
        '423': "Заблокировано",
        '424': "Не удалось установить зависимость",
        "425": "Слишком рано",
        '426': "Требуется обновление",
        '428': "Требуется предварительное условие",
        '429': "Слишком много запросов",
        '431': "Поля заголовка запроса слишком велики",
        '451': "Недоступно по юридическим причинам",
        // 500
        '500': 'внутренняя ошибка сервера',
        '501': "Не удалось реализовать",
        '502': "Неверный шлюз",
        '503': "Сервис не работает",
        '504': "Тайм-аут шлюза истек",
        '505': "HTTP-версия не поддерживается",
        '506': "Опцион также торгуется",
        '507': "Недостаточно памяти",
        '508': "Обнаружен цикл (бесконечный запрос)",
        '509': "Требуется сетевая аутентификация"
    },
    settings: {
        title: "Настройки",
        site_desc: "Настройки сайта",
        bot_token: 'Токен TG-бота',
        bot_username: 'Имя пользователя бота TG (например: sn_market_bot)',
        // 
        send_desc: "Сообщения продавцу",
        // 
        send_recontact_order: 'Обратная связь',
        send_recontact_order_desc: "Отправка ботом продавцу при наличии заказа для обратной связи через поток",
        // 
        send_new_order: 'Новый заказ',
        send_new_order_desc: "Отправка ботом продавцу при появлении нового заказа через поток",
        // 
        send_success_order: "Заявка принята",
        send_success_order_desc: "Отправка продавцу через бота при получении заказа через поток.",
        // 
        send_archived_order: "Архивированный заказ",
        send_archived_order_desc: "Если заказ заархивирован через поток, его доставит продавцу бот.",
        // 
        send_copy_order: "Двойной заказ",
        send_copy_order_desc: "Отправка продавцу через бота, если заказ через стрим окажется дубликатом",
        // 
        send_rejected_order: "Отмененный заказ",
        send_rejected_order_desc: "Отправка бота продавцу при отмене заказа через стрим",
        // 
        send_sended_order: "Заказ отправлен",
        send_sended_order_desc: "Если заказ отправляется потоком покупателю, отправьте его продавцу через бота.",
        // 
        send_delivered_order: "Товар доставлен",
        send_delivered_order_desc: "Если заказ доставляется покупателю через поток, отправьте его продавцу через бота.",
        // 
        send_plus_balance: "Пополнение счета",
        send_plus_balance_desc: "Когда заказ будет доставлен покупателю через поток, бот отправит уведомление о том, что деньги зачислены на счет продавца.",
        // OPERATOR DIST
        oper_desc: "Для оператора",
        min_oper_payment: "Вывод минимальный",
        max_oper_payment: "Вывод максимальный",
        auto_dist: "Автоматическое распространение",
        auto_dist_desc: "Автоматическая раздача операторам после получения нового заказа",
        type_dist: 'Тип распространения',//order_count, rating
        type_dis_order_count: 'Заказы по минимуму',
        type_dis_rating: 'Рейтинг на высший балл',
        // FOR USERS & SELLERS
        user_desc: "Пользователи и продавцы",
        register: "Зарегистрироваться",
        next_order: "Интервал заказа (минуты)",
        shopping_cart: "Корзина",
        auto_stream: "Авто поток",
        open_stream: "Открыть поток",
        stream_dist: 'Распределение денежных потоков',//first_product, all_product,
        stream_dist_first: "С первого в корзине",
        stream_dist_all: "Из всего в корзине",
        // 
        min_payment: "Минимальный вывод",
        max_payment: "Максимальная вывод",
        currency: "Валюта",//USD, SO'M, UZS, RUB, UER
        coins: "Система coin",
        send_coins: "Отправить coin",
        sms_duration: "Интервал отправки СМС (минуты)",
        // ORDERS
        auto_new: "Автоматический переход с вернуться на связь на новое",
        auto_new_time: "Каждые несколько минут после повторного подключения к новому",
        // SITE
        operator_working: "Панель оператора",
        courier_working: "Курьерская панель",
        client_working: "Панель пользователя",
        seller_working: "Панель продавца",
        // 
        logo: 'Логотип (287x60) пикселей',
        mobile_logo: 'Мобильный логотип (60x60) пикселей',
    },
    menu: {
        dashboard: "Панель",
        settings: "Настройки",
        categories: "Категории"
    }
}