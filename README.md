
<div class="section">
        <h1>CKCSS</h1>
        <p>CKCSS is an Object-Oriented CSS Framework, created by CheckZhang. </p>
		Please go to <a href="http://www.flashpretty.com/ckcss/index.html">CKCSS Offical Site</a> to get more info!
    </div>

<div class="section">
        <h2>How to name CSS Classes in Object-Oriented CKCSS?</h2>
        <p>
            <p>
                In CKCSS,  we use format "wordWord" for Base CSS Class name,use "wd_word" for it's Child Class, use "wd-word" for this Child Dom Class,and use "WordWord" for Dom ID:<br/>
                <!--<div class="form fm_inlineBlock" id="FormExample">
                    <div class="fm-label">label:</div>
                    <div class="fm-value">value</div>
                </div>-->
<xmp class="xmp_ckcss">
    <div class="form fm_inlineBlock">
        <div class="fm-label">label:</div>
        <div class="fm-value">value</div>
    </div>
</xmp>
                 Some CSS Framework just use one of there three way, CKCSS use all to make Object-Oriented more structurized and clearer;
            </p>
        </p>
    </div>
    
<div class="section">
        <h2>How to get Object-Oriented in CKCSS?</h2>
        <p>
        To create button base class in CKCSS: 
<xmp>
    CSS file:
    /** base class **/
    .button{
        background:#f6f6f6 ;
        ...
    }
    /** Child class inherited from base class **/
    .button.bt_submit{
        background:#00a200;
        ...
    }
    /** another Child class inherited from base class **/
    .button.bt_cancle{
        background:#2694be ;
        ...
    }

    HTML file:
    <div>
        <span class="button">normal button</span>
        <span class="button bt_submit">submit button</span>
        <span class="button bt_cancle">cancle button</span>
    </div>
</xmp>

overwrite all button in a special area:<br/>
<xmp>
    CSS file:
    /** overwrite base class **/
    .someArea .button{
        font-size:14px;
    }

    HTML file:
    <div class="someArea">
        <span class="button">normal button</span>
        <span class="button bt_submit">submit button</span>
        <span class="button bt_cancle">cancle button</span>
    </div>
</xmp>

Please go to <a href="http://www.flashpretty.com/ckcss/index.html">CKCSS Offical Site</a> to get more info!