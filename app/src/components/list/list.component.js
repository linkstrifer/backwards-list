import React, { Component } from 'react';

import ItemComponent from './item.component';
import SelectComponent from './../inputs/select.component';
import SearchInput from './../inputs/search.component';

const initialState = {
	order: 'asc',
	baseItems: [],
	items: []
};

class ListComponent extends Component {
	orderHandler = (order) => {
		this.setState((prevState) => ({
			items: prevState.items.sort(order === 'asc' ? this.orderAsc : this.orderDes),
			order: order
		}));
	}

	searchHandler = (searchString) => {
		this.setState(() => ({
			items: this.state.baseItems.filter(item => 
				item.label.toLowerCase().includes(searchString.toLowerCase())
			).sort(this.state.order === 'asc' ? this.orderAsc : this.orderDes)
		}))
	}

	orderAsc = (a, b) => {
		if (a.label > b.label) {
			return 1;
		} else if (a.label < b.label) {
			return -1;
		}

		return 0;
	}

	orderDes = (a, b) => {
		if (a.label < b.label) {
			return 1;
		} else if (a.label > b.label) {
			return -1;
		}

		return 0;
	}

	constructor(props) {
		super();

		const parser = new DOMParser();
		const list = parser.parseFromString(props.list, 'text/html');
		const items = list.querySelectorAll('li');

		this.state = initialState;

		for (let i = 0; i < items.length; i++) {
			this.state.baseItems.push({
				label: items[i].innerText
			});
		}
		
		this.state.items = this.state.baseItems.sort(this.orderAsc);
	}

	render() {
		return (
			<div>
				<div style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}>
					<SearchInput handler={this.searchHandler} />
					<SelectComponent handler={this.orderHandler} />
				</div>
				<ul>
					{
						this.state.items.map((item, index) => {
							return (
								<ItemComponent
									key={`list-item-${index}`}
									label={item.label}
									/>
							);
						})
					}
				</ul>
			</div>
		)
	}
}

export default ListComponent;
