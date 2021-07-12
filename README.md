Тестовое задание на позицию Junior FrontEnd Developer.

Постановка задачи: создать таблицу пользователей с фильтрацией по имени (first + last).

Компоненты:

индикатор загрузки
фильтр по имени пользователя – поле ввода + кнопка сброса
таблица с пользователями

Сценарий работы приложения:

Открывается страница, загружаются данные пользователей (показываем индикатор загрузки), рисуем фильтр с таблицей.
При вводе имени в поле фильтрации генерируем таблицу с пользователями, подходящими под запрос (фильтруем на клиенте).
Если ничего не найдено, отобразить соответствующее сообщение.
Чтобы избежать лишних перерисовок при вводе в поле фильтрации, используем декоратор debounce (написать самому).
При наведении на picture, должен отобразиться тултип с картинкой более высокого разрешения (есть в данных).

Технические требования:

Использование сторонних js-библиотек запрещено.✔️
CSS - препроцессор использовать не обязательно.✔️
Документированный и структурированный исходный код.✔️
Хостинг исходного кода на общедоступном ресурсе (github, gitlab и т.д.).✔️
Приложение должно быть развернуто и доступно по прямой ссылке (github pages, и т.д.).✔️

live версия - https://sidorinad.github.io/randomuserview/

Срок выполнения: две недели.