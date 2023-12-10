function setup() {

	nn = new NeuralNetwork(2,2,1);

    let output_layer;
    let hidden_layer;
    
    [output_layer, hidden_layer] = nn.feedforward([1,0]);
	
    console.log(output_layer)
}