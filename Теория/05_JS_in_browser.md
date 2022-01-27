## JavaScript в браузере 

<p>Основные функции для работы с <b>DOM</b></p>

<ul>
    <li><code>querySelector(selector)</code> - ищет на странице элемент по переданному селектору. Селектором может выступать класс (<code>'.название_класса'</code>) или название тега (<code>'p'</code>);</li>
    <li><code>querySelectorAll(selector) - находит на странице все элементы по переданному селектору. Селектором может выступать <b>класс</b> (<code>'.название_класса'</code>) или <b>название тега</b> (<code>'p'</code>);</code></li>
    <li><code>classList.add(classname)</code> - добавляет CSS класс заданному элементу;</li>
    <li><code>createElement(element_name)</code> - создает новый HTML элемент. Название элемента передается в аргументе этой функции. Например, чтобы создать заголовок первого уровня, мы напишем <code>let heading = document.<b>createElement('h1')</b></code>;</li>
    <li><code>appendChild(element)</code> - когда вы создали элемент, он не появляется на странице, он хранится в переменной, которую вы создали для вызова функции <code>createElement()</code>. Чтобы созданные элементы отображались на странице, их нужно "приеклеить" к каким-то уже существующим элементам на странице. Например: у меня создан блок <code>section</code> и я хочу в него поставить новый блок div.</li>
</ul>

<pre><code>
let section = document<b>.querySelector('section')</b>;  // нашел секцию на странице 

let new_element = document<b>.createElement('div'</b>>;  // создал новый элемент див 

section.<b>appendChild(new_element)</b>;  // добавил новый элемент в секцию
</code></pre>