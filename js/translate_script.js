$(document).ready(function(){
    $('.clicker').click(function(){
      if($('ul').hasClass('closed')){
      
     $('#ull').slideDown(150).show();
      $('#ull').addClass('open');
        $('#ull').removeClass('closed'); 
      }
      else
      {
        $('#ull').slideUp(100).fadeOut();
        $('#ull').addClass('closed');
        $('#ull').removeClass('open');
      }
     
    });
    $('#ull li.list1').click(function(){
        $('.options').addClass('options-ru')
        $('.options').removeClass('options-en')
    })
    $('#ull li.list2').click(function(){
        $('.options').addClass('options-en')
        $('.options').removeClass('options-ru')
    })
    $('#ull li').click(function(){
    $('.options').text($(this).text());
      $('#ull').slideUp(0).fadeOut();
        $('#ull').addClass('closed');
        $('#ull').removeClass('open');
         var className = $(this).attr('class');
    });
    $('.options').click(function(){
    if($('ul').hasClass('closed')){
      
     $('#ull').slideDown(100).show();
      $('#ull').addClass('open');
        $('#ull').removeClass('closed'); 
      }
      else
      {
        $('#ull').slideUp(100).fadeOut();
        $('#ull').addClass('closed');
        $('#ull').removeClass('open');
      }
     
    });



    $(function(){
        $('.translate').click(function(){
            var lang = $(this).attr('id');
    
            $('.lang').each(function(index,item){
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });

    let arrLang={
        'en':{
          'headerLink1':'About',
          'headerLink2':'Contacts',
          'headerLink3':'Jobs',
          'headerLink4':'Download presentation',
          'headerBottomLink1':'Quarrying',
          'headerBottomLink2':'Crushed stone',
          'headerBottomLink3':'Construction of roads and artificial structures',
          'headerBottomLink4':'Transport services',
          'conWithWe':'Contact us',
          'sliderItemTitle':'The 1st stage of backfilling of well pads at the Rosneft oil field was completed',
          'sliderItemText':'On June 21 we will start the second stage. Delivery is scheduled for December',
          'sliderItemMore':'more',
          'sliderItemTitle2':'The 1st stage of backfilling of well pads at the Rosneft oil field was completed',
          'sliderItemTitle3':'The 1st stage of backfilling of well pads at the Rosneft oil field was completed',
          'sliderItemText2':'On June 21 we will start the second stage. Delivery is scheduled for December',
          'sliderItemText3':'On June 21 we will start the second stage. Delivery is scheduled for December',
          'kindsItemTitle':'Quarrying',
          'kindsItemTitle2':'Fractional crushed stone production',
          'kindsItemTitle3':'Construction of roads and artificial structures',
          'kindsItemTitle4':'Transport services',
          'kindsItemText':'We help to increase the production of "narrow" fractions per season without additional costs for equipment maintenance',
          'kindsItemText2':'Rocks of stone: andesite (gray basalt) and dacite (red color',
          'kindsItemText3':'340 units of road equipment, modern technologies and experienced specialists',
          'kindsItemText4':'Transportation of loose and bulk materials just in time without loss during transportation',
          'scopeMobile':'Swipe right to see more',
          'presentationInfoTitle':'"Krasindorstroy"',
          'presentationInfoText':'since 2008, has been developing its careers and careers of customers, producing and supplying crushed stone, building roads and artificial structures',
          'downloadLink':'download presentation',
          'presentationVideo':'Learn more about the company in this 2-minute video',
          'clientsTitle':'Partners and clients:',
          'newsTitle':'News from current projects',
          'moreNews':'see all news',
          'newsSliderText':'The Tyumen-Khanty-Mansiysk road was completed. Remaining landscaping',
          'newsSliderText2':'The 1st stage of backfilling of well pads at the oil field was completed',
          'newsSliderText3':'Completed excavation of the rock in the “Wonderful Stone” quarry using our Metso equipment',
          'vacanciesTitle':'Jobs',
          'moreVacancies':'see all vacancies',
          'vacanciesItemTitle':'Web developer',
          'vacanciesItemTitle2':'Designer',
          'vacanciesItemText':'We help to increase the production of "narrow" fractions per season without additional costs for equipment maintenance',
          'vacanciesItemText2':'We help to increase the production of "narrow" fractions per season without additional costs for equipment maintenance',
          'contactsTitle':'Contacts',
          'tabsNavBtn1':'office',
          'tabsNavBtn2':'career',
          'mapPushAdress':'15 km south from the village of Pamyati 13 wrestlers',
          'footerItemTitle':'«KRASINDORSTROY» LLC',
          'footerItemAdress':'Krasnoyarsk, st. Robespierre, d.7, fl. eight',
          'footerListLink1':'Download presentation',
          'footerListLink2':'License for the right to use subsoil',
          'footerListLink3':'SOUT',
          'footerListLink4':'Requisites',
          'footerListLink5':'Charity',
          'footerListLink6':'Product Catalog',
          'footerListLink7':'Quarrying',
          'footerListLink8':'Transportation',
          'footerListLink9':'Contract crushing',
          'footerListLink10':'Construction of roads and artificial structures',
          'footerListLink11':'Objects',
          'footerListLink13':'News',
          'footerBottomText':'OGRN: 1185007003719 TIN: 5020084015',
          'footerBottomLink':'Privacy Policy',
          'footerBottomLastLink':'Website development — Digital-studio "Accept"',
        },
        'ru':{
            'headerLink1':'О нас',
            'headerLink2':'Контакты',
            'headerLink3':'Вакансии',
            'headerLink4':'Скачать презентацию',
            'headerBottomLink1':'Разработка карьеров',
            'headerBottomLink2':'Производство щебня',
            'headerBottomLink3':'Строительство дорог и искусственных сооружений',
            'headerBottomLink4':'Транспортные услуги',
            'conWithWe':'Связаться с нами',
            'sliderItemTitle':'Завершён 1этап отсыпки кустовых площадок на нефтяном месторождении «Роснефть»',
            'sliderItemText':'21 июня мы начнем второй этап. Сдача объект планируется в декабре',
            'sliderItemMore':'подробнее',
            'sliderItemTitle2':'Завершён 1этап отсыпки кустовых площадок на нефтяном месторождении «Роснефть»',
            'sliderItemTitle3':'Завершён 1этап отсыпки кустовых площадок на нефтяном месторождении «Роснефть»',
            'sliderItemText2':'21 июня мы начнем второй этап. Сдача объект планируется в декабре',
            'sliderItemText3':'21 июня мы начнем второй этап. Сдача объект планируется в декабре',
            'kindsItemTitle':'Разработка карьеров',
            'kindsItemTitle2':'Производство фракционного щебня',
            'kindsItemTitle3':'Строительство дорог и искусственных сооружений',
            'kindsItemTitle4':'Транспортные услуги',
            'kindsItemText':'Помогаем увеличить выпуск «узких» фракций в сезон без дополнительных затрат на обслуживание оборудования',
            'kindsItemText2':'Породы камня: андезито (базальты серого цвета) и дациты (красный цвет)',
            'kindsItemText3':'340 единиц дорожной техники, современные технологии и опытные специалисты',
            'kindsItemText4':'Перевозка сыпучих и навалочных материалов точно в срок без потерь при перевозке',
            'scopeMobile':'Листайте вправо, чтобы увидеть больше',
            'presentationInfoTitle':'«Красиндорстрой»',
            'presentationInfoText':'с 2008 года разрабатывает свои карьеры и карьеры заказчиков, производит и поставляет щебень, строит дороги и искусственные конструкции',
            'downloadLink':'скачать презентацию',
            'clientsTitle':'Партнеры и клиенты:',
            'newsTitle':'Новости с текущих проектов',
            'moreNews':'смотреть все новости',
            'newsSliderText':'Достроили дорогу «Тюмень — Ханты-Мансийск». Осталось благоустройство',
            'newsSliderText2':'Завершён 1-ый этап отсыпки кустовых площадок на нефтяном месторождении',
            'newsSliderText3':'Окончена экскавация скалы в карьере “Чудный камень” c помощью нашей техники Metso',
            'vacanciesTitle':'Вакансии',
            'moreVacancies':'смотреть все вакансии',
            'vacanciesItemTitle':'Веб-разработчик',
            'vacanciesItemTitle2':'Дизайнер',
            'vacanciesItemText':'Помогаем увеличить выпуск «узких» фракций в сезон без дополнительных затрат на обслуживание оборудования',
            'vacanciesItemText2':'Помогаем увеличить выпуск «узких» фракций в сезон без дополнительных затрат на обслуживание оборудования',
            'contactsTitle':'Контакты',
            'tabsNavBtn1':'офис',
            'tabsNavBtn2':'карьер',
            'mapPushAdress':'15 км на юг от поселка Памяти 13 борцов',
            'footerItemTitle':'ООО «КРАСИНДОРСТРОЙ»',
            'footerItemAdress':'г. Красноярск, ул. Робеспьера, д.7, эт. 8',
            'footerListLink1':'Скачать презентацию',
            'footerListLink2':'Лицензия на право пользования недрами',
            'footerListLink3':'СОУТ',
            'footerListLink4':'Реквизиты',
            'footerListLink5':'Благотворительная деятельность',
            'footerListLink6':'Каталог продукции<',
            'footerListLink7':'Разработка карьеров',
            'footerListLink8':'Перевозки',
            'footerListLink9':'Подрядное дробление',
            'footerListLink10':'Строительство дорог и искусственных сооружений',
            'footerListLink11':'Объекты',
            'footerListLink13':'Новости',
            'footerBottomText':'ОГРН: 1185007003719 ИНН: 5020084015',
            'footerBottomLink':'Политика конфиденциальности',
            'footerBottomLastLink':'Разработка сайта — Digital-студия «Акцепт»',
            // 
            'developInfoTitle':'Разработка карьеров по всей территории СФО - под ключ или частично',
            'developInfoText':'Помогаем увеличить выпуск «узких» фракций в сезон без дополнительных затрат на обслуживание оборудования',
            'developItemText1':'46 млн тонн',
            'developItemText2':'24 карьеров',
            'developItemText3':'963 000 тонн',
            'developItemTextBottom1':'горной массы переработано',
            'developItemTextBottom2':'разработали под ключ',
            'helpTitle':'Чем мы можем помочь',
            'helpTabsNavBtn1':'Подрядное дробление',
            'helpTabsNavBtn2':'Буровзрывные работ',
            'helpTabsNavBtn3':'Вскрышные работы',
            'helpTabsNavBtn4':'Аренда дробильно-сортировочного оборудование',
            'helpTabsNavBtn5':'Экскавация скалы',
            'helpContentTitle':'Подрядное дробление',
            'helpContentText1':'Подберем дробильно-сортировочное оборудование под требуемые объемы производства технические требования к продукту.',
            'helpContentText2':'Пришлем обученных опытных операторов',
            'helpContentText3':'Быстро интегрируем в вашу производственную линию',
            'helpContentText4':'Точный учет объема переработанной продукции благодаря высокоточным конвейерным весам на оборудовании',
            'newsSliderText4':'Разработали карьер “Жесткая Альфа” в 150 км к северу от  Красноярска',
            'newsSliderText5':'Окончена экскавация скалы в карьере “Чудный камень” c помощью нашей техники Metso',
            'newsSliderText6':'Начали буровзрывные работы  на новом карьере в 30 км от Емельяново',
            'technologyTitle':'Используем современное дробильно-сортировочное оборудование Sandvik (Швеция) и Metso (Финляндия)',
            'technologyText':'На сумму более 100 млн. ₽',
            'technologyTabsNavBtn1':'Дробилки',
            'technologyTabsNavBtn2':'Грохоты',
            'technologyTabsNavBtn3':'Питатели',
            'technologyTabsNavBtn4':'Конвееры',
            'technologyTabsNavBtn5':'Навесное оборудование',
            'technologyTabsNavBtn6':'Бульдозеры',
            'technologyTabsNavBtn7':'Экскаваторы',
            'technologyTabsNavBtn8':'Самосвалы',
            'technologyItemTitle':'Роторная дробилка',
            'technologyItemPosttitle':'Sandvik СР809',
            'technologyItemContent1':'Мощность:250 Квт',
            'technologyItemContent2':'Производительность:195-456 т/ч Тип',
            'technologyItemContent3':'Тип полости:С',
            'technologyItemContent4':'Максимальный кусок на входе:400 мм',
            'technologyInfo':'Производит 800 000 м3/месяц',
        }
    }
}); 