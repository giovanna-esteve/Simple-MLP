
class Matrix{

	constructor(rows, cols){
		this.rows = rows;
		this.cols = cols;
		this.data = [];

		for (let i = 0; i < this.rows; i++){
			this.data[i] = [];
			for (let j = 0; j < this.cols; j++){
				this.data[i][j] = 0;
			}
		}
	}

	randomize(){
		for(let i = 0; i < this.rows; i++){
			for(let j = 0; j < this.cols; j++){
				this.data[i][j] += Math.random()* 2 -1;
			}
		}
	}

    static fromArray(arr){
		let m = new Matrix(arr.length, 1);
		for (let i = 0; i < arr.length; i++){
			m.data[i][0] = arr[i];
		}
		return m
	}

    static multiply(a, b){
		if(a.cols != b.rows){
			console.log("matrix invalida!");
			return;
		}
		let result = new Matrix(a.rows, b.cols);
		for(let i = 0; i < result.rows; i++){
			for(let j = 0; j < result.cols; j++){
				for(let k = 0; k < a.cols; k++){
					result.data[i][j] += a.data[i][k] * b.data[k][j];
				}
			}
		}
		return result;
	}

    add(n){
		if (n instanceof Matrix) {
			for(let i = 0; i < this.rows; i++){
				for(let j = 0; j < this.cols; j++){
					this.data[i][j] += n.data[i][j];
				}
			}
		}else{
			for(let i = 0; i < this.rows; i++){
				for(let j = 0; j < this.cols; j++){
					this.data[i][j] += n;
				}
			}
		}
	}

    map(func){
		for(let i = 0; i < this.rows; i++){
			for(let j = 0; j < this.cols; j++){
				this.data[i][j] = func(this.data[i][j])
			}
		}
	}

}
