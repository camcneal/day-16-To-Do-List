function makeListItem() {
    var text = $('.text').val();
$.ajax({
	url: 'https://tiny-za-server.herokuapp.com/collections/Chris_list',
	type: 'POST',
	success: function(todo, status, xhr) {
renderTodo();
    // navigate to post list
console.log(todo);
	},
	error: function() {
		// log an error
		console.log('the item didn\'t work');
	},
	contentType: 'application/json',
	data: JSON.stringify({
    task: text
  }),
  dataType:"JSON"
});
    //get user input
    // $('.ToDo').append('<li>' + text + ' <button class="delete">Delete</button></li>');
    // $('.text').val('');
}

function renderTodo(){
  var settings = {
    url: 'https://tiny-za-server.herokuapp.com/collections/Chris_list',
    type: 'GET',
    success: function(list, status, xhr) {
    var listItems =  list.map(function(task,i,arr){
return $('<li>'+task.task+'<button class="delete">Delete</button></li>');
});
$('.ToDo').empty();
$('.ToDo').append(listItems);


        // navigate to post list
console.log(list);

    },
    error: function() {
        // log an error
        console.log('the item didn\'t work');
    },


};
// console.log(post);
$.ajax(settings);


}
renderTodo();
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
