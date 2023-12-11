
function sigmoid(x){
	return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y){
	return y * (1 - y);
}

class NeuralNetwork{

	constructor(input_nodes, hidden_nodes, output_nodes, activation = 'sigmoid') {
		this.input_nodes = input_nodes;
		this.hidden_nodes = hidden_nodes;
		this.output_nodes = output_nodes;
		if(activation == 'sigmoid') this.activation = sigmoid;

		this.weigths_hidden = new Matrix(this.hidden_nodes, this.input_nodes); // um array de pesos para cada neuronio
		this.weigths_output = new Matrix(this.output_nodes, this.hidden_nodes);
		this.weigths_hidden.randomize()
		this.weigths_output.randomize()

		this.bias_hidden = new Matrix(this.hidden_nodes,1);
		this.bias_output = new Matrix(this.output_nodes,1);
		this.bias_hidden.randomize()
		this.bias_output.randomize()
	}

    feedforward(input_array){
		let inputs = Matrix.fromArray(input_array);

		let hidden_layer = Matrix.multiply(this.weigths_hidden, inputs);
		hidden_layer.add(this.bias_hidden);
		hidden_layer.map(this.activation); 

		let output_layer = Matrix.multiply(this.weigths_output, hidden_layer);
		output_layer.add(this.bias_output);
		output_layer.map(this.activation); 

		return [output_layer, hidden_layer];
	}

	backpropagation(input_array, target_array, output, hidden, lr){
		let inputs = Matrix.fromArray(input_array);
		let target = Matrix.fromArray(target_array);

		let error = Matrix.subtract(target, output);

		let weigths_output = Matrix.transpose(this.weigths_output);
		let erros_hidden = Matrix.multiply(weigths_output, error);

		let gradients = Matrix.map(output, dsigmoid);
		gradients.multiply(error);
		gradients.multiply(lr);
		let deltas = Matrix.multiply(gradients, Matrix.transpose(hidden));
		
		this.weigths_output.add(deltas);
		this.bias_output.add(gradients);

		let h_gradients = Matrix.map(hidden, dsigmoid);
		h_gradients.multiply(erros_hidden);
		h_gradients.multiply(lr);
		let h_deltas = Matrix.multiply(h_gradients, Matrix.transpose(inputs));

		this.weigths_hidden.add(h_deltas);
		this.bias_hidden.add(h_gradients);
	}
	
	train(training_data, lr=0.1, epochs=10000){

		for (let i = 0; i < epochs; i++){
			let data = random(training_data);
			
			let [output, hidden] = this.feedforward(data.inputs);
			this.backpropagation(data.inputs, data.targets, output, hidden, lr);
		}

	}

}