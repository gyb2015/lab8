/*
    createCartModel()

    Creates a model for the shopping cart. This uses the ListModel
    as the prototype, but adds a few specific methods.

    The config parameter can contain the following properties:
    - items (array of objects) initial items for the cart (optional)
*/
function createCartModel(config) {
	var model = createListModel(config);  //create a new ListModel object instance

		model.getTotalPrice = function() {  //add a getTotalPrice() method to the model

			var idx;  
			var totalPrice = 0;
			for (idx = 0; idx < this.items.length; ++idx) {  //loop over the model's items array (this.items)
			    totalPrice += this.items[idx].price;  // adding up the prices of each item 
			}
			return totalPrice.toFixed(2);  //getTotalPrice()

		}

		model.toJSON = function() {  //The second method

			return JSON.stringify(this.items);  //return the result of JSON.stringify(this.items). 

		}  
		return model;

} //createCartModel()