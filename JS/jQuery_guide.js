http://jsfiddle.net/vishwa26/VCUvF/

���������
http://jquery.page2page.ru/index.php5/%D0%A1%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D1%8B

$(�div�).filter(�.blue�)
$(�div�).not(�.blue�)
$(�p�).eq(2).css(...) - ���� 3-�� ��������
$(�p�).slyce(0,4).css(...) - ���� ��������� 1-4 ��������
var rt = $(�button�).is(�.blue�)  - ������

jQuery(document).ready(function() {
    var a = jQuery(�p�);
    console.log(a);
}
or
$(document).ready(function() {
    var a = $(�p�);
    console.log(a);
}
or
$(function() {
    var a = $(�p�);
    console.log(a);
}

var a = $('.block');
a.hide().addClass('novisible');         - ������ �������

�������� ����
 $('.block').css({color: "red"});

�������� ����
 $('.block').removeClass('active');    

���� �������� ���� � ������� ���� � ��������� ��������
$('.button').toggleClass("active");    

$('.block').height(200);

�������� ������ 2-� �����
 var height_button =  $('.block').height();
 $('.block2').height(height_button);

�������� ����� � html
function Addtext() {
     $('.block2').html('<h1>ADDED</h1>')
 };
<a onclick="Addtext()" class="button active" href="#">BUTTON ac</a>
������ �����
function Addtext() {
     $('.block2').text('ADDED')
 };

 $('.block2').append('ADDED') ��� .prepend - �������� ����� ����� �� ���� �����������

.before, .after - ���. ����� ����� ��  ���� ��������

������ ������� � ��������
function Addtext() {
      $('.block2').wrap('<div class="wrapper"></div>')
    };
wrapAll
wrapInner
replaceWith
������ �����
function Addtext() {
      $('.block').clone().appendTo('.block2')
    };

�������� �������� � ������
var inputTxt = (�.txt�).val();
$(�ul�).append(�<li>� + inputTxt+ �</li>�)

�������� �������
$( elem ).attr( "checked" )



=======
�-� �� �������� PLP

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


