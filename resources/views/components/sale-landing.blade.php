@props(['id'])

{{-- Hero секция --}}
<div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <div class="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 mb-8">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-xs font-medium text-green-700">Профессиональная помощь в продаже</span>
            </div>
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Продажа квартиры
                <span class="text-blue-600">без лишних забот</span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
                Мы берём на себя весь процесс — от анализа рынка до подписания договора. Вы получаете максимальную цену при минимальном участии.
            </p>
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" class="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                    Узнать стоимость
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/></svg>
                </a>
                <a href="#services" class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors px-6 py-3.5">
                    Что входит в услугу
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
                </a>
            </div>
            <div class="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
                <div class="text-center">
                    <div class="text-3xl font-bold text-gray-900">53к</div>
                    <div class="text-xs text-gray-500 mt-1">фиксированная цена</div>
                </div>
                <div class="text-center border-x border-gray-200">
                    <div class="text-3xl font-bold text-gray-900">3</div>
                    <div class="text-xs text-gray-500 mt-1">этапа оплаты</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold text-gray-900">0%</div>
                    <div class="text-xs text-gray-500 mt-1">комиссии от сделки</div>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- NEOS — технологии в недвижимости --}}
<div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
            <div class="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1 mb-5">
                <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 11.715l-.17.049a3 3 0 01-2.056-2.057l-.05-.17-.049.17a3 3 0 01-2.056 2.057l-.17.049.17.049a3 3 0 012.056 2.057l.05.17.049-.17a3 3 0 012.056-2.057l.17-.049z"/></svg>
                <span class="text-xs font-medium text-blue-700 uppercase tracking-wider">НЕОС</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-5">Технологии,<br class="hidden sm:block">которые продают недвижимость</h2>
            <p class="text-lg text-gray-600 leading-relaxed">Рынок меняется. Современные технологии всё больше влияют на процесс продажи — рынок становится оцифрованным. НЕОС применяет передовые технологии, чтобы упростить продажу, сделать её понятной, предсказуемой и доступной.</p>
        </div>

        {{-- Группа 1: Оцифрованный рынок --}}
        <div class="mt-16">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
                </div>
                <div>
                    <div class="text-xs font-semibold text-blue-600 uppercase tracking-wider">Технологичность №1</div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Оцифрованный рынок — определяем максимальную цену</h3>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Обоснованная оценка</h4>
                    <p class="text-sm text-gray-600">Определяем максимальную цену продажи на основе данных всего рынка — не на глаз, как раньше.</p>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.75m-.75 5.25h.75m-.75 5.25h.75M21 6.75h-.75M21 12h-.75M21 17.25h-.75"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Понятные этапы и оплата</h4>
                    <p class="text-sm text-gray-600">Каждый шаг прозрачен — вы видите, что и зачем делается, и понимаете, за что платите.</p>
                </div>
            </div>
        </div>

        {{-- Группа 2: Технологичная реклама --}}
        <div class="mt-12">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/></svg>
                </div>
                <div>
                    <div class="text-xs font-semibold text-purple-600 uppercase tracking-wider">Технологичность №2</div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Высокотехнологичная реклама — привлекаем покупателей</h3>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Виртуальные 3D-туры</h4>
                    <p class="text-sm text-gray-600">Покупатели изучают вашу квартиру онлайн из любой точки мира. Тур встраивается прямо в объявление.</p>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Профессиональные фото</h4>
                    <p class="text-sm text-gray-600">Съёмка с правильным светом и ракурсами — квартира выглядит достойно на всех площадках.</p>
                </div>
            </div>
        </div>

        {{-- Группа 3: Технология переговоров --}}
        <div class="mt-12">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
                </div>
                <div>
                    <div class="text-xs font-semibold text-orange-600 uppercase tracking-wider">Технологичность №3</div>
                    <h3 class="text-xl sm:text-2xl font-bold text-gray-900">Переговоры и продажи — продаём дороже</h3>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Презентация, в которую влюбляются</h4>
                    <p class="text-sm text-gray-600">Технология общения и показа, которая раскрывает квартиру с лучшей стороны и вызывает эмоциональный отклик у покупателя.</p>
                </div>
                <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div class="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                        <svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
                    </div>
                    <h4 class="text-base font-semibold text-gray-900 mb-1.5">Конкуренция за вашу квартиру</h4>
                    <p class="text-sm text-gray-600">Создаём спрос: покупатели соревнуются за право купить — это исключает торг и позволяет поднять финальную цену.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- Портфолио — пример рекламных материалов --}}
