/* controller.js
    Controller for Shopping Cart page
*/

$(function(){

	var formatLabels = {  //create an object that will translate between the format codes 
	    dvd: 'DVD',
	    bluray: 'Blu-Ray'
	};

	var cartModel = createCartModel();  //create our cart model& view

	var cartView = createCartView({
    model: cartModel,
    template: $('.cart-item-template'),
    container: $('.cart-items-container'),
    totalPrice: $('.total-price')
	});

	var moviesModel = createMoviesModel({  //create the movies model and view
    url: 'https://courses.washington.edu/info343/ajax/movies/'
	});

	var moviesView = createMoviesView({
	    model: moviesModel,
	    template: $('.movie-template'),
	    container: $('.movies-container')
	});

	//refresh to get movies from server
	moviesModel.refresh();

	//when the movies view triggers 'addToCart'
	//add a new item to the cart, using the supplied
	//movieID and format
	moviesView.on('addToCart', function(data){
	    var movie = moviesModel.getItem(data.movieID);  //movies view will trigger an 'addToCart' event 
	    if (!movie)
	        throw 'Invalid movie ID "' + movieID + '"!'; 

	    cartModel.addItem({
	        id: movie.id,
	        title: movie.title,
	        format: data.format,
	        formatLabel: formatLabels[data.format],
	        price: movie.prices[data.format]
	    });
	}); //addToCart event

	$('.place-order').click(function(){ 
		console.log(cartModel.toJSON());
	});
	
}); //doc ready()

