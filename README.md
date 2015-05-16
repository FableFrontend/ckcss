<div class="section">
        <h1>CKCSS</h1>
        <p>CKCSS is an Object-Oriented Based CSS Framework, created by CheckZhang. </p>
</div>

<div class="section">
        <h2>How to name CSS Classes in CKCSS?</h2>
        <p>
            <h3>Base Class naming:</h3>
            <p>
                In CKCSS,  we use format "word_word" for Base CSS Class name;<br/>
                Why choose this way? There are some naming way, like "word-word","wordWord" or "word_word", in CKCSS,have below reasons:<br/>
                <ul>
                    <li>"word-word": This way can differentiate single word obviously,but it's not be viewed as a single word in most IDE software,it can't be selected by double click; and more importante, it can't be searched by "\w*" in regular expression;</li>
                    <li>"wordWord": This is better than top one, but it not obvious,compare to "word_word"</li>
                </ul>
            </p>


            <h3>Child Class naming:</h3>
            <p>In CKCSS, we use abbreviation in child class naming, for example, we used "button" for button base class, and use ".button.bt_submit" for child class - submit button; <br/>
                Why use this way? Html tag is a language analyzed at client device by character stream, it's not a compiled language, it's character amount decide its download time directly, download time is one key factor for  user experience,so the abbreviation for parent class and has full semanteme for the child class is the best way;
            </p>
        </p>


    </div>


<div class="section">
        <h2>How to name dom ID in CKCSS?</h2>
        <p>
            CKCSS use "Word_word"to name css id;(with first capital letter) <br/>
            Why choose this way? Because this id naming is different from css class naming obviously;
        </p>
    </div>


<div class="section">
        <h2>How to get Object-Oriented in CKCSS?</h2>
        <p>
            There are two ways to achieve Object-Oriented in CSS:<br/>
        <ul>
            <li>
                First way: Achieve all in css file, like this:<br/>
                css file:<br/>
                .button,.button_submit,.button_cancel{<br/>
                padding:5px 10px;<br/>
                }<br/>
                .button_submit{<br/>
                background:green;<br/>
                color:white;<br/>
                }<br/>
                .button_cancle{<br/>
                background:blue;<br/>
                color:white;<br/>
                }<br/>
                html file:<br/>
                <span class="button">normal button</span><br/>
                <span class="button_submit">submit button</span><br/>
                <span class="button_cancle">cancle button</span>
            </li>
            <li>
                Second way: Achieve it both in css and html, like this:<br/>
                css file:<br/>
                .button{<br/>
                    padding:5px 10px;<br/>
                }<br/>
                .button.bt_submit{<br/>
                    background:green;<br/>
                    color:white;<br/>
                }<br/>
                .button.bt_cancle{<br/>
                background:blue;<br/>
                color:white;<br/>
                }<br/>
                html file:<br/>
                <span class="button">normal button</span><br/>
                <span class="button bt_submit">submit button</span>
                <span class="button bt_cancle">cancle button</span>
            </li>
        </ul>
        <p>
        The first way acheive class and extention by css only, it's Css Weighted Value caculated faster than second way; But it's not the best experience for Object-Oriented, it's not extendible easily intelligibly and intuitionisticly; For example:
        in some page, we need change all button's default view in div with class "panel",
        in first way, we do it like this:<br/>
        .panel .button,.panel .button_submit,.panel .button_cancel{<br/>
        border:1px solid #EEEEEE;<br/>
        }
        in second way, we do it like this:<br/>
        .panel .button{<br/>
        border:1px solid #EEEEEE;<br/>
        }<br/>
        this example just two layers, in real project there are more layers,for example icon class, there are many child classes usually, it's more difficult to inherited (unless use third tools,like less,CKCSS didn't use the third tool);
        Some one worried about the page render efficiency for this way, especially when resize the browser window. Don't worry, the browser have caculate the summing for each class before the first time render,then use the summed value repeatly;
        </p>
        </p>
    </div>