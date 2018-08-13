import React from 'react';
import ReactDOM from 'react-dom';
import {CarService} from './carService';
import {CarForm} from './carForm';

class CarList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            cars: [],
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

    addCar(carState) {
        this.carService.addCar(carState.number,carState.name,carState.year,carState.price).then(
            (data) => {
                this.setState(
                    {
                        cars: data,
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
			<CarForm addCar={(state) => this.addCar(state)}/>
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
                                <button className="btn btn-default" onClick={()  => this.deleteCar(item.number)}>Удалить
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