<div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12">
            <p class="text-base font-semibold text-purple-600">Портфолио</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Пример рекламных материалов</h2>
            <p class="mt-4 text-gray-600">Такие фото и виртуальный тур я создаю для каждой квартиры</p>
        </div>

        <div class="columns-2 md:columns-3 lg:columns-4 gap-3 mb-8 [&>*]:mb-3">
            <a href="https://z-cdn-media.chatglm.cn/files/21e7488e-1154-4000-a093-432d4dce7ebb.jpg?auth_key=1879537526-698815fbb1de46fe849deb433c36e93b-0-510719dbe9ee54a170d225e6f5998aa0" data-lightbox="Гостиная" class="break-inside-avoid block relative rounded-xl overflow-hidden group cursor-zoom-in">
                <img src="https://z-cdn-media.chatglm.cn/files/21e7488e-1154-4000-a093-432d4dce7ebb.jpg?auth_key=1879537526-698815fbb1de46fe849deb433c36e93b-0-510719dbe9ee54a170d225e6f5998aa0" alt="Гостиная" class="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span class="text-sm font-medium text-white">Гостиная</span>
                </div>
            </a>
            <a href="https://z-cdn-media.chatglm.cn/files/433f9257-cb25-41d5-b41f-da451b59f424.jpg?auth_key=1879537526-2e5a04c62d794aeb80eb47a464933e68-0-5fc075d4eccd4af06e4b7339d1a2b3b2" data-lightbox="Вид из комнаты" class="break-inside-avoid block relative rounded-xl overflow-hidden group cursor-zoom-in">
                <img src="https://z-cdn-media.chatglm.cn/files/433f9257-cb25-41d5-b41f-da451b59f424.jpg?auth_key=1879537526-2e5a04c62d794aeb80eb47a464933e68-0-5fc075d4eccd4af06e4b7339d1a2b3b2" alt="Вид из комнаты" class="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span class="text-xs font-medium text-white">Вид из комнаты</span>
                </div>
            </a>
            <a href="https://z-cdn-media.chatglm.cn/files/eef785ac-8638-4a11-9653-4dc01899ab0a.jpg?auth_key=1879537526-0dbaa3312f6f4fe1bba61efee25f9862-0-c12a36c00175849ab6adcd574159548a" data-lightbox="Спальня" class="break-inside-avoid block relative rounded-xl overflow-hidden group cursor-zoom-in">
                <img src="https://z-cdn-media.chatglm.cn/files/eef785ac-8638-4a11-9653-4dc01899ab0a.jpg?auth_key=1879537526-0dbaa3312f6f4fe1bba61efee25f9862-0-c12a36c00175849ab6adcd574159548a" alt="Спальня" class="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span class="text-xs font-medium text-white">Спальня</span>
                </div>
            </a>
            <a href="https://z-cdn-media.chatglm.cn/files/4c564ffd-999b-4b04-97a5-ff747e97b847.jpg?auth_key=1879537526-756ece2b7c8f42e7834933935544c9d2-0-c5a39b4240384c930066a1f1fc4b8fe9" data-lightbox="Вид из окна — берёзовая роща" class="break-inside-avoid block relative rounded-xl overflow-hidden group cursor-zoom-in">
                <img src="https://z-cdn-media.chatglm.cn/files/4c564ffd-999b-4b04-97a5-ff747e97b847.jpg?auth_key=1879537526-756ece2b7c8f42e7834933935544c9d2-0-c5a39b4240384c930066a1f1fc4b8fe9" alt="Вид из окна" class="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span class="text-sm font-medium text-white">Вид из окна — берёзовая роща</span>
                </div>
            </a>
            <a href="https://z-cdn-media.chatglm.cn/files/571fb7e2-987f-4f36-9be0-09271f8a55d9.jpg?auth_key=1879537526-c5b57e6d9abd438097c1542c40f4df41-0-cbc2d80b0c5067a9aa202b4bb55a1f1c" data-lightbox="Планировка — 37,80 м²" class="break-inside-avoid block relative rounded-xl overflow-hidden group cursor-zoom-in">
                <img src="https://z-cdn-media.chatglm.cn/files/571fb7e2-987f-4f36-9be0-09271f8a55d9.jpg?auth_key=1879537526-c5b57e6d9abd438097c1542c40f4df41-0-cbc2d80b0c5067a9aa202b4bb55a1f1c" alt="Планировка" class="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span class="text-sm font-medium text-white">Планировка — 37,80 м&sup2;</span>
                </div>
            </a>
        </div>

        {{-- Ссылка на виртуальный тур --}}
        <a href="https://neos-nsk.ru/tour/5eef7814-1f6d-41a7-97b1-70f8073fd0e3" target="_blank" rel="noopener" class="block bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group">
            <div class="flex flex-col sm:flex-row items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div class="text-center sm:text-left flex-1">
                    <h3 class="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Виртуальный 3D-тур по квартире</h3>
                    <p class="text-sm text-gray-500">Тур встраивается прямо в объявление на ЦИАН — покупатели могут изучить квартиру онлайн</p>
                </div>
                <div class="flex items-center gap-2 text-sm font-medium text-blue-600 flex-shrink-0">
                    Открыть тур
                    <svg class="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                </div>
            </div>
        </a>
    </div>
