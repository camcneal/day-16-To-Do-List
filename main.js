function makeListItem() {
    var text = $('.text').val();

    //get user input
    $('.ToDo').append('<li>' + text + ' <button class="delete">Delete</button></li>');
    $('.text').val('');
}

function deleteListItem() {
    $(this).parent().remove();
}

$(function() {
    $('.add').on('click', makeListItem);
    $('.delete').on('click', deleteListItem);


});
//validate input
//saved input
//when data saved successfuully
//add to list
//when page loads load cell data
//when data recieved display data
// });
// function getList (){
var settings = {
    url: 'http://tiny-za-server.herokuapp.com/collections/Chris_list',
    type: 'GET',
    success: function(list, status, xhr) {
        // navigate to post list

    },
    error: function() {
        // log an error
        console.log('the item didn\'t work');
    },


};
// console.log(post);
$.ajax(settings);


// var settings = {
// 	url: 'http://tiny-za-server.herokuapp.com/collections/Chris_list',
// 	type: 'POST',
// 	success: function(todo, status, xhr) {
// 		// navigate to post list

// 	},
// 	error: function() {
// 		// log an error
// 		console.log('the item didn\'t work');
// 	},
// 	contentType: 'application/json',
// 	// data: JSON.stringify(post)
// };
// // console.log(post);
// $.ajax(settings);
