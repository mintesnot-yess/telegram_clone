var top_menu = document.querySelector('.top_menu');
var side_bar = document.querySelector('.side_bar');
var chat_container = document.querySelector('.chat_container');
var user_info = document.querySelector('.user_info_container');


function top_menus() {

    if (top_menu.style.display === 'flex') {
        top_menu.style.display = 'none';

    } else {
        top_menu.style.display = 'flex';

    }


}




function side_bars() {

    side_bar.style.flex = "10";
    side_bar.style.display = 'flex';
    chat_container.style.flex = "0";
    chat_container.style.display = 'none';


}

function chats() {

    if (chat_container.style.display === 'none') {
        side_bar.style.flex = "0";
        side_bar.style.display = 'none';
        chat_container.style.flex = "8";
        chat_container.style.display = 'flex';

    } else {
        chat_container.style.display = 'flex';
        side_bar.style.flex = "2";

    }
}




function user_infos() {

    if (user_info.style.flex == '2 1 0%') {
        user_info.style.flex = 0;
        chat_container.style.flex = 8;

    } else {
        user_info.style.flex = 2;
        chat_container.style.flex = 6;
    }




}