</div>

{{-- Lightbox --}}
<div id="sale-landing-lightbox" class="hidden fixed inset-0 z-[100] bg-black/90 items-center justify-center p-4 cursor-zoom-out" onclick="this.classList.add('hidden'); this.classList.remove('flex'); document.body.style.overflow='';">
    <button type="button" class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onclick="event.stopPropagation(); const lb=document.getElementById('sale-landing-lightbox'); lb.classList.add('hidden'); lb.classList.remove('flex'); document.body.style.overflow='';">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
    <div class="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium max-w-[70%] truncate" id="sale-landing-lightbox-caption"></div>
    <img id="sale-landing-lightbox-img" src="" alt="" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" onclick="event.stopPropagation();">
</div>

<script>
(function() {
    if (window.__saleLandingLightboxInit) return;
    window.__saleLandingLightboxInit = true;
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[data-lightbox]');
        if (!link) return;
        e.preventDefault();
        const url = link.getAttribute('href');
        const caption = link.getAttribute('data-lightbox') || '';
        const lb = document.getElementById('sale-landing-lightbox');
        const img = document.getElementById('sale-landing-lightbox-img');
        const cap = document.getElementById('sale-landing-lightbox-caption');
        img.src = url;
        img.alt = caption;
        cap.textContent = caption;
        lb.classList.remove('hidden');
        lb.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });
    document.addEventListener('keydown', function(e) {
        if (e.key !== 'Escape') return;
        const lb = document.getElementById('sale-landing-lightbox');
        if (lb.classList.contains('hidden')) return;
        lb.classList.add('hidden');
        lb.classList.remove('flex');
        document.body.style.overflow = '';
    });
})();
</script>

{{-- Видео-презентация --}}
<div class="bg-gradient-to-b from-white to-gray-50">
    <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-10">
            <div class="inline-flex items-center gap-2 bg-red-50 rounded-full px-3 py-1 mb-5">
                <svg class="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                <span class="text-xs font-medium text-red-700 uppercase tracking-wider">Видео-презентация</span>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">Посмотрите, как это работает</h2>
            <p class="text-gray-600 text-lg">Короткое видео о подходе НЕОС к продаже квартиры</p>
        </div>
        <div class="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
            <iframe src="https://rutube.ru/play/embed/55f0d4fd32b72a81422dcf95bda19f15/" allow="autoplay; fullscreen; encrypted-drm; picture-in-picture" allowfullscreen frameborder="0" class="absolute inset-0 w-full h-full"></iframe>
        </div>
    </div>
</div>

{{-- Услуги --}}
<div id="services" class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
            <p class="text-base font-semibold text-blue-600">Что входит</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Полный комплекс услуг</h2>
            <p class="mt-4 text-gray-600">Каждый этап продуман для того, чтобы продать вашу квартиру быстрее и дороже</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Анализ рынка</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Изучение аналогичных объектов, отслеживание динамики цен с ежемесячным обновлением</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Рекламные материалы</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Профессиональные фотографии и виртуальный 3D-тур для привлечения покупателей</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Размещение рекламы</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Публикация на ЦИАН, Авито, Домклик и Яндекс — все крупнейшие площадки</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Показы квартиры</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Проведение всех просмотров — вам не нужно присутствовать</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Работа с покупателями</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Фильтрация звонков, переговоры, проверка платёжеспособности</p>
            </div>
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-5">
                    <svg class="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/></svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Оформление сделки</h3>
                <p class="text-sm text-gray-600 leading-relaxed">Подготовка и подписание предварительного и основного договоров</p>
            </div>
        </div>
    </div>
