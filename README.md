# Movies Explorer

## О проекте
 
 Проект Movies Explorer позволяет просматривать видеоролики, предоставляемые внешним сервисом и сохранять их в избранном. 
 Фронтенд реализован с помощью библиотеки React с применением методологии БЭМ. Используются функциональные компоненты, хуки, контекст, high order component.
 Бэкенд реализован с помощью Node.js и библиотеки Express, работает на 3001 порту. Используется MongoDB. Для работы с БД используется библиотека Mongoose.
 Проект запускается в контейнерах с помощью Docker Compose.

 Для запуска проекта:

1. клонируйте его командой:
 ```console
git clone https://github.com/Slava65/movies-explorer-full.git/
```
2. введите команду:
 ```console
 docker-compose up
 ```
3. откройте ссылку http://localhost:3000/ в браузере.

## Описание проекта

### Главная страница

Главная страница проекта Movies Explorer содержит общую информацию о проекте и его создателе. 

![Alt text](/public/readme_pic_about.png?raw=true "О проекте")

### Регистрация

Для перехода к просмотру видеороликов необходимо зарегистрироваться и войти. Соответствующая кнопка находится в главном меню сверху. 

![Alt text](/public/readme_pic_registration.png?raw=true "Окно регистрации")

### Профиль пользователя

Профиль пользователя в дальнейшем можно редактировать.

![Alt text](/public/readme_pic_edit_profile.png?raw=true "Редактирование профиля пользователя")

### Поиск видео

В проекте Movies Explorer настроено подключение к сервису BeatfilmMovies через его API для получения видеороликов с помощью поиска.

![Alt text](/public/readme_pic_search.png?raw=true "Поиск видеороликов")

### Фильтрация короткометражек

Можно отфильтровать видео по длительности с помощью переключателя "Короткометражки"

![Alt text](/public/readme_pic_short.png?raw=true "Короткометражки")

### Сохранение видео

API проекта Movies Explorer реализует функционал регистрации пользователя, упомянутый выше, и сохранения видеороликов в избранном. Этот список доступен с помощью кнопки "Сохраненные фильмы". Видео также можно удалить из списка с помощью соответствующей кнопки.

![Alt text](/public/readme_pic_saved.png?raw=true "Сохраненные фильмы")

## Используемые технологии 

<div display="flex" justify-content="space-between" width="100%">
<img src="/public/readme_pic_techs/javascript.svg" width="98" height="98" alt="JavaScript">
<img src="/public/readme_pic_techs/react.svg" width="98" height="98" alt="React">
<img src="/public/readme_pic_techs/html5.svg" width="98" height="98" alt="HTML">
<img src="/public/readme_pic_techs/css3.svg" width="98" height="98" alt="CSS">
<img src="/public/readme_pic_techs/nodedotjs.svg" width="98" height="98" alt="NodeJS">
<img src="/public/readme_pic_techs/bem.svg" width="98" height="98" alt="BEM">
<img src="/public/readme_pic_techs/mongodb.svg" width="98" height="98" alt="MongoDB">
<img src="/public/readme_pic_techs/docker.svg" width="98" height="98" alt="Docker">
</div>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=25&pause=1000&color=8A24F7&background=42FF4B24&vCenter=true&random=false&width=800&lines=JavaScript+React+HTML+CSS+NodeJS+BEM+MongoDB+Docker)](https://git.io/typing-svg)

## Моя статистика

### Статистика используемых языков во всех моих проектах

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=Slava65&layout=compact&custom_title=Используемые_языки&locale=ru)](https://github.com/anuraghazra/github-readme-stats)

### Статистика моего участия в учебных онлайн-платформах и профессиональных форумах


_Codewars_

[![codewars](https://www.codewars.com/users/SuperPowerMan/badges/large)](https://www.codewars.com/users/SuperPowerMan)

_LeetCode_

[![My LeetCode stats](https://leetcode-stats-six.vercel.app/api?username=Tuzenbobel)](https://github.com/Tuzenbobel/leetcode-stats)

_StackOverflow_

<a href="https://ru.stackoverflow.com/users/455668/slava65"><img src="https://ru.stackoverflow.com/users/flair/455668.png" width="208" height="58" alt="Профиль участника Slava65 на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов" title="Профиль участника Slava65 на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов"></a>