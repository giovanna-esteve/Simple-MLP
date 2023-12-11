let training_data = [
	{
		inputs: [1,0],
		targets: [1]
	},
	{
		inputs: [0,1],
		targets: [1]
	},
	{
		inputs: [0,0],
		targets: [0]
	},
	{
		inputs: [1,1],
		targets: [0]
	}
];

let nn

function setup() {
	nn = new NeuralNetwork(2,2,1);
	
	nn.train(training_data, lr=0.1, epochs=50000);

	console.log(nn.feedforward([1,0])[0].data[0]);
	console.log(nn.feedforward([0,1])[0].data[0]);
	console.log(nn.feedforward([0,0])[0].data[0]);
	console.log(nn.feedforward([1,1])[0].data[0]);

}