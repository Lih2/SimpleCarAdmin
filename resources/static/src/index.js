import React from 'react';
import ReactDOM from 'react-dom';
import {CarService} from './carService';

class CarList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            cars: [],
            number: '',
            name: '',
            year: '',
            price: ''
        };

        this.carService = new CarService();
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {

        this.carService.getCars().then(
            (data) => {
                this.setState({cars: data});
            })
            .catch((error) => {
                alert("Ошибка загрузки данных");
                console.log("Ошибка загрузки данных");
            });
    }

    addCar(e) { 

        this.carService.addCar(this.state.number, this.state.name, this.state.year, this.state.price).then(
            (data) => {
                this.setState(
                    {
                        cars: data,
                        number: '',
                        name: '',
                        year: '',
                        price: ''
                    });
            })
            .catch((error) => {
                alert("Ошибка добавления автомобиля");
                console.log("Ошибка добавления автомобиля");
            });
    }

    deleteCar(number) {

        this.carService.deleteCar(number).then(
            (data) => {
                this.setState({cars: data});
            })
            .catch((error) => {
                alert("Ошибка удаления автомобиля");
                console.log("Ошибка удаления автомобиля");
            });
    }

    render() {
        return (<div>
            <form onSubmit={(e) => { e.preventDefault(); this.addCar(event)} }>
                <div className="row">
                    <div className="col-xs-12 divfon">

                        <div className="form-group col-xs-2">
                            <input onChange={(e) => this.setState({'number': e.target.value})} value={this.state.number} type="text" required
                                   className="form-control" placeholder="Номер машины"/>
                        </div>

                        <div className="form-group col-xs-4">
                            <input onChange={(e) => this.setState({'name': e.target.value})} value={this.state.name} type="text" required
                                   className="form-control" placeholder="Название машины"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.setState({'year': e.target.value})} type="number" required
                                   className="form-control" placeholder="Год выпуска"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.setState({'price': e.target.value})} value={this.state.price} type="number" required
                                   className="form-control" placeholder="Стоимость"/>
                        </div>

                        <div className="form-group col-xs-offset-9 col-xs-6">
                            <button className="btn btn-default">Все верно, отправить</button>
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>
            </form>

            <table className="table">
                <thead>
                <tr>
                    <th>
                        Номер машины
                    </th>
                    <th>
                        Название
                    </th>
                    <th>
                        Год
                    </th>
                    <th>
                        Стоимость
                    </th>
                    <th>
                    </th>
                </tr>
                </thead>

                <tbody>
                {this.state.cars.map(item => {
                    return (
                        <tr key={item.number}>
                            <td>{item.number}</td>
                            <td>{item.name}</td>
                            <td>{item.year}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-default" onClick={() => this.deleteCar(item.number)}>Удалить
                                </button>
                            </td>
                        </tr>
                    );
                })
                }
                </tbody>
            </table>
        </div>);
    }
}

ReactDOM.render(<CarList/>, document.getElementById('carlist'));

