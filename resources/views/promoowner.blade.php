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
            <h1><span class="emoji">🏠</span> Продаёте квартиру? Узнайте реальную цену ДО выхода на рынок</h1>

            <p><strong>Появился инструмент, который за 48 часов покажет, за сколько РЕАЛЬНО продаются квартиры в вашем сегменте рынка:</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 1: Семья изучает анализ рынка -->
            <!-- ПРОМПТ: Russian family (parents 40-45 years old) sitting together at home looking at laptop screen showing real estate market analysis with property prices and charts, warm home interior, natural window lighting, relieved and confident expressions, studying data together, modern apartment setting, lifestyle photography, photorealistic, shot on 35mm lens, 4K quality -->
            <img src="{{ asset('images/promoownerst1.png') }}" alt="Семья изучает анализ рынка недвижимости" class="hero-image">

            <p>Причём работает он даже если вы продаёте квартиру впервые в жизни. Вы получаете такую же объективную оценку, как если бы наняли аналитика с 20-летним опытом.</p>

            <p><strong>Для кого это актуально:</strong></p>
            <ul>
                <li><strong>Продаёте квартиру самостоятельно без риелтора</strong> - узнать реальную рыночную цену по данным, а не на словах "продам за месяц"</li>
                <li><strong>Боитесь, что риелтор обманет с оценкой</strong> - получить объективные данные для проверки слов агента</li>
                <li><strong>Нужно продать быстро (переезд, ипотека, развод)</strong> - понять коридор цен и выставить правильную цену с первого раза, не теряя месяцы</li>
            </ul>

            <h2>Как узнать реальную цену вашей квартиры:</h2>
            <div class="steps">
                <div class="step">Вы заказываете анализ для вашего дома или района</div>
                <div class="step">Получаете отчёт со всеми продажами за последний год</div>
                <div class="step">Видите РЕАЛЬНЫЕ цены, по которым люди продали квартиры</div>
                <div class="step">Сравниваете свою квартиру с проданными аналогами</div>
                <div class="step">Устанавливаете правильную цену и получаете звонки покупателей</div>
            </div>

            <p><span class="emoji">🔥</span> <strong>Главная особенность:</strong> вы получаете не "на глаз" оценку риелтора, а ДАННЫЕ о реальных продажах. Видите, за сколько продали соседи, сколько времени висели объявления, как снижали цены!</p>

            <button class="btn" onclick="showPage(2)">Хочу узнать реальную цену!</button>
        </div>
    </div>

    <!-- Страница 2: ПРОБЛЕМАТИЗАЦИЯ -->
    <div class="page" id="page2">
        <div class="container">
            <h1><span class="emoji">💸</span> Почему собственники теряют от 200 до 500 тысяч рублей при продаже квартиры</h1>

            <p><strong>Раскрываю шокирующую правду о том, как неправильная оценка стоит вам денег и месяцев жизни!</strong></p>

            <p>Знаете, что происходит, когда собственник спрашивает риелтора: "За сколько продать мою квартиру?"</p>

            <p><span class="emoji">😤</span> Риелтор называет цену НЕ на основе данных, а на основе СВОИХ интересов! Хотите продать быстро? Он занизит цену на 300-500 тысяч "для быстрой продажи". Не торопитесь? Завысит, чтобы показать себя "хорошим агентом", а потом будет снижать...</p>

            <div class="warning">
                <p><strong>Реальный пример из практики:</strong></p>
                <p>Собственник хотел продать 2-комнатную квартиру. Пригласил трёх риелторов на оценку:</p>
                <p>🔴 Первый риелтор: 5.2 млн руб ("Быстро продам за месяц, дайте эксклюзив!")</p>
                <p>🔴 Второй риелтор: 5.5 млн руб ("Это реальная рыночная цена")</p>
                <p>🔴 Третий риелтор: 5.8 млн руб ("Немного подождём хорошего покупателя")</p>
                <p><strong>Разница 600 000 рублей! Кому верить? Кто не врёт?</strong></p>
            </div>

            <!-- ИЗОБРАЖЕНИЕ 2: Собственник в замешательстве -->
            <!-- ПРОМПТ: Russian homeowner man 45-50 years old sitting at kitchen table looking confused and stressed, three different papers with property valuations showing different prices in front of him, hands on head in frustration, calculator and real estate advertisements scattered on table, natural home lighting, worried expression, documentary photography style, photorealistic, shot on 35mm lens, 4K quality -->
            <img src="{{ asset('images/promoownerst2.png') }}" alt="Собственник в замешательстве из-за разных оценок" class="page-image">

            <p><span class="emoji">🤬</span> <strong>А ещё хуже, когда вам нужно продать быстро!</strong> Переезд, развод, ипотека на шее... Риелтор говорит "снижайте цену для быстрой продажи", вы в панике снижаете на 500 тысяч... А потом узнаёте, что соседи продали за бОльшую цену!</p>

            <p><span class="emoji">😡</span> <strong>Самое возмутительное:</strong> Большинство риелторов САМИ не знают реальных цен в вашем доме! Они ориентируются на "ощущения", "опыт", "я 10 лет на рынке". Но рынок меняется каждый месяц! Вчерашний опыт сегодня не работает!</p>

            <h2>Ответьте себе честно:</h2>
            <p><strong>🤔 Откуда риелтор взял цену на вашу квартиру? Показал вам таблицу с продажами в вашем сегменте рынка?</strong></p>

            <p><strong>🤔 За сколько продали квартиры ваши соседи за последние 6 месяцев? Вы видели эти цифры?</strong></p>

            <p><strong>🤔 Как долго висят объявления? Неделю или полгода?</strong></p>

            <p><strong>🤔 Почему квартира выше этажом продалась за 5.5 млн, а вам риелтор говорит "5 млн максимум"?</strong></p>

            <div class="case">
                <h4>Страшная статистика продаж собственников:</h4>
                <p>📊 <strong>45%</strong> собственников теряют от 200 до 500 тысяч рублей из-за неправильной оценки</p>
                <p>📊 <strong>60%</strong> квартир продаются дольше 3 месяцев из-за завышенной первоначальной цены</p>
                <p>📊 <strong>80%</strong> продавцов снижают цену 2-4 раза, теряя время и деньги и самое главное, что они делают это вслепую</p>
            </div>

            <p><span class="emoji">⚡</span> <strong>Но теперь есть решение, которое ставит ВАС в позицию эксперта, а не заложника мнения риелтора!</strong></p>

            <p>Инструмент, который даёт вам ДАННЫЕ о реальных продажах в вашем сегменте рынка. Цифры вместо "я думаю". Факты вместо "по моему опыту".</p>

            <button class="btn" onclick="showPage(3)">Хочу увидеть реальные данные!</button>
        </div>
    </div>

    <!-- Страница 3: СТОРИТЕЛЛИНГ -->
    <div class="page" id="page3">
        <div class="container">
            <h1><span class="emoji">🤝</span> Как 50 беспомощных риелторов и 5 месяцев потерянного времени клиента привели к созданию системы</h1>

            <p><strong>История о том, как я помог собственнику продать квартиру после неудачи с риелтором</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 3: Консультация эксперта с клиентом -->
            <!-- ПРОМПТ: Real estate expert consultant showing market analysis report to homeowner client at office desk, laptop screen showing property price data and charts, both looking at screen attentively, professional consultation atmosphere, modern office interior, natural window lighting, collaborative discussion moment, business photography style, photorealistic, shot on 50mm lens, 4K quality -->
            <img src="{{ asset('images/promost3-1.png') }}" alt="Консультация по анализу рынка" class="portrait-image">

            <p>Меня зовут Дмитрий Красавцев. Я в недвижимости с 2011 года. За это время провёл более 150 сделок и 200+ оценок по всей России.</p>

            <h2>2012 год: Проблема с доверием</h2>
            <p>Когда я работал риелтором, постоянно сталкивался с одной проблемой: <strong>собственники не верили моей оценке</strong>.</p>

            <p><span class="emoji">🤔</span> Они говорили: "Откуда вы взяли эту цену? Вы же просто хотите продать быстрее!" И были правы - у меня не было объективных данных, только "опыт" и "насмотренность".</p>

            <p>Я экспериментировал с Google-таблицами, собирал данные вручную. Это занимало 2 дня на один анализ. Тогда родилась идея: <strong>нужна система</strong>.</p>

            <h2>2015 год: 50 риелторов без данных</h2>
            <p>Став директором агентства, я столкнулся с кризисом: портфель на 40 миллионов не конвертировался в сделки. Попросил 50 риелторов сделать отчёты по оценке объектов.</p>

            <div class="warning">
                <p><strong>Шокирующий результат:</strong></p>
                <p>❌ НИ У ОДНОГО из 50 риелторов не было системы анализа</p>
                <p>❌ Все работали "на глаз", по интуиции и памяти о прошлых сделках</p>
                <p>❌ Собственники теряли деньги из-за неправильных оценок</p>
            </div>

            <p><span class="emoji">💡</span> Я понял: это системная проблема отрасли. Риелторы берут объекты по ЛЮБОЙ цене, потом "давят" на собственников снижать. Клиенты теряют деньги и время.</p>

            <h2>2021 год: Создание системы</h2>
            <p>Я выучил программирование с нуля и создал систему анализа рынка. <strong>8 месяцев разработки</strong> - и появился инструмент, который собирает данные за 48 часов вместо недель ручной работы.</p>

            <div class="success">
                <p><strong>Результаты для собственников:</strong></p>
                <p>✅ Переговоры по цене стали простыми - клиенты видели объективные данные</p>
                <p>✅ Сроки продажи сократились - правильная цена с первого раза</p>
                <p>✅ Нет больших снижений - покупатели берут по рынку без торга</p>
            </div>

            <h2>2022 год: Как анализ спас клиента от потери полугода</h2>
            <p><span class="emoji">😱</span> <strong>Реальная история клиента:</strong></p>

            <p>Ко мне обратился собственник. Он уже <strong>5 месяцев пытался продать квартиру с риелтором</strong> - без результата.</p>

            <div class="case">
                <h4>Что показал анализ:</h4>
                <p>🔴 <strong>Первоначальная цена:</strong> 4 млн руб (риелтор сказал "реальная цена")</p>
                <p>🔴 <strong>Реальный коридор продаж:</strong> 3.1 млн руб (по данным аналогов за год)</p>
                <p>🔴 <strong>Завышение:</strong> на 900 000 рублей!</p>
                <p>📉 Через 3 месяца риелтор предложил снизить на 300к до 3.7 млн. Но и это было выше рынка - звонков не было.</p>
            </div>

            <p>Я показал клиенту отчёт: <strong>все проданные аналоги за год, их цены, сроки продажи, как снижали цены конкуренты</strong>.</p>

            <p><span class="emoji">💡</span> Клиент увидел реальную картину и понял: <strong>нет смысла держать завышенную цену</strong>. Он сразу установил цену в коридоре продаж (3.1-3.2 млн).</p>

            <div class="success">
                <p><strong>Результат:</strong></p>
                <p>✅ Сразу начали поступать звонки от покупателей</p>
                <p>✅ Клиент получил предложения и вышел на сделку</p>
                <p>✅ <strong>Вывод:</strong> Если бы он получил анализ сразу - не потерял бы 5 месяцев и смог решить задачи гораздо быстрее</p>
            </div>

            <h2>Что больше НЕ нужно делать:</h2>
            <ul>
                <li>❌ НЕ нужно верить риелтору на слово без проверки данных</li>
                <li>❌ НЕ нужно держать завышенную цену месяцами в надежде "найдётся покупатель"</li>
                <li>❌ НЕ нужно снижать цену наугад по совету риелтора</li>
                <li>❌ НЕ нужно тратить месяцы на продажу, если можно узнать реальную цену за 48 часов</li>
                <li>❌ НЕ нужно терять сотни тысяч из-за неправильной первоначальной оценки</li>
            </ul>

            <p><span class="emoji">😎</span> <strong>Секрет прост:</strong> Правильная цена с первого раза = быстрая продажа без снижений. Данные дают уверенность, а не гадания "а вдруг продастся?".</p>

            <button class="btn" onclick="showPage(4)">Хочу увидеть этот анализ!</button>
        </div>
    </div>

    <!-- Страница 4: ОСОЗНАНИЕ -->
    <div class="page" id="page4">
        <div class="container">
            <h1><span class="emoji">🎯</span> Стоп! Осознайте момент!</h1>

            <p><strong>Включите осознанность и посмотрите, что происходит прямо сейчас!</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 4: Собственник обдумывает стратегию продажи -->
            <!-- ПРОМПТ: Russian homeowner 45-50 years old sitting thoughtfully at home desk, looking at laptop screen showing property listings and price data, hand on chin in contemplative pose, moment of clarity and decision-making, natural home office lighting, modern apartment interior with window in background, calm and confident expression, lifestyle photography, photorealistic, shot on 50mm f/1.8, 4K quality, shallow depth of field -->
            <img src="{{ asset('images/promoownerst4.png') }}" alt="Собственник обдумывает стратегию продажи" class="page-image">

            <p>Остановитесь на секунду. Откиньтесь на спинку стула. Сделайте глубокий вдох.</p>

            <p><span class="emoji">😮</span> Буквально 5 минут назад вы даже не знали, что существует способ получить объективную оценку недвижимости на основе данных, а не мнений.</p>

            <p>А сейчас вы уже:</p>
            <ul>
                <li>✅ Понимаете, почему риелторы ошибаются в оценках</li>
                <li>✅ Знаете мою историю и результаты</li>
                <li>✅ Осознаете масштаб проблемы (потеря сотен тысяч рублей)</li>
                <li>✅ Видите, что есть решение на основе данных</li>
                <li>✅ Читаете четвёртую страницу подряд!</li>
            </ul>

            <p>Вы погружаетесь всё глубже в понимание того, как работает рынок недвижимости <span class="emoji">🐰</span></p>

            <div class="warning">
                <p><strong>Я специально веду вас по этому пути.</strong></p>
                <p>Каждая страница - это шаг в понимании проблемы и решения. Я использую проверенную методику вовлечения, которая помогает вам САМОСТОЯТЕЛЬНО прийти к правильному выводу.</p>
            </div>

            <h2>Ответьте себе честно:</h2>
            <p><strong>1. Вы хотели бы знать ТОЧНУЮ стоимость квартиры перед сделкой?</strong></p>

            <p><strong>2. Вам важно не потерять деньги из-за неправильной оценки?</strong></p>

            <p><strong>3. Вы готовы принимать решения на основе фактов, а не догадок?</strong></p>

            <p>Если хотя бы на один вопрос вы ответили "ДА" - вы готовы узнать о системе профессионального анализа рынка!</p>

            <p><span class="emoji">🎓</span> Это не магия и не секретная методика. Это просто ДАННЫЕ. Огромный массив данных, правильно обработанных и представленных в понятном виде.</p>

            <button class="btn" onclick="showPage(5)">Пожалуй, я готов! Открываю карты</button>
        </div>
    </div>

    <!-- Страница 5: ПРЕЗЕНТАЦИЯ -->
    <div class="page" id="page5">
        <div class="container">
            <h1><span class="emoji">💎</span> Профессиональный анализ рынка недвижимости</h1>

            <p><strong>Вы сейчас находитесь на презентации инструмента, который дает вам "рентген" рынка недвижимости!</strong></p>

            <p>И да, эти 6 страниц - это тоже часть демонстрации. Пошаговое вовлечение, построение доверия, презентация решения. Именно так работает профессиональный маркетинг.</p>

            <h2>Что такое "Профессиональный анализ рынка":</h2>

            <p>Это комплексный отчет объемом <strong>5 страниц</strong>, который содержит:</p>

            <!-- ИЗОБРАЖЕНИЕ 5: Отчёт анализа рынка на экране -->
            <!-- ПРОМПТ: Professional real estate market analysis report displayed on modern laptop screen and tablet, showing interactive property price charts with clear price ranges, data tables of sold apartments with photos, market trends graphs, property comparison module with similar listings, clean modern dashboard interface, residential apartment analysis data, blue and purple color scheme, high-tech business photography, sharp focus on screen details, 4K quality, professional lighting -->
            <img src="{{ asset('images/promoownerst5.png') }}" alt="Пример отчёта анализа рынка для собственников" class="hero-image">

            <div class="steps">
                <div class="step"><strong>Карта сегмента с выделенными домами</strong> - визуальное отображение текущего сегмента для максимально точного сравнительного анализа среди объектов</div>
                <div class="step"><strong>Таблица всех объектов за год</strong> - все объекты, которые продаются или продавались в течение года, со всеми объявлениями, изменением цены, без дублей и с полной историей продажи и фото для оценки состояния</div>
                <div class="step"><strong>График ликвидности сегмента</strong> - сколько подобных объектов продаётся в сегменте по месяцам. Только так можно понять реальный спрос или дефицит, есть ли сезонность и реальную ротацию объектов</div>
                <div class="step"><strong>График рынка недвижимости</strong> - последние цены в рекламе перед снятием объектов. Так можно понять какие объекты были проданы, какие просто сняты, увидеть реальный коридор продаж и провести сравнение с текущими конкурентами</div>
                <div class="step"><strong>График изменения средней цены</strong> - по активным объектам и тем, что ушли с рынка. Так можно понять реальную разницу между желаниями продавцов и выбором покупателей</div>
            </div>

            <h2>Для кого это особенно ценно:</h2>

            <div class="case">
                <h4>📊 Для продавцов квартир:</h4>
                <p>Вы узнаете точную рыночную стоимость и сможете выставить правильную цену. Не слишком низкую (потеря денег) и не слишком высокую (квартира не продается месяцами).</p>
                <p><strong>Экономия:</strong> 100-300 тысяч рублей на правильной оценке</p>
            </div>

            <div class="case">
                <h4>⏱️ Для тех, кто продаёт самостоятельно:</h4>
                <p>Получите профессиональный анализ без оплаты услуг риелтора. Сэкономите 2-3% от стоимости квартиры на комиссии агента и ещё несколько сотен тысяч на правильной цене.</p>
                <p><strong>Экономия на комиссии:</strong> 120-180 тысяч рублей при продаже квартиры за 6 млн</p>
            </div>

            <h2>Технология сбора данных:</h2>
            <ul>
                <li>✅ Парсинг крупных площадок (ЦИАН, Авито)</li>
                <li>✅ Ручная проверка аномалий и исключений</li>
                <li>✅ Визуализация данных в графиках и таблицах</li>
            </ul>

            <p><span class="emoji">🔥</span> Это как иметь собственного аналитика по недвижимости, который работал месяц над вашим отчетом!</p>

            <div class="success">
                <p><strong>Среднее время подготовки отчета: 48 часов</strong></p>
                <p>Вы получаете HTML-файл с полным анализом и данными, готовым к использованию</p>
            </div>

            <button class="btn" onclick="showPage(6)">Узнать стоимость и условия</button>
        </div>
    </div>

    <!-- Страница 6: ОФФЕР -->
    <div class="page" id="page6">
        <div class="container">
            <h1><span class="emoji">🎁</span> Получите профессиональный анализ рынка</h1>

            <p><strong>Объективные данные вместо субъективных мнений - ваше конкурентное преимущество!</strong></p>

            <!-- ИЗОБРАЖЕНИЕ 6: Счастливая семья после успешной продажи -->
            <!-- ПРОМПТ: Happy Russian family (couple 40-45 years old with teenage son) celebrating successful home sale, handshake with buyer in background, modern apartment interior with panoramic windows, keys and signed documents on table, relieved and joyful expressions, successful real estate transaction moment, natural warm lighting, lifestyle photography, photorealistic, shot on 35mm lens, 4K quality, shallow depth of field -->
            <img src="{{ asset('images/promoownerst6-1.png') }}" alt="Успешная продажа квартиры" class="page-image">

            <h2>Что вы получаете:</h2>
            <ul>
                <li>✅ <strong>HTML-отчёт на 5 страниц</strong> с интерактивными графиками и данными</li>
                <li>✅ <strong>Карта сегмента</strong> с выделенными домами для точного сравнения</li>
                <li>✅ <strong>Таблица всех объектов за год</strong> со ссылками на объявления и фото</li>
                <li>✅ <strong>График ликвидности сегмента</strong> - понимание спроса и дефицита</li>
                <li>✅ <strong>График рынка недвижимости</strong> - реальный коридор продаж</li>
                <li>✅ <strong>График изменения цен</strong> - разница между желаниями продавцов и выбором покупателей</li>
                <li>✅ <strong>Бесплатная видео-консультация</strong> - детальный разбор отчёта (15 минут)</li>
            </ul>

            <h2>Специально для собственников:</h2>

            <div class="case">
                <h4>📊 Модуль сравнения объектов:</h4>
                <p><strong>Получите узкий коридор продажи именно для ВАШЕГО объекта.</strong> Учитываются все параметры: этаж, состояние, планировка, вид из окна, наличие балкона и другие факторы.</p>
            </div>

            <div class="case">
                <h4>⏱️ Прогноз сроков продажи:</h4>
                <p><strong>Узнайте, как быстро продаются похожие квартиры.</strong> Поймёте реальные сроки продажи при разных ценах и сможете выбрать оптимальную стратегию.</p>
            </div>
            <!--
            <h2>Реальные кейсы собственников:</h2>

            <div class="case">
                <h4>📈 Продавец 3-комнатной квартиры</h4>
                <p><strong>Анна, 42 года, г. Новосибирск</strong></p>
                <p>Риелтор оценил квартиру в 6.2 млн. После анализа рынка выяснилось, что аналогичные квартиры в доме продаются за 6.5-6.8 млн.</p>
                <p><strong>Результат:</strong> Продала за 6.65 млн. Дополнительная выгода: <span style="color: #28a745; font-weight: bold;">+450 000 руб</span></p>
            </div>

            <div class="case">
                <h4>📊 Продавец 2-комнатной квартиры</h4>
                <p><strong>Сергей, 38 лет, г. Москва</strong></p>
                <p>Продавал самостоятельно, выставил за 7.8 млн. Анализ показал, что рыночная цена 8.2-8.5 млн для его дома и этажа.</p>
                <p><strong>Результат:</strong> Скорректировал цену до 8.3 млн, продал за 3 недели. Дополнительная выгода: <span style="color: #28a745; font-weight: bold;">+500 000 руб</span></p>
            </div>
            -->
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

            <h2>Сравните со стоимостью ошибки:</h2>

            <div class="comparison">
                <div class="comparison-item comparison-bad">
                    <h4>❌ Без анализа</h4>
                    <p>Риск ошибки в оценке: 8-15%</p>
                    <p>На квартире за 6 млн = 480-900 тыс руб</p>
                    <p><strong>Потенциальный убыток</strong></p>
                </div>
                <div class="comparison-item comparison-good">
                    <h4>✅ С анализом</h4>
                    <p>Погрешность оценки: до 3%</p>
                    <p>Стоимость анализа: 5 500 руб</p>
                    <p><strong>Возврат: 10 000%+</strong></p>
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
                <h2>Перестаньте гадать - начните ЗНАТЬ!</h2>
                <p><strong>Получите объективный анализ рынка с прозрачными данными</strong></p>
                <p style="font-size: 18px; margin-top: 15px;">💰 Всего 5 500 руб (регионы) или 6 000 руб (Москва)</p>
                <p style="font-size: 14px; opacity: 0.9; margin-top: 10px;">Было 10 000 руб - экономия до 45%</p>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')">Скачать образец отчёта</button>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')" style="margin-top: 10px; background: white; color: #667eea;">Записаться на консультацию (бесплатно)</button>
                <button class="btn" onclick="window.open('https://t.me/neos_site_bot', '_blank')" style="margin-top: 10px; background: rgba(255,255,255,0.15); border: 2px solid white; color: white;">Заказать анализ сейчас</button>
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