</div>

{{-- Стоимость --}}
<div id="pricing" class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
            <p class="text-base font-semibold text-teal-600">Стоимость</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Прозрачная цена</h2>
            <p class="mt-4 text-gray-600">Никаких скрытых комиссий и процентов от суммы сделки</p>
        </div>
        <div class="mx-auto max-w-3xl">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-10">
                <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <div class="text-xs font-medium text-gray-500 uppercase tracking-widest mb-2">Полная стоимость услуг</div>
                        <div class="flex items-baseline gap-2">
                            <span class="text-5xl sm:text-6xl font-bold text-gray-900">53 000</span>
                            <span class="text-2xl text-gray-400 font-light">&#8381;</span>
                        </div>
                    </div>
                    <div class="bg-blue-50 border border-blue-200 rounded-xl px-5 py-3 text-center">
                        <div class="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Ежемесячно</div>
                        <div class="text-xl font-bold text-gray-900">+ 3 200 &#8381;</div>
                        <div class="text-xs text-gray-500 mt-0.5">размещение на досках</div>
                    </div>
                </div>
                <hr class="border-gray-200 mb-8">
                <div class="space-y-4 mb-8">
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">Анализ рынка с ежемесячным обновлением</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">Профессиональные фото и виртуальный тур</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">Размещение на ЦИАН, Авито, Домклик, Яндекс</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">Все показы на весь период продажи</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">Сопровождение до подписания договора купли-продажи</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <div class="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                        </div>
                        <span class="text-sm text-gray-700">0% комиссии от суммы сделки</span>
                        <span class="text-xs text-gray-400 mt-0.5">— только фиксированная цена</span>
                    </div>
                </div>
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
                    <svg class="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
                    <p class="text-xs text-gray-600 leading-relaxed">Ежемесячные 3 200 &#8381; — это чистые затраты на платное размещение объявлений. Сумма напрямую идёт площадкам и не является комиссией.</p>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- Этапы оплаты --}}
<div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16">
            <p class="text-base font-semibold text-green-600">Этапы оплаты</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Платите по мере продвижения</h2>
            <p class="mt-4 text-gray-600">Оплата разбита на 3 этапа — вы платите только за то, что уже сделано</p>
        </div>
        <div class="mx-auto max-w-3xl relative">
            {{-- Вертикальная линия --}}
            <div class="hidden md:block absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-green-500"></div>

            {{-- Этап 1 --}}
            <div class="relative md:pl-20 mb-12">
                <div class="hidden md:flex absolute left-[8px] top-6 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 items-center justify-center text-sm font-bold text-white z-10">1</div>
                <div class="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                        <div>
                            <div class="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1">Этап 1</div>
                            <h3 class="text-xl font-bold text-gray-900">При подписании договора</h3>
                        </div>
                        <div class="flex items-baseline gap-1 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                            <span class="text-2xl font-bold text-blue-700">31 200</span>
                            <span class="text-sm text-blue-400">&#8381;</span>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white border border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg>
                                </div>
                                <span class="text-sm text-gray-700">Анализ рынка с обновлениями</span>
                            </div>
                            <span class="text-sm font-medium text-gray-900">10 000 &#8381;</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white border border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-4 h-4 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"/></svg>
                                </div>
                                <span class="text-sm text-gray-700">Фото и виртуальный тур</span>
                            </div>
                            <span class="text-sm font-medium text-gray-900">8 000 &#8381;</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white border border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/></svg>
                                </div>
                                <span class="text-sm text-gray-700">Показы на весь период</span>
                            </div>
                            <span class="text-sm font-medium text-gray-900">10 000 &#8381;</span>
                        </div>
                        <div class="flex items-center justify-between py-2.5 px-4 rounded-lg bg-white border border-gray-100">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 rounded-md bg-purple-100 flex items-center justify-center flex-shrink-0">
                                    <svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>
                                </div>
                                <span class="text-sm text-gray-700">ЦИАН &#183; Авито &#183; Домклик &#183; Яндекс</span>
                            </div>
                            <span class="text-sm font-medium text-gray-900">3 200 &#8381;</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                        <span class="text-sm text-gray-500">Итого первый этап</span>
                        <span class="text-lg font-bold text-gray-900">31 200 &#8381;</span>
                    </div>
                </div>
            </div>

            {{-- Этап 2 --}}
            <div class="relative md:pl-20 mb-12">
                <div class="hidden md:flex absolute left-[8px] top-6 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-cyan-500 to-cyan-400 items-center justify-center text-sm font-bold text-white z-10">2</div>
                <div class="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <div class="text-xs font-semibold text-cyan-600 uppercase tracking-widest mb-1">Этап 2</div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">При подписании преддоговора</h3>
                            <p class="text-sm text-gray-500">Предварительный договор купли-продажи с покупателем подписан</p>
                        </div>
                        <div class="flex items-baseline gap-1 bg-cyan-50 border border-cyan-200 rounded-lg px-4 py-2 flex-shrink-0">
                            <span class="text-2xl font-bold text-cyan-700">10 000</span>
                            <span class="text-sm text-cyan-400">&#8381;</span>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Этап 3 --}}
            <div class="relative md:pl-20">
                <div class="hidden md:flex absolute left-[8px] top-6 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-green-500 to-green-400 items-center justify-center text-sm font-bold text-white z-10">3</div>
                <div class="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 hover:shadow-md transition-shadow">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <div class="text-xs font-semibold text-green-600 uppercase tracking-widest mb-1">Этап 3</div>
                            <h3 class="text-xl font-bold text-gray-900 mb-2">При подписании основного договора</h3>
                            <p class="text-sm text-gray-500">Сделка завершена — квартира продана</p>
                        </div>
                        <div class="flex items-baseline gap-1 bg-green-50 border border-green-200 rounded-lg px-4 py-2 flex-shrink-0">
                            <span class="text-2xl font-bold text-green-700">15 000</span>
                            <span class="text-sm text-green-400">&#8381;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Итого --}}
        <div class="mx-auto max-w-3xl mt-12 bg-gray-50 rounded-xl p-6 border border-gray-100">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/></svg>
                    </div>
                    <div>
                        <div class="text-sm text-gray-600">Итого фиксированная оплата</div>
                        <div class="text-xs text-gray-400">+ 3 200 &#8381;/мес. за размещение рекламы</div>
                    </div>
                </div>
                <span class="text-3xl sm:text-4xl font-bold text-gray-900">53 000 &#8381;</span>
            </div>
        </div>
    </div>
