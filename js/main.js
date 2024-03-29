!function () {
    let duration = 50

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')

        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)

            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    /*
     * 首先，准备皮卡丘的皮
     */
    
    .preview {
        height: 100%;
    
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fee433;
    }
    
    .wrapper {
        width: 100%;
        height: 165px;
    
        position: relative;
    }

    /*
     * 开始画皮卡丘的鼻子
     */

    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }

    /*
     * 画皮卡丘的眼珠子
     */

    .eye {
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }

    /*
     * 皮卡丘的腮红
     */

    .face {
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }

    /*
     * 最后是皮卡丘的嘴巴
     */

    .upperLip {
        height: 25px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top: 49px;
        background: #fde348;
    }
    
    .upperLip.left {
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    
    .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    
    .lowerLip-wrapper {
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
    
    
        height: 110px;
        width: 300px;
        overflow: hidden;
    }

    /*
     * 皮卡丘的舌头
     */

    .lowerLip {
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    
    .lowerLip::after {
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }
    /*
     * 好了，皮卡丘画完啦
     */`


    writeCode('', code)

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 150
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()