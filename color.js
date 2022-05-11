const bodyTag = document.querySelector('body');
const links = document.querySelectorAll('a');



// jQuery 사용
// $('body') : 이 웹페이지에 있는 body 태그를 jQuery로 제어하겠다.
const Body = {
    setColor: function(color) {
    // bodyTag.style.color = color;
    $("body").css('color',color);
    },
    setBgcolor: function(color) {
    //bodyTag.style.backgroundColor = color;
    $("body").css('backgroundColor',color);
    }
}

const Links = {
    setColor: function (className) {
    // for(var i = 0; i<links.length; i++) links[i].classList.toggle(className);

    // jQuery 사용
    // 이 웹페이지에 있는 모든 anchor 태그를 jQuery로 제어하겠다.
    $('a').toggleClass(className);
    }
}


function nightDayHandler(self) {
    if( self.value === 'night') { // day -> night
        Body.setBgcolor('black');
        Body.setColor('white');
        Links.setColor('a-night');
        self.value = 'day';
    } else {
        Body.setBgcolor('white');
        Body.setColor('black');
        Links.setColor('a-night');
        self.value = 'night';
    }
}