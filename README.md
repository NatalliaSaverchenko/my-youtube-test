# Приложение для поиска youtube-видео по ключевым словам, а также сохранение запросов поиска. 

[my youtube test](https://natalliasaverchenko.github.io/my-youtube-test/#/login)

## *Интерфейс приложения*:

- форма для входа в приложение;
- главная страница, на которой осуществляется поиск youtube-видео и отображение результатов поиска;
- страница с сохраненными поисковыми запросами;

## Вход
Вход в приложение осуществляется по Логину и Паролю. Для аутентификации использован json-файл со списком пользователей (логин: admin, пароль: admin; логин: user, пароль: user). После входа генерируется токен и сохраняется localStorage. Полученный токен используется для авторизации - проверка наличия токена в localStorage, если токена нет, значит пользователь не авторизован (видит только страницу авторизации).

## Поиск youtube-видео
После авторизации пользователь попадает на страницу поиска видео. Поиск осуществлется посредством использования YouTube API. Результаты поиска выводятся на эту же страницу. По умолчанию результаты поиска выводятся в виде списка 12 видео (количество отображаемых видео можно изменить при сохранении запроса в раздел "Избранное", а также после его сохранения. Также предусмотрена возможность отображения результатов поиска в виде карточек. Переключение режимов отображения осуществляется при помощи соотвествующих иконок, расположенных под строкой поиска.

## Сохранение поисковых запросов
Для сохранения поискового запроса необходимо нажать на иконку 🤍 , расположенную в конце строки поиска. После нажатия на иконку откроется соотвествующая форма "Сохранить запрос" со следующими полями:

- *"Запрос"* - отображается текст запроса (поле недоступно для редактирования);
- *"Название"* - вводится пользовательское название поискового запроса;
- *"Сортировать по"* - определяется порядок сортировки видео в результате поиска;
- *"Максимальное количество"* - определяется максимальное количество видео, отображаемых в результате поиска. 

Для сохранения поискового запроса в разделе "Избранное" необходимо нажать кнопку Сохранить.
После сохранения запроса иконка окрасится в синий цвет 💙. Если после ввода поискового запроса иконка синего цвета 💙, запрос уже был ранее сохранен в разделе "Избранное".

## Раздел "Избранное"
На данной странице отображаются поисковые запросы, ранее сохраненные пользователем. Все сохраненные пользователем запросы хранятся в localstorage (для каждого пользователя отображаются его поисковые запросы). Переход в раздел "Избранное" осуществляется через навигационное меню (пункт меню Избранное) либо нажатием на иконку 💙 в строке поиска, либо по ссылке Перейти в "Избранное" во всплывающем сообщении, которое появяется при наведении курсора мышки на иконку 💙.

*В разделее "Избранное" предусмотрены следующие возможности:*

- *выполнить запрос*, нажав на название запроса, при этом откроется модальное окно с параметрами запроса, что бы выполнить запрос необходимо нажать кнопку "Выполнить";
- *изменить запрос*, необходимо нажать "Изменить", после чего откроется форма для редактирования параметров запроса (поля формы аналогичны форме для сохранения запроса), в которой для редактирования доступны все поля.
- *удалить запрос*, необходимо нажать "Удалить", откроется модальное окно для подтверждения или отмены операции удаления запроса.

## Выход из приложения
Осуществляется через навигационное меню -- пункт меню Выйти

[Ссылка на макет](https://tinyurl.com/y2qshhbg)

### Полезное

1.  [YouTube API](https://developers.google.com/youtube/v3/docs/)
2.  [Axios](https://github.com/axios/axios)
3.  [Ant Design](https://ant.design/)
4.  [Redux](https://redux.js.org/)
5.  [React Router](https://reacttraining.com/react-router/)