</div>

{{-- Бонус --}}
<div class="bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12">
            <p class="text-base font-semibold text-orange-600">Бонус</p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">На ваше усмотрение</h2>
            <p class="mt-4 text-gray-600">Я не требую бонусов, но буду искренне рад любому из этих жестов</p>
        </div>
        <div class="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center mx-auto mb-5">
                    <svg class="w-7 h-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.77.853m0 0H10.5m3.27-.853a6.02 6.02 0 01-3.27.853"/></svg>
                </div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Премия по результатам</h3>
                <p class="text-sm text-gray-500 leading-relaxed">Если продажа превзойдёт ожидания — благодарность в любом размере</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto mb-5">
                    <svg class="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg>
                </div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Отзыв на 2ГИС</h3>
                <p class="text-sm text-gray-500 leading-relaxed">Честный отзыв поможет другим найти надёжного риелтора</p>
            </div>
            <div class="bg-white rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div class="w-14 h-14 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5">
                    <svg class="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"/></svg>
                </div>
                <h3 class="text-base font-semibold text-gray-900 mb-2">Рекомендации знакомым</h3>
                <p class="text-sm text-gray-500 leading-relaxed">Сарафанное радио — лучшая оценка моей работы</p>
            </div>
        </div>
    </div>
</div>

{{-- CTA --}}
<div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 mb-8">
                <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
            </div>
            <h2 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">Готовы обсудить продажу?</h2>
            <p class="text-gray-600 text-lg mb-8 max-w-md mx-auto">Свяжитесь — бесплатно проконсультируем и поможем разобраться, как лучше продать вашу квартиру</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://max.ru/u/f9LHodD0cOKDoa53j-mAoJJRXZuhxX-NoW3V4xjR2l1GoU3F_mwz4wmmVyQ" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold text-sm px-7 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/30">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.16 3.58L12 11.46 4.84 7.88 12 4.3zM4 9.4l7 3.5v7.7l-7-3.5V9.4zm9 11.2v-7.7l7-3.5v7.7l-7 3.5z"/></svg>
                    Написать в MAX
                </a>
                <a href="tel:+79139855935" class="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                    Позвонить +7 913 985-59-35
                </a>
            </div>
            <p class="text-xs text-gray-400 mt-4">Консультация бесплатна и ни к чему не обязывает</p>
        </div>
    </div>
</div>
