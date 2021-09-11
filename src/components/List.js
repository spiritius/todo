import React from 'react';
import Item from './Item';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			adding: false,
		};
		this.newTaskInput = React.createRef();
		this.itemChanged = this.itemChanged.bind(this);
		this.addNewTask = this.addNewTask.bind(this);
		this.saveNewTask = this.saveNewTask.bind(this);
	}

	// если в localStorage чо-то есть, читаем оттуда при рендере приложения
	componentDidMount() {
		const local = JSON.parse(localStorage.getItem("data"));
		if (local) {
			this.setState({
				data: local
			})
		}
	}

	// запускаем при изменении пункта и все изменения записываем в localStorage
	itemChanged = (id, key, value) => {
		const temp = this.state.data;
		for (let i=0; i <= temp.length; i++) {
			if (temp[i].id === id) {
				temp[i][key] = value;
				break;
			}
		}
		this.setState({data: temp});
		const newLocal = JSON.stringify(temp);
		localStorage.setItem('data', newLocal);
	}

	// при добавлении нового пункта появляется инпут - это обновление компонента
	// переносим фокус в появившийся инпут
	componentDidUpdate(prevState) {
		if (prevState.adding !== this.state.adding && this.state.adding) {
			this.newTaskInput.current.focus();
		}
	}

	// при нажатии на кнопку "добавить новую таску" меняем состояние adding
	addNewTask = (e) => {
		e.preventDefault();
		this.setState({
			adding: true
		});
	}

	// сохранение новой таски:
	// если инпут не пустой, записываем все новые в данные в item
	// создаем nextData, куда помещаем изначальный список тасок и добавляем item
	// состояние заменяем новым списком - nextData
	// обновляем localStorage 
	saveNewTask = () => {
		const newTaskInput = this.newTaskInput.current;
		if (newTaskInput.value !== '') {
			const length = this.state.data.length + 1;
			const item = {
				'id': length,
				'title': newTaskInput.value,
				'isDone': false,
			};
			newTaskInput.value = '';
			const nextData = [...this.state.data, item];
			this.setState({
				data: nextData
			});
			const newLocal = JSON.stringify(nextData);
			localStorage.setItem('data', newLocal);
		}
		this.setState({
			adding: false
		});

	}

	// функция для вывода тасок из состояния this.state.data через компонент Item
	renderList() {
		const data = this.state.data;
		let items = null;

		if (data.length) {
			items = data.map((item) => {
				return (<Item key={item.id} data={item} onChange={(id, key, value) => this.itemChanged(id, key, value)} />)
			});
		} else {
			items = <p>nothing to do :)</p>
		}
		return items;
	}

	render() {
		return (
			<div>
				<div className="task__list">
					{this.renderList()}
				</div>
				<div className={"input-group p-4 bg-light " + (this.state.adding ? "" : "d-none")}>
					<input 
						type="text" 
						name="title"
						id="newtask"
						ref={this.newTaskInput}
						autoComplete="off"
						placeholder="type something..." 
						className="form-control"
						onKeyPress={event => event.key === 'Enter' && this.saveNewTask()}
						/>
					<button 
						type="button" 
						className="btn btn-outline-secondary"
						onClick={this.saveNewTask}
						>+</button>
				</div>
				<div className="text-end mt-4">
					<button 
						type="button" 
						className={"btn btn-secondary " + (this.state.adding ? "d-none" : "")}
						onClick={(e) => this.addNewTask(e)}
						>add task</button>
				</div>
			</div>
		)
	}
}