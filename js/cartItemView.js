/*
    createCartItemView()

    Creates a view for a single cart item. This exists
    so that we can attach the item to the remove button
    so that when it's clicked, we know what item to remove.
*/

function createCartItemView(config) {

	var view = createTemplateView(config);  //calling the object view
	
	view.afterRender = function(clonedTemplate, model) {  //add a new method to the view 
    clonedTemplate.find('.remove-item').click(function(){  //find() method & click() method 
        view.cartModel.removeItem(model);  // remove the current item from the cart
    });
};

return view;
         
} //createCartItemView()
