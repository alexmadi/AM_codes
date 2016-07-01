http://jsfiddle.net/vishwa26/VCUvF/

—≈Ћ≈ “ќ–»
http://jquery.page2page.ru/index.php5/%D0%A1%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B

$(СdivТ).filter(У.blueФ)
$(СdivТ).not(У.blueФ)
$(УpФ).eq(2).css(...) - стил≥ 3-му елементу
$(УpФ).slyce(0,4).css(...) - стил≥ надаютьс€ 1-4 елементу
var rt = $(СbuttonТ).is(У.blueФ)  - ≥стина

jQuery(document).ready(function() {
    var a = jQuery(СpТ);
    console.log(a);
}
or
$(document).ready(function() {
    var a = $(СpТ);
    console.log(a);
}
or
$(function() {
    var a = $(СpТ);
    console.log(a);
}

var a = $('.block');
a.hide().addClass('novisible');         - скриваЇ елемент

добавити стил≥
 $('.block').css({color: "red"});

¬идалити клас
 $('.block').removeClass('active');    

ƒодаЇ активний клас ≥ видал€Ї його у активного елемента
$('.button').toggleClass("active");    

$('.block').height(200);

ќднакова висота 2-х блок≥в
 var height_button =  $('.block').height();
 $('.block2').height(height_button);

ƒобавити текст у html
function Addtext() {
     $('.block2').html('<h1>ADDED</h1>')
 };
<a onclick="Addtext()" class="button active" href="#">BUTTON ac</a>
«ам≥н€Ї текст
function Addtext() {
     $('.block2').text('ADDED')
 };

 $('.block2').append('ADDED') або .prepend - добавл€Ї текст перед чи п≥сл€ содержимого

.before, .after - доб. текст перед чи  п≥сл€ елемента

ќбертаЇ елемент у обгортку
function Addtext() {
      $('.block2').wrap('<div class="wrapper"></div>')
    };
wrapAll
wrapInner
replaceWith
ƒублюЇ текст
function Addtext() {
      $('.block').clone().appendTo('.block2')
    };

«аписати значенн€ з ≥нпута
var inputTxt = (С.txtТ).val();
$(СulТ).append(У<li>Ф + inputTxt+ Ф</li>Ф)

ƒобавити атрибут
$( elem ).attr( "checked" )



=======
‘-њ ≥з завданн€ PLP

$('.open_popup').click(function() {
                var popup_id = $('.popup');
                $(popup_id).show();
                $('.overlay').show();
            })
            $('.popup .close, .overlay').click(function() {
                $('.overlay, .popup').hide();
            })

            $(".social_toggle").click(function () {          
                $(".social").slideToggle("slow");
                $(".social_toggle").toggleClass("open");        
                $(".open").css({ "background-position": "1px -40px" });
                if ( $(".social_toggle").hasClass("open") ) {
                    $(".social_toggle").css({ "background-position": "1px -40px" });
                } else {
                    $(".social_toggle").css({ "background-position": "-33px -40px" });
                }
            });


            $('.size_item').click(function() {
                $('.size_item').removeClass('active');    
                $(this).addClass('active');
            });

======



// CLOSE POPUP

  $(document).click(function(event) { 
        if(!$(event.target).closest('.ui-dialog ').length &&
           !$(event.target).is('.ui-dialog ')) {
            if($('.ui-dialog ').is(":visible")) {
                $('.ui-dialog, .ui-widget-overlay').css('display', 'none');
            }
        }        
    })


// AJAX READY

$.ajaxSetup({complete: function(){
      $("input, select").styler(); 
      if ($('#QuickViewDialog').length>0) $('#QuickViewDialog').parent().addClass('FUCK!!!');
    }}); 

 $.ajaxSetup({complete: function(){
      $("input, select").styler();
      if ($('#QuickViewDialog').length>0) {
        $('#QuickViewDialog').parent().addClass('quickviewdialog');

        $window_height = $(window).height();
        $quickviewdialog_height = $('.quickviewdialog').height();
        $subtraction_quickview = ($quickviewdialog_height-$window_height);  
        $subtraction_quickview_str = $subtraction_quickview+'px';
      
        if ($quickviewdialog_height > $window_height) {
          $('.quickviewdialog').css({
           // "margin-top": $subtraction_quickview_str  
          });       
        }  
      }
    }});  



// RESIZE

$(document).ready(tabs_function);
$(window).on('resize',tabs_function);

function tabs_function() { 
  $bp_mobile = 768; 
  $bp_tablet = 1200;  
  $tabs_count = $('.tabs-label-wrapper .tab-label').length;
  if ($(window).width() < $bp_tablet) {
    $('.tabs-label-wrapper').css({    
      'display':'table',
      'width':'100%' 
    });
    $('.tabs-label-wrapper .tab-label').css({    
      'display':'table-cell',
      'float':'none'
    });     
  }
} 


