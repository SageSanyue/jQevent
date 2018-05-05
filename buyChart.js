function getHitHtml(hit){
  var html=''
  html += '<li class="hit">'
  html +=   '<div class="cover"><a href="" class="btn delete">删除</a></div>'
  html +=    '<a href="#">'
  html +=      '<img src="'+hit.img+'" alt="">'
  html +=       '<div class="hit-name">'+hit.name+'</div>'
  html +=       '<div class="hit-price">'+hit.price+'</div>'
  html +=    '</a>'
  html += '</li>'
  return html
}

function getData(){
    var results=[]
    for(var i=0;i<3;i++){
        var rand = Math.floor(Math.random()*100)
        var product = {
            img: 'https://picsum.photos/200/200/?image='+rand,
            name: '珂兰 黄金手 猴哥款 ',
            price: '￥'+rand
        }
        results.push(product)
    }
    return results
}

$('.btn-add').on('click',function(c){
    c.preventDefault();
    $('.hit').removeClass('hover')
    var products = getData()
    $.each(products,function(idx,hit){
        var html = getHitHtml(hit)
        $('.hit-out').append(html)
    })
})

$('.btn-edit').on('click',function(a){
    a.preventDefault();
    $('.hit').toggleClass('hover')
})

$('.hit-out').on('click','.delete',function(e){
    e.preventDefault()
    $(this).parents('.hit').remove()
})