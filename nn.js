
class NeuralNetwork{

	constructor(input_nodes, hidden_nodes, output_nodes) {
		this.input_nodes = input_nodes;
		this.hidden_nodes = hidden_nodes;
		this.output_nodes = output_nodes;

		this.weigths_hidden = new Matrix(this.hidden_nodes, this.input_nodes); // um array de pesos para cada neuronio
		this.weigths_output = new Matrix(this.output_nodes, this.hidden_nodes);
		this.weigths_hidden.randomize()
		this.weigths_output.randomize()

		this.bias_hidden = new Matrix(this.hidden_nodes,1);
		this.bias_output = new Matrix(this.output_nodes,1);
		this.bias_hidden.randomize()
		this.bias_output.randomize()
	}

}