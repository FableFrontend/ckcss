<link rel="stylesheet" href="css/CKCSS.css">
<link rel="stylesheet" href="doc/doc.css">
<script src="jquery-1.11.3.min.js"></script>
<div class="section">
        <h1>CKCSS</h1>
        <p>CKCSS is an Object-Oriented CSS Framework, created by CheckZhang. </p>
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
        <div>
            <span class="button">normal button</span>
            <span class="button bt_submit">submit button</span>
            <span class="button bt_cancle">cancle button</span>
        </div>
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
        <div class="someArea">
            <span class="button">normal button</span>
            <span class="button bt_submit">submit button</span>
            <span class="button bt_cancle">cancle button</span>
        </div>

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

            There is another ways to get Class Inheriting ,but it is not recommend by CKCSS:<a href="javascript:void 0" class="more">click to see</a>

        <div class="moreContent">
                The code below not recommend in CKCSS:<br/>
                css file:<br/>
<xmp class="xmp_notCkcss">
    CSS file:
    /** Tip: below is not recommend in CKCSS **/
    /** base class **/
    .button,.button_submit,.button_cancel{
        background:#f6f6f6 ;
        ...
    }
    /** Child class inherited from base class **/
    .button_submit{
        background:#00a200;
        ...
    }
    /** another Child class inherited from base class **/
    .button_cancle{
        background:#2694be ;
        ...
    }

    /** overwrite base class in some area ,you need to change whole Inherited Class Tree but not by Base Class directly, it's difficute and not intuitionistic, especialy do width big tree, for example icon tree; **/
    .someArea .button,
    .someArea .button_submit,
    .someArea .button_cancel{
        font-size:14px;
    }
    HTML file:<br/>
    <span class="button">normal button</span>
    <span class="button_submit">submit button</span><br/>
    <span class="button_cancle">cancle button</span>
</xmp>



        </div>
    </div>

<div class="section">
        <h2>About Layout</h2>
        <h3>Percent Layout:</h3>
        <p>
        CKCSS Percent Layout, allow to set any percent value from 1 to 100, it is easy and flexible;
<div class="percent">
<div class="p50 redBg">This is 50%</div>
<div class="p50 blueBg">This is 50%</div>
<div class="p37 yellowBg">This is 37%</div>
<div class="p63 greenBg">This is 63%</div>
<div class="p50 percent">
<div class="p100 redBg">This is 50%</div>
<div class="p38 greenBg">This is 38% relative to parent</div>
<div class="p62 blueBg">This is 62% relative to parent</div>
</div>
<div class="p50 yellowBg">This<br/>is<br/>50%<br/>  </div>
</div>
        <br/>
        source code:
<xmp>
    <div class="percent">
        <div class="p50 redBg">This is 50%</div>
        <div class="p50 blueBg">This is 50%</div>
        <div class="p37 yellowBg">This is 37%</div>
        <div class="p63 greenBg">This is 63%</div>
        <div class="p50 percent">
            <div class="p100 redBg">This is 50%</div>
            <div class="p38 greenBg">This is 38% relative to parent</div>
            <div class="p62 blueBg">This is 62% relative to parent</div>
        </div>
        <div class="p50 yellowBg">This<br/>is<br/>50%<br/>  </div>
    </div>
</xmp>
        </p>

        <h3>InlineBlock Layout:</h3>
        <p>
            CKCSS InlineBlock Layout, allow to set middle inline-block row;<br/>
            <p>
                Example A:
                <div class="InlineBlocks grayBg">
                    <span>test</span>
                    <span class="button">button</span>
                </div>
            </p>


            source code:
<xmp>
    <div class="InlineBlocks">
        <span>test</span>
        <span class="button">button</span>
    </div>

</xmp>
        <!--<p>
            Example B:
        <div class="InlineBlocks grayBg">
            <b class="ib-height"></b>
            <span>test</span>
            <span class="button">button</span>
        </div>
        </p>

        source code:
<xmp>
    <div class="InlineBlocks">
        <span class="ib-height">&nbsp;</span>
        <span>test</span>
        <span class="button">button</span>
    </div>

</xmp>
        </p>-->
    </div>
<script>
    $(".more").click(function(){
        $(".moreContent").toggle();
    })
</script>