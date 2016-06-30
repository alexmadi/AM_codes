$class_to_destroy = '.project_carousel';
$obj_to_destroy = $($class_to_destroy); 
//console.log($obj_to_destroy) ;


//$('.project_carousel.owl-carousel').data('owlCarousel').destroy();  
//$obj_to_destroy.removeClass('owl-carousel'); 



// $(document).ready(owl_destroy_function);
// $(window).on('resize', owl_destroy_function); 
// $bp_mobile = 768;
// var resize_desk_bool = true;
// var resize_mob_bool = true;

// function owl_destroy_function() { 
// 	if ($(window).width() > $bp_mobile) {  
// 		resize_mob_bool = true;
// 		if (resize_desk_bool) {
// 			console.log('desk')

// 		}
// 		resize_desk_bool = false;
		
// 	} else {
// 		resize_desk_bool = true;
// 		if (resize_mob_bool) {
// 			console.log('mob')
// 			$obj_to_destroy.data('owlCarousel').destroy();  
// 			$obj_to_destroy.removeClass('owl-carousel'); 

// 		}
// 		resize_mob_bool = false;
// 	}
// };


// close quickview

// $(document).click(function(event) { 
//     if(!$(event.target).closest('.ui-dialog ').length &&
//        !$(event.target).is('.ui-dialog ')) {
//         if($('.ui-dialog ').is(":visible")) {
//             $('.ui-dialog, .ui-widget-overlay').css('display', 'none');
//         } 
//     }         
// }); 
//  