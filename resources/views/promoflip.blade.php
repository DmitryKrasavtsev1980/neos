<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Профессиональный анализ рынка недвижимости</title>
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            min-height: 100vh;
            color: #333;
        }

        .page {
            display: none;
            min-height: 100vh;
            padding: 20px;
            animation: fadeIn 0.5s ease-in;
        }

        .page.active {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .container {
            max-width: 600px;
            width: 100%;
            background: white;
            border-radius: 20px;
            padding: 30px 25px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        h1 {
            font-size: 28px;
            font-weight: 800;
            color: #1e3c72;
            margin-bottom: 20px;
            line-height: 1.2;
        }

        h2 {
            font-size: 22px;
            font-weight: 700;
            color: #333;
            margin: 20px 0 15px;
        }

        h3 {
            font-size: 20px;
            font-weight: 700;
            color: #2a5298;
            margin: 15px 0 10px;
        }

        p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 15px;
            color: #555;
        }

        .highlight {
            background: linear-gradient(120deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
        }

        .emoji {
            font-size: 1.3em;
            margin: 0 3px;
        }

        .btn {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 18px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 18px;
            margin-top: 25px;
            cursor: pointer;
            border: none;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
            transition: all 0.3s ease;
            text-align: center;
            width: 100%;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        ul {
            list-style: none;
            padding: 0;
        }

        li {
            padding: 10px 0;
            padding-left: 30px;
            position: relative;
            font-size: 16px;
            line-height: 1.6;
            color: #555;
        }

        li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #667eea;
            font-weight: bold;
            font-size: 20px;
        }

        .price-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
            text-align: center;
        }

        .price-box h3 {
            font-size: 24px;
            margin-bottom: 10px;
            color: white;
        }

        .price-box p {
            color: white;
            opacity: 0.9;
            margin-bottom: 10px;
        }

        .price-box .old-price {
            text-decoration: line-through;
            opacity: 0.7;
            font-size: 18px;
        }

        .price-box .new-price {
            font-size: 32px;
            font-weight: 800;
            margin: 10px 0;
        }

        .case {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
            margin: 10px 0;
            border-left: 4px solid #667eea;
        }

        .case h4 {
            color: #1e3c72;
            margin-bottom: 10px;
            font-size: 18px;
        }

        .case p {
            margin-bottom: 8px;
            font-size: 15px;
        }

        .steps {
            counter-reset: step-counter;
        }

        .step {
            position: relative;
            padding-left: 40px;
            margin: 15px 0;
            counter-increment: step-counter;
        }

        .step:before {
            content: counter(step-counter);
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .warning {
            background: #fff3cd;
            border: 2px solid #ffc107;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .warning p {
            color: #856404;
            margin-bottom: 10px;
        }

        .success {
            background: #d4edda;
            border: 2px solid #28a745;
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .success p {
            color: #155724;
            margin-bottom: 10px;
        }

        .final-cta {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            margin-top: 30px;
        }

        .final-cta h2 {
            color: white;
            margin-bottom: 20px;
        }

        .final-cta p {
            color: white;
            opacity: 0.95;
        }

        .final-cta .btn {
            background: white;
            color: #667eea;
            margin-top: 20px;
        }

        .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }

        .comparison-item {
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }

        .comparison-bad {
            background: #f8d7da;
            border: 2px solid #dc3545;
        }

        .comparison-bad h4 {
            color: #721c24;
        }

        .comparison-good {
            background: #d4edda;
            border: 2px solid #28a745;
        }

        .comparison-good h4 {
            color: #155724;
        }

        .page-image {
            width: 100%;
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            margin: 25px 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .hero-image {
            width: 100%;
            max-width: 100%;
            height: auto;
            border-radius: 15px;
            margin: 30px 0 25px 0;
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .portrait-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            margin: 20px auto;
            display: block;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
            object-fit: cover;
        }

        @media (max-width: 480px) {
            h1 { font-size: 24px; }
            h2 { font-size: 20px; }
            .container { padding: 20px 15px; }
            .comparison { grid-template-columns: 1fr; }
            .portrait-image {
                width: 150px;
                height: 150px;
            }
        }
    </style>
    @if(config('app.env') == 'production')
        <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            var z = null;m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(90242859, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
        </script>
        <noscript><div><img src="https://mc.yandex.ru/watch/90242859" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    @endif
</head>
<body>
    <!-- Страница 1: ИНТРИГА -->
    <div class="page active" id="page1">
        <div class="container">
            <h1><span class="emoji">🏗️</span> Секретный инструмент для расчёта доходности флип-проектов ДО покупки объекта</h1>

            <p><strong>Появился инструмент, который позволяет за 48 часов просчитать реальную прибыль флип-проекта:</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 1: График доходности флип-проекта -->
            <!-- ПРОМПТ: Real estate flip project profitability calculator dashboard on laptop screen, showing profit margins, ROI calculations, property price charts before and after renovation, clean modern financial interface with green positive numbers, blue and purple gradient, professional business photography, 4K quality -->
            <img src="{{ asset('images/promost1-1.png') }}" alt="Калькулятор доходности флип-проекта" class="hero-image">

            <p>Причём работает он даже для тех, кто делает первый флип. Вы получаете такой же профессиональный анализ, как у опытных флипперов с портфелем на десятки миллионов.</p>

            <p><strong>Для кого это актуально:</strong></p>
            <ul>
                <li><strong>Начинающим флипперам</strong> - избежать убыточного первого проекта, купить объект с реальным потенциалом прибыли</li>
                <li><strong>Опытным инвесторам</strong> - подтвердить расчёты объективными данными, не полагаться только на интуицию</li>
                <li><strong>Масштабирующим флипперам</strong> - быстро оценивать десятки объектов, фокусироваться только на прибыльных проектах</li>
            </ul>

            <h2>Как просчитать доходность флип-проекта:</h2>
            <div class="steps">
                <div class="step">Вы выбираете объект для покупки под ремонт и заказываете анализ</div>
                <div class="step">Получаете реальные цены продажи в сегменте за последний год</div>
                <div class="step">Видите сроки продажи аналогичных квартир (от недели до полугода)</div>
                <div class="step">Вводите стоимость покупки и ремонта в калькулятор</div>
                <div class="step">Получаете прогноз прибыли с учётом всех расходов (налоги, ипотека, риски)</div>
            </div>

            <p><span class="emoji">🔥</span> <strong>Главная особенность:</strong> вы видите РЕАЛЬНУЮ цену продажи после ремонта ДО покупки объекта. Это как иметь машину времени для флип-проекта!</p>

            <button class="btn" onclick="showPage(2)">Что за инструмент такой?</button>
        </div>
    </div>

    <!-- Страница 2: ПРОБЛЕМАТИЗАЦИЯ -->
    <div class="page" id="page2">
        <div class="container">
            <h1><span class="emoji">💸</span> Почему 30% флип-проектов уходят в убыток (и как этого избежать)</h1>

            <p><strong>Раскрываю шокирующую правду о том, почему флипперы теряют деньги!</strong></p>

            <p>Знаете, что происходит, когда флиппер покупает квартиру "под ремонт"?</p>

            <p><span class="emoji">😤</span> Он верит риелтору на слово: "После ремонта продашь за 7 млн, вложишь 1.5 млн - заработаешь миллион!" А потом выясняется, что в этом доме квартиры после ремонта продаются за 6.5 млн... И то, если повезёт с покупателем.</p>

            <div class="warning">
                <p><strong>Реальный пример:</strong></p>
                <p>Флиппер Алексей купил "убитую" двушку за 4 млн руб. План был простой:</p>
                <p>💰 Покупка: 4 млн</p>
                <p>🔨 Ремонт: 1.5 млн</p>
                <p>📈 Продажа (по словам риелтора): 7 млн</p>
                <p>💵 Прибыль на бумаге: 1.5 млн</p>
                <p><strong>Реальность:</strong> Квартира продавалась 8 месяцев за 6.2 млн. Ипотека и налоги "съели" всю прибыль. <span style="color: #dc3545; font-weight: bold;">Итог: УБЫТОК</span></p>
            </div>

            <!-- ИЗОБРАЖЕНИЕ 2: Флиппер в замешательстве с расчётами -->
            <!-- ПРОМПТ: Real estate investor stressed looking at laptop and papers with financial calculations, confused expression, hands on head, scattered renovation receipts and property documents with red negative numbers, calculator, stress and frustration concept, natural office lighting, photorealistic, business photography, 35mm lens, 4K quality -->
            <img src="{{ asset('images/promost2-1.png') }}" alt="Флиппер в замешательстве от убыточного проекта" class="page-image">

            <p><span class="emoji">🤬</span> <strong>Почему так получается?</strong> Риелтор называет цену НЕ на основе фактов, а на основе "кейсов", которые он видел 2 года назад. Или просто хочет заработать комиссию с продажи "убитой" квартиры!</p>

            <p><span class="emoji">😡</span> <strong>А знаете самое возмутительное?</strong> Флипперы вкладывают СВОИ деньги в ремонт, берут ипотеку, тратят время... А потом узнают, что изначально купили по завышенной цене!</p>

            <h2>Задайте себе неудобные вопросы:</h2>
            <p><strong>🤔 За сколько РЕАЛЬНО продаются квартиры после ремонта в этом доме? Видели данные?</strong></p>

            <p><strong>🤔 Сколько времени уходит на продажу? Месяц или полгода? А ведь ипотека идёт каждый месяц!</strong></p>

            <p><strong>🤔 Учли ли вы ВСЕ расходы: налоги 13%, агентскую комиссию, ипотеку за время продажи?</strong></p>

            <p><strong>🤔 Есть ли вообще спрос на квартиры после ремонта в этом районе прямо СЕЙЧАС?</strong></p>

            <div class="case">
                <h4>Страшная статистика по флиппингу:</h4>
                <p>📊 <strong>30%</strong> флип-проектов убыточны из-за неправильной оценки цены продажи</p>
                <p>📊 <strong>40%</strong> флипперов переплачивают за объекты из-за завышенных ожиданий</p>
                <p>📊 <strong>60%</strong> проектов затягиваются на 6+ месяцев, "съедая" всю прибыль</p>
                <p>📊 В среднем флиппер теряет <strong>300-800 тысяч рублей</strong> на одном провальном проекте</p>
            </div>

            <p><span class="emoji">⚡</span> <strong>Но теперь есть решение, которое спасает флипперов от убытков!</strong></p>

            <p>Инструмент, который показывает РЕАЛЬНУЮ цену продажи ПЕРЕД покупкой объекта. Данные вместо догадок риелтора. Цифры вместо "у меня был кейс".</p>

            <button class="btn" onclick="showPage(3)">Хм... интересно... Хочу узнать подробнее!</button>
        </div>
    </div>

    <!-- Страница 3: СТОРИТЕЛЛИНГ -->
    <div class="page" id="page3">
        <div class="container">
            <h1><span class="emoji">🤝</span> Как убыточный флип-проект на 8 месяцев привёл к созданию калькулятора доходности</h1>

            <p><strong>Короткая история о том, почему я создал этот инструмент</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 3: Портрет эксперта по недвижимости -->
            <!-- ПРОМПТ: Professional portrait of confident 38-year-old Russian real estate expert entrepreneur, smart casual business attire, standing with crossed arms in front of modern apartment building, friendly but professional expression, natural daylight, photorealistic, corporate portrait style, shot on Canon 85mm f/1.4, 4K quality, shallow depth of field -->
            <img src="{{ asset('images/promost3-1.png') }}" alt="Дмитрий Красавцев - создатель калькулятора доходности" class="portrait-image">

            <p>Меня зовут Дмитрий Красавцев, я в недвижимости с 2011 года. За это время провёл более 150 сделок и 200+ оценок по всей России.</p>

            <p><span class="emoji">😱</span> <strong>Переломный момент:</strong> В 2022 году ко мне обратился начинающий флиппер Алексей. Он уже купил квартиру под ремонт за 4 млн, вложил 1.5 млн в ремонт, и пытался продать. Квартира провисела в продаже 8 месяцев и ушла за 6.2 млн. После вычета ипотеки и налогов - убыток. Без анализа ДО покупки флиппер потерял все вложения.</p>

            <p><span class="emoji">💡</span> Тогда я понял: флипперам нужен инструмент для расчёта доходности ДО покупки объекта. Я создал систему анализа рынка, которая показывает реальные цены продажи и сроки. Теперь флипперы считают прибыль заранее, а не гадают "а вдруг получится".</p>

            <div class="success">
                <p><strong>Результаты использования системы:</strong></p>
                <p>✅ <strong>200+ анализов</strong> для флип-проектов по всей России</p>
                <p>✅ <strong>Средняя экономия</strong> 300-800 тыс руб на отказе от невыгодных проектов</p>
                <p>✅ <strong>Точность прогноза</strong> цены продажи: погрешность до 3%</p>
                <p>✅ <strong>Экономия времени:</strong> анализ за 48 часов вместо недель ручного сбора</p>
            </div>

            <h2>Что больше НЕ нужно делать:</h2>
            <ul>
                <li>❌ НЕ нужно верить риелтору на слово "после ремонта продашь за 7 млн"</li>
                <li>❌ НЕ нужно покупать объект под флиппинг без расчёта реальной прибыли</li>
                <li>❌ НЕ нужно тратить недели на ручной сбор и анализ объявлений</li>
                <li>❌ НЕ нужно полагаться на интуицию и "я посмотрел пару объектов"</li>
                <li>❌ НЕ нужно рисковать сотнями тысяч из-за неправильной оценки доходности</li>
            </ul>

            <p><span class="emoji">😎</span> <strong>Секрет прибыльных флип-проектов прост:</strong> Знать реальную цену продажи ДО покупки объекта. Если прогноз показывает прибыль 15%+ с учётом всех расходов - проект стоит делать. Если меньше - лучше поискать другой объект.</p>

            <button class="btn" onclick="showPage(4)">Пора узнать, что это за инструмент!</button>
        </div>
    </div>

    <!-- Страница 4: ОСОЗНАНИЕ -->
    <div class="page" id="page4">
        <div class="container">
            <h1><span class="emoji">🎯</span> Стоп! Осознайте момент!</h1>

            <p><strong>Включите осознанность и посмотрите, что происходит прямо сейчас с вашим подходом к флип-проектам!</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 4: Флиппер задумывается над расчётами -->
            <!-- ПРОМПТ: Real estate investor entrepreneur pausing to think, leaning back in office chair with hands behind head in contemplation pose, laptop showing property analysis data on desk, modern bright office with city view, moment of clarity and awareness, natural daylight, cinematic photography, thoughtful expression, business lifestyle, shot on 50mm f/1.8, 4K quality -->
            <img src="{{ asset('images/promost4-1.png') }}" alt="Момент осознания для флиппера" class="page-image">

            <p>Остановитесь на секунду. Откиньтесь на спинку стула. Сделайте глубокий вдох.</p>

            <p><span class="emoji">😮</span> Буквально 5 минут назад вы не знали, что можно просчитать доходность флип-проекта ДО покупки объекта на основе реальных данных продаж.</p>

            <p>А сейчас вы уже:</p>
            <ul>
                <li>✅ Понимаете, почему 30% флип-проектов уходят в убыток</li>
                <li>✅ Знаете реальную историю Алексея, который потерял все вложения</li>
                <li>✅ Осознаёте масштаб рисков (убыток 300-800 тыс руб на одном проекте)</li>
                <li>✅ Видите, что прибыль флиппа можно просчитать заранее</li>
                <li>✅ Читаете четвёртую страницу подряд!</li>
            </ul>

            <p>Вы погружаетесь всё глубже в понимание того, как профессиональные флипперы принимают решения на основе данных, а не интуиции <span class="emoji">🐰</span></p>

            <div class="warning">
                <p><strong>Я специально веду вас по этому пути.</strong></p>
                <p>Каждая страница - это шаг к пониманию, как отличить прибыльный флип-проект от убыточного. Я использую проверенную методику вовлечения, которая помогает вам САМОСТОЯТЕЛЬНО прийти к правильному выводу о ценности анализа.</p>
            </div>

            <h2>Ответьте себе честно:</h2>
            <p><strong>1. Вы хотели бы знать реальную цену продажи ПОСЛЕ ремонта ДО покупки объекта?</strong></p>

            <p><strong>2. Вам важно не потерять сотни тысяч на убыточном флип-проекте?</strong></p>

            <p><strong>3. Вы готовы принимать решения на основе данных, а не на словах риелтора "после ремонта продашь за 7 млн"?</strong></p>

            <p>Если хотя бы на один вопрос вы ответили "ДА" - вы готовы узнать об инструменте, который используют профессиональные флипперы для расчёта доходности!</p>

            <p><span class="emoji">🎓</span> Это не магия и не секретная методика. Это просто ДАННЫЕ о реальных продажах. Огромный массив данных, правильно обработанных и представленных в понятном виде с расчётом вашей прибыли.</p>

            <button class="btn" onclick="showPage(5)">Показывайте инструмент! Готов узнать</button>
        </div>
    </div>

    <!-- Страница 5: ПРЕЗЕНТАЦИЯ -->
    <div class="page" id="page5">
        <div class="container">
            <h1><span class="emoji">💎</span> Калькулятор доходности флип-проектов на основе реальных данных</h1>

            <p><strong>Вы сейчас находитесь на презентации инструмента, который даёт вам "рентген" доходности флип-проекта ДО покупки объекта!</strong></p>

            <p>И да, эти 6 страниц - это тоже часть демонстрации. Пошаговое вовлечение, построение доверия, презентация решения. Именно так работает профессиональный маркетинг и продажа флип-проектов.</p>

            <h2>Что такое "Анализ доходности флип-проекта":</h2>

            <p>Это комплексный отчёт объёмом <strong>5 страниц</strong>, который показывает реальную прибыль вашего флип-проекта:</p>

            <!-- ИЗОБРАЖЕНИЕ 5: Скриншот отчёта с расчётами доходности -->
            <!-- ПРОМПТ: Professional real estate market analysis report displayed on laptop and tablet screens, showing interactive charts of property prices, profitability calculations with green profit margins, data tables with sold properties, market liquidity graphs, price trend analytics, clean modern dashboard interface, financial data visualization, blue and purple gradient, high-tech business photography, 4K quality, sharp details -->
            <img src="{{ asset('images/promost5-1.png') }}" alt="Пример отчёта анализа доходности флип-проекта" class="hero-image">

            <div class="steps">
                <div class="step"><strong>Карта сегмента с выделенными домами</strong> - визуальное отображение сегмента для точного сравнительного анализа. Вы видите, где находятся конкуренты и проданные объекты</div>
                <div class="step"><strong>Таблица всех объектов за год</strong> - ВСЕ продажи за год: цены, сроки, изменения цены, фото для оценки состояния. Вы видите РЕАЛЬНЫЕ цены продажи, а не желания продавцов</div>
                <div class="step"><strong>График ликвидности сегмента</strong> - сколько объектов продаётся по месяцам. Вы понимаете, за какой срок продастся ваша квартира после ремонта (неделя или полгода)</div>
                <div class="step"><strong>График реальных продаж</strong> - последние цены перед снятием объектов. Вы видите коридор цен продажи и можете рассчитать прибыль с погрешностью до 3%</div>
                <div class="step"><strong>График изменения средней цены</strong> - разница между желаниями продавцов и реальными покупками. Вы понимаете, на сколько снижать цену для быстрой продажи</div>
            </div>

            <h2>Что даёт флипперу этот анализ:</h2>

            <div class="case">
                <h4>🏗️ Расчёт доходности ДО покупки объекта:</h4>
                <p>Вы точно знаете, за сколько продастся квартира после ремонта. Вводите стоимость покупки и ремонта в калькулятор - получаете прогноз чистой прибыли с учётом налогов, ипотеки и рисков.</p>
                <p><strong>Предотвращение убытков:</strong> экономия 300-800 тысяч рублей на отказе от провальных проектов</p>
            </div>

            <div class="case">
                <h4>💰 Оценка сроков продажи и оборачиваемости капитала:</h4>
                <p>Видите реальный спрос в сегменте. Понимаете, за какой срок продастся объект (от недели до полугода). Рассчитываете годовую доходность с учётом оборачиваемости капитала.</p>
                <p><strong>Экономия времени и денег:</strong> избегаете зависания объекта на рынке на 6-12 месяцев с выплатами по ипотеке</p>
            </div>

            <h2>Технология сбора данных:</h2>
            <ul>
                <li>✅ Парсинг ЦИАН и Авито за последний год</li>
                <li>✅ Удаление дублей и фильтрация аномалий</li>
                <li>✅ Отслеживание истории изменения цены каждого объекта</li>
                <li>✅ Визуализация данных в графиках и интерактивных таблицах</li>
            </ul>

            <p><span class="emoji">🔥</span> Это как иметь собственного аналитика, который месяц собирал данные по всем продажам в вашем сегменте и рассчитал прибыль флип-проекта!</p>

            <div class="success">
                <p><strong>Время подготовки отчёта: 48 часов</strong></p>
                <p>✅ HTML-файл с интерактивными графиками и таблицами</p>
                <p>✅ Калькулятор доходности для расчёта прибыли</p>
                <p>✅ Данные по 100+ объектам в сегменте за последний год</p>
            </div>

            <button class="btn" onclick="showPage(6)">Узнать стоимость анализа</button>
        </div>
    </div>

    <!-- Страница 6: ОФФЕР -->
    <div class="page" id="page6">
        <div class="container">
            <h1><span class="emoji">🎁</span> Получите анализ доходности вашего флип-проекта</h1>

            <p><strong>Рассчитайте прибыль ДО покупки объекта - снизьте риски убытков с 30% до 3%!</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 6: Успешный флиппер с отчётом о доходности -->
            <!-- ПРОМПТ: Successful real estate flipper entrepreneur celebrating profit, looking at laptop screen showing property analysis with positive ROI numbers and charts, happy satisfied expression, modern bright office, handshake gesture or thumbs up, professional business photography, victory and success concept, natural daylight, shot on 35mm lens, 4K quality, shallow depth of field -->
            <img src="{{ asset('images/promost6-2.png') }}" alt="Успешный расчёт доходности флип-проекта" class="page-image">

            <h2>Что вы получаете в отчёте:</h2>
            <ul>
                <li>✅ <strong>HTML-отчёт на 5 страниц</strong> с интерактивными графиками и реальными данными продаж</li>
                <li>✅ <strong>Калькулятор доходности</strong> - рассчитываете прибыль с учётом покупки, ремонта, налогов и ипотеки</li>
                <li>✅ <strong>Таблица всех объектов за год</strong> - ссылки на объявления, фото, история изменения цен</li>
                <li>✅ <strong>График ликвидности</strong> - сроки продажи аналогичных квартир (от недели до полугода)</li>
                <li>✅ <strong>График реальных продаж</strong> - коридор цен для расчёта прибыли с точностью до 3%</li>
                <li>✅ <strong>Карта сегмента</strong> - визуализация конкурентов и проданных объектов</li>
                <li>✅ <strong>Бесплатная видео-консультация 15 минут</strong> - детальный разбор отчёта и ответы на вопросы</li>
            </ul>

            <h2>Доказательства эффективности для флипперов:</h2>

            <div class="success">
                <p><strong>📊 Статистика использования системы:</strong></p>
                <p>✅ <strong>200+ анализов</strong> для флип-проектов по всей России</p>
                <p>✅ <strong>Средняя экономия</strong> на отказе от невыгодных проектов: 300-800 тыс руб</p>
                <p>✅ <strong>Точность прогноза</strong> цены продажи после ремонта: погрешность до 3%</p>
                <p>✅ <strong>Время анализа:</strong> 48 часов вместо недель ручного сбора данных</p>
            </div>

            <div class="case">
                <h4>🏗️ Как флипперы используют анализ:</h4>
                <p><strong>ДО покупки объекта:</strong> Вы видите реальные цены продажи аналогов после ремонта за последний год. Вводите в калькулятор стоимость покупки (например, 4 млн) + стоимость ремонта (1.5 млн) = получаете прогноз чистой прибыли с учётом всех расходов.</p>
                <p><strong>Принятие решения:</strong> Если прогноз показывает прибыль 15%+ (750+ тыс руб) с учётом налогов и ипотеки - проект стоит делать. Если прогноз показывает прибыль менее 10% или убыток - отказываетесь от проекта и экономите 300-800 тыс руб.</p>
            </div>

            <div class="case">
                <h4>📊 Прозрачность данных - ключевое отличие:</h4>
                <p><strong>Вы видите ВСЕ данные:</strong> Ссылки на каждое объявление, фотографии объектов для оценки состояния, полная история изменения цен. Можете самостоятельно проверить каждую цифру в отчёте.</p>
                <p><strong>Понятная логика расчёта:</strong> Никаких "чёрных ящиков" ИИ. Вы понимаете, откуда берётся каждая цифра и можете скорректировать расчёт под свои условия (срок ипотеки, налоговый статус, скорость ремонта).</p>
            </div>

            <h2>Стоимость анализа:</h2>

            <div class="price-box">
                <h3>🏙️ Для регионов России</h3>
                <p>Все города кроме Москвы</p>
                <p class="old-price">Было: 10 000 руб</p>
                <p class="new-price">5 500 руб</p>
                <p>✓ Полный отчёт за 1-4 рабочих дня</p>
                <p>✓ HTML-файл с интерактивными графиками</p>
                <p>✓ Модуль сравнения или калькулятор доходности</p>
                <p>✓ Бесплатная видео-консультация 15 мин</p>
            </div>

            <div class="price-box">
                <h3>🏛️ Для Москвы</h3>
                <p>Специальная цена для столицы</p>
                <p class="old-price">Было: 10 000 руб</p>
                <p class="new-price">6 000 руб</p>
                <p>✓ Полный отчёт за 1-4 рабочих дня</p>
                <p>✓ HTML-файл с интерактивными графиками</p>
                <p>✓ Модуль сравнения или калькулятор доходности</p>
                <p>✓ Бесплатная видео-консультация 15 мин</p>
            </div>

            <div class="success">
                <p><strong>💰 Экономия до 45%!</strong> Старая цена была 10 000 рублей</p>
                <p><strong>🔄 Бонус:</strong> При повторном заказе анализа - скидка 10%</p>
                <p><strong>📊 Обновление отчёта:</strong> Можно обновить данные через время по индивидуальной стоимости</p>
            </div>

            <h2>Сравните со стоимостью ошибки в флип-проекте:</h2>

            <div class="comparison">
                <div class="comparison-item comparison-bad">
                    <h4>❌ Флип без анализа</h4>
                    <p>Риск убыточного проекта: 30%</p>
                    <p>Средний убыток: 300-800 тыс руб</p>
                    <p>+ Замороженный капитал на 6-12 мес</p>
                    <p><strong>Потенциальная катастрофа</strong></p>
                </div>
                <div class="comparison-item comparison-good">
                    <h4>✅ Флип с анализом</h4>
                    <p>Погрешность прогноза: до 3%</p>
                    <p>Стоимость анализа: 5 500 руб</p>
                    <p>Экономия на 1 отказе: 300-800 тыс</p>
                    <p><strong>ROI анализа: 5000%+</strong></p>
                </div>
            </div>

            <h2>Почему не бесплатные оценки?</h2>

            <div class="warning">
                <p><strong>🤖 Бесплатные ИИ-оценки на порталах - это "чёрный ящик":</strong></p>
                <ul style="text-align: left;">
                    <li>❌ Непонятная логика расчёта</li>
                    <li>❌ Нет данных для ручного анализа</li>
                    <li>❌ Невозможно проверить откуда взялась цена</li>
                    <li>❌ Просто выдумки ИИ без обоснования</li>
                </ul>
            </div>

            <div class="success">
                <p><strong>✅ Наш отчёт - полная прозрачность:</strong></p>
                <ul style="text-align: left;">
                    <li>✅ Ссылки на ВСЕ объявления из анализа</li>
                    <li>✅ Фотографии объектов для визуальной оценки</li>
                    <li>✅ Полная история изменения цен по каждому объекту</li>
                    <li>✅ Вы видите ВСЕ данные и можете проверить каждую цифру</li>
                    <li>✅ Понятная логика: вы ПОНИМАЕТЕ откуда берутся выводы</li>
                </ul>
            </div>

            <h2>Как получить анализ:</h2>

            <div class="steps">
                <div class="step">Оплачиваете анализ - 100% предоплата по СБП (по номеру телефона или QR-коду)</div>
                <div class="step">Отправляете данные об объекте (адрес, параметры)</div>
                <div class="step">Ждёте от 1 до 4 рабочих дней (зависит от загрузки)</div>
                <div class="step">Получаете HTML-отчёт на email или в мессенджер + комментарии со скринами интерфейса</div>
                <div class="step">Записываетесь на бесплатную 15-минутную видео-консультацию для детального разбора</div>
            </div>

            <div class="warning">
                <p><strong>⚡ География работы:</strong> По всей России - от Калининграда до Владивостока</p>
            </div>

            <h2>Три варианта действий прямо сейчас:</h2>

            <div class="success">
                <p><strong>Вариант 1: Скачать образец отчёта</strong></p>
                <p>Хотите увидеть, как выглядит отчёт и что в него входит? Скачайте реальный пример анализа рынка с объяснением каждого графика.</p>
            </div>

            <div class="success">
                <p><strong>Вариант 2: Бесплатная консультация (15 минут)</strong></p>
                <p>Запишитесь на видео-созвон. Расскажите о вашей ситуации, я объясню, что именно вы получите в отчёте и как это поможет именно вам.</p>
            </div>

            <div class="success">
                <p><strong>Вариант 3: Заказать анализ прямо сейчас</strong></p>
                <p>Если всё понятно и вы готовы получить объективные данные по вашему объекту - оформляйте заказ. Отчёт будет готов за 1-4 рабочих дня.</p>
            </div>

            <div class="final-cta">
                <h2>Перестаньте гадать - начните СЧИТАТЬ прибыль!</h2>
                <p><strong>Получите расчёт доходности флип-проекта на основе реальных данных продаж</strong></p>
                <p style="font-size: 18px; margin-top: 15px;">💰 Всего 5 500 руб (регионы) или 6 000 руб (Москва)</p>
                <p style="font-size: 14px; opacity: 0.9; margin-top: 10px;">Было 10 000 руб - экономия до 45% | Окупается с первого отказа от убыточного проекта</p>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')">Скачать образец отчёта</button>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')" style="margin-top: 10px; background: white; color: #667eea;">Записаться на консультацию (бесплатно)</button>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')" style="margin-top: 10px; background: rgba(255,255,255,0.15); border: 2px solid white; color: white;">Заказать анализ доходности</button>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                <p style="text-align: center; margin-bottom: 10px;">
                    <strong>Дмитрий Красавцев</strong><br>
                    Основатель сервиса НЕОС<br>
                    Разработчик IT-продуктов для анализа рынка недвижимости<br>
                    Опыт работы: с 2011 года<br>
                    📊 Проведено 150+ сделок по продаже<br>
                    📈 Выполнено 200+ профессиональных оценок в разных регионах России
                </p>
                <p style="text-align: center; font-size: 14px; color: #666; margin-top: 15px;">
                    Данные собираются из открытых источников: ЦИАН, Авито. Все данные проверяются вручную для обеспечения высокой точности анализа. В отчёте есть ссылки на все объявления и фотографии объектов.
                </p>
                <p style="text-align: center; font-size: 14px; color: #666; margin-top: 10px;">
                    <strong>Оплата:</strong> 100% предоплата по СБП (Система Быстрых Платежей) по номеру телефона или QR-коду<br>
                    <strong>Сроки:</strong> От 1 до 4 рабочих дней в зависимости от загрузки<br>
                    <strong>Формат:</strong> HTML-файл на email или в мессенджер + комментарии со скринами
                </p>
            </div>
        </div>
    </div>

    <script>
        function showPage(pageNum) {
            // Скрываем все страницы
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Показываем нужную страницу
            document.getElementById('page' + pageNum).classList.add('active');

            // Скроллим наверх
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Отслеживание для аналитики
            if (typeof gtag !== 'undefined') {
                gtag('event', 'page_view', {
                    'page_title': 'Page ' + pageNum,
                    'page_number': pageNum
                });
            }

            // Отслеживание для Яндекс.Метрики
            if (typeof ym !== 'undefined') {
                ym(90242859, 'reachGoal', 'page_' + pageNum);
            }
        }

        function showForm() {
            // Здесь добавьте интеграцию с вашей формой
            // Варианты:
            // 1. Показать модальное окно с формой
            // 2. Редирект на страницу с формой
            // 3. Открыть виджет чата/заявки

            alert('Здесь будет форма заявки.\n\nДобавьте интеграцию с:\n- CRM-системой (AmoCRM, Bitrix24)\n- Формой обратной связи\n- Виджетом связи\n- Или редирект на страницу заявки');

            // Пример редиректа:
            // window.location.href = 'https://ваш-сайт.ru/order-form';

            // Пример интеграции с виджетом:
            // if (typeof jivo_api !== 'undefined') {
            //     jivo_api.open();
            // }
        }

        // Отслеживание времени на странице
        let pageStartTime = Date.now();
        let currentPage = 1;

        document.addEventListener('DOMContentLoaded', function() {
            // Отслеживание глубины прокрутки
            window.addEventListener('scroll', function() {
                const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                if (scrollPercent > 75 && typeof gtag !== 'undefined') {
                    gtag('event', 'scroll_depth', {
                        'percent': 75,
                        'page': currentPage
                    });
                }
            });
        });
    </script>

    <!-- Cookie Consent Panel -->
    <div id="cookieBlock" style="display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); box-shadow: 0 -5px 20px rgba(0,0,0,0.3);">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
            <p style="color: white; margin: 0; font-size: 16px; flex: 1; min-width: 300px;">
                🍪 Мы используем файлы cookie для улучшения работы сайта и аналитики.
                <a href="#" id="cookiePolicyLink" style="color: #FFD700; text-decoration: underline; cursor: pointer;">Политика использования cookie</a>
            </p>
            <button type="button" id="cookieBlockButton" style="background: white; color: #667eea; border: none; border-radius: 8px; padding: 12px 30px; font-weight: bold; font-size: 16px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: all 0.3s;">
                Согласен
            </button>
        </div>
    </div>

    <!-- Cookie Policy Modal -->
    <div id="cookiePolicyModal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2000; background: rgba(0,0,0,0.7); align-items: center; justify-content: center; padding: 20px;">
        <div style="background: white; border-radius: 15px; max-width: 800px; max-height: 90vh; position: relative; box-shadow: 0 10px 40px rgba(0,0,0,0.3); display: flex; flex-direction: column;">
            <div style="overflow-y: auto; padding: 40px; padding-bottom: 20px;">
                <h2 style="color: #667eea; margin-top: 0; margin-bottom: 20px; font-size: 24px;">Политика использования файлов cookie</h2>

                <p style="color: #333; line-height: 1.6; margin-bottom: 15px;">Настоящая Политика определяет порядок использования файлов cookie при посещении страниц, управляемых <strong>Индивидуальным предпринимателем Красавцев Дмитрий Анатольевич</strong> (далее — Оператор).</p>

                <h3 style="color: #667eea; margin-top: 25px; margin-bottom: 10px; font-size: 18px;">1. Что такое cookie</h3>
                <p style="color: #333; line-height: 1.6; margin-bottom: 15px;">Файлы cookie — это небольшие фрагменты данных, отправляемые веб-сервером и сохраняемые на устройстве пользователя. Они позволяют распознавать устройство пользователя, сохранять пользовательские настройки и собирать аналитические сведения о посещении страниц.</p>

                <h3 style="color: #667eea; margin-top: 25px; margin-bottom: 10px; font-size: 18px;">2. Какие cookie используются</h3>
                <p style="color: #333; line-height: 1.6; margin-bottom: 10px;">На сайтах и посадочных страницах, принадлежащих Оператору, могут использоваться следующие типы cookie:</p>
                <ul style="color: #333; line-height: 1.8; margin-bottom: 15px; padding-left: 20px;">
                    <li><strong>Технические cookie</strong> — обеспечивают корректную работу сайта и его элементов.</li>
                    <li><strong>Аналитические cookie</strong> — позволяют собирать обезличенные данные о поведении пользователей с целью улучшения структуры и контента сайта (например, Яндекс.Метрика).</li>
                    <li><strong>Функциональные cookie</strong> — позволяют запоминать настройки пользователя (например, язык, регион).</li>
                    <li><strong>Маркетинговые cookie</strong> — используются только при подписке на лид-магниты через Email или Telegram-бот, чтобы учитывать интерес к продуктам.</li>
                </ul>

                <h3 style="color: #667eea; margin-top: 25px; margin-bottom: 10px; font-size: 18px;">3. Цель обработки</h3>
                <p style="color: #333; line-height: 1.6; margin-bottom: 10px;">Сбор и использование cookie осуществляется для:</p>
                <ul style="color: #333; line-height: 1.8; margin-bottom: 15px; padding-left: 20px;">
                    <li>анализа поведения посетителей;</li>
                    <li>повышения удобства пользования сайтом;</li>
                    <li>предоставления персонализированного контента;</li>
                    <li>маркетингового взаимодействия в пределах согласия пользователя.</li>
                </ul>

                <h3 style="color: #667eea; margin-top: 25px; margin-bottom: 10px; font-size: 18px;">4. Управление cookie</h3>
                <p style="color: #333; line-height: 1.6; margin-bottom: 15px;">Пользователь может в любой момент изменить настройки браузера и ограничить или полностью отключить использование cookie. Однако это может повлиять на доступность или корректность отображения отдельных элементов сайта.</p>

                <h3 style="color: #667eea; margin-top: 25px; margin-bottom: 10px; font-size: 18px;">5. Согласие пользователя</h3>
                <p style="color: #333; line-height: 1.6; margin-bottom: 15px;">Продолжая использовать сайт, пользователь подтверждает своё согласие на использование файлов cookie в соответствии с настоящей Политикой.</p>
            </div>

            <div style="padding: 20px 40px; border-top: 1px solid #e0e0e0; background: white; border-radius: 0 0 15px 15px;">
                <button id="closePolicyModal" style="width: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; padding: 15px 30px; font-weight: bold; font-size: 16px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: all 0.3s;">Закрыть</button>
            </div>
        </div>
    </div>

    <script>
        function getCookie(name) {
            var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        document.addEventListener('DOMContentLoaded', function() {
            const cookieBlockButton = document.getElementById("cookieBlockButton");
            const cookieBlock = document.getElementById("cookieBlock");
            const cookiePolicyLink = document.getElementById("cookiePolicyLink");
            const cookiePolicyModal = document.getElementById("cookiePolicyModal");
            const closePolicyModal = document.getElementById("closePolicyModal");

            // Проверяем согласие при загрузке
            let agreementWithRules = getCookie('agreementWithRules');
            if (agreementWithRules == undefined) {
                cookieBlock.style.display = "block";
            }

            // Обработка согласия
            cookieBlockButton.addEventListener("click", () => {
                cookieBlock.style.display = "none";
                document.cookie = "agreementWithRules=true; max-age=31536000; path=/";
            });

            // Открытие модального окна политики
            cookiePolicyLink.addEventListener("click", (e) => {
                e.preventDefault();
                cookiePolicyModal.style.display = "flex";
            });

            // Закрытие модального окна
            closePolicyModal.addEventListener("click", () => {
                cookiePolicyModal.style.display = "none";
            });

            // Закрытие по клику вне модального окна
            cookiePolicyModal.addEventListener("click", (e) => {
                if (e.target === cookiePolicyModal) {
                    cookiePolicyModal.style.display = "none";
                }
            });
        });
    </script>

    <!-- Footer -->
    <footer style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 30px 20px; text-align: center; margin-top: 50px; border-top: 1px solid rgba(255,255,255,0.2);">
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: rgba(255,255,255,0.9);">
            © <span id="currentYear"></span> neos-nsk.ru<br>
            Услуги предоставляет ИП Красавцев Дмитрий Анатольевич (ОГРНИП: 316547600133930).<br>
            Все права защищены.
        </p>
    </footer>

    <script>
        // Автоматическое обновление года в футере
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    </script>
</body>
</html>
