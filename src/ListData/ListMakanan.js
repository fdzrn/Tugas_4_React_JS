import React, {Component} from 'react';

class ListMakanan extends Component {
	constructor(props){
		super(props);
		this.state = {
			datalist: this.props.gambar
		};
	}
	render(){
		return(
			<div>
				<img src={this.state.datalist} alt="Produk Makanan" width="180" />
			</div>
		);
	}
} 

export default ListMakanan;