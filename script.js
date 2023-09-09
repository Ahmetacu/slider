var models= [
    {
        name:"slide1",
        img: "/images/slide1.jpg"
    },
    {
        name:"slide2",
        img: "/images/slide2.jpg"
    } ,
    {
        name:"slide3",
        img: "/images/slide3.jpg"
    },
]

var index =0;
var slaytCount = models.length;

var settings = {
    duration : '1000',
    random : true
};
var interval;
init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){

    index--;
    showSlide(index)
    console.log(index)



});
document.querySelector('.fa-arrow-right').addEventListener('click',function(){


    index++;
    showSlide(index)
    console.log(index)


});
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init (settings) {
    // setTimeout // 2 sn sonra başlatılacak bir fonksiyon başlar ve biter
    // setInterval // hiç durmaz clearInterval kullanmazsan
    var prev;
   interval = setInterval(function(){
        if (settings.random){
            //random index
            do {
                index = Math.floor(Math.random() *slaytCount)
            }while (index==prev)
            prev = index;
        } else {
            //artan index
            if (slaytCount== index+1){
                index=-1;
            }
            showSlide(index)
            index++;
        }
        showSlide(index)

    },settings.duration)

}

function showSlide (i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    } 
    if (i >= slaytCount){
        index=0;
    }

    document.querySelector('.card-title'.textContent = models[index].name)
    document.querySelector('.card-img-top').setAttribute('src',models[index].img);
    // document.querySelector('.card-link').setAttribute('href',models[index].link)
}


