import React from 'react';
import ReactDOM from 'react-dom';
import {CarService} from './carService';
import {CarForm} from './carForm';

class CarList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            cars: [],
            carItem:{
            number:'',
            name:'',
            price:0,
            year:2018},
            showAddComponent:false,
            showEditComponent:false
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

     editCar(number) {
               this.carService.getCar(number).then(
                   (data) => {
                      this.setState(
                      {
                        carItem:{
                            number:data.number,
                            name:data.name,
                            price:data.price,
                            year:data.year
                         }
                      })
                   })
                   .catch((error) => {
                       alert("Ошибка загрузки автомобиля");
                       console.log("Ошибка загрузки автомобиля");
                   });

     }

    addCar() {
        this.carService.addCar(this.state.carItem)
            .then(
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

            this.setState(
            {
              showAddComponent:false,
              showEditComponent:false
            }
            );

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

                   <button className="btn btn-default" onClick={()  =>
                        this.setState(
                            {
                               showAddComponent:true,
                               showEditComponent:false
                            }
                        )}>
                        Добавить автомобиль
                    </button>


                    {this.state.showAddComponent &&
                        <div><h1>Добавление нового автомобиля</h1>
			                <CarForm
	        		            changeCar={(name,value) => this.setState({ carItem : Object.assign({}, this.state.carItem , {[name]: value})})}
                                car={this.state.carItem}
			                />
                        <div className="col-xs-offset-9 col-xs-6">
                            <button onClick={ () => this.addCar() } className="btn btn-default">Добавить автомобиль</button>
                        </div>
			             </div>}

                    {this.state.showEditComponent &&
                        <div><h1>Редактирование автомобиля номер {this.state.carItem.number}</h1>
			                <CarForm
			                    changeCar={(name,value) => this.setState({ carItem : Object.assign({}, this.state.carItem , {[name]: value})})}
			                    car={this.state.carItem}
			                 />
                        <div className="col-xs-offset-9 col-xs-6">
                            <button onClick={()=>this.addCar()} className="btn btn-default">Редактировать автомобиль</button>
                        </div>

			             </div>}

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
                                        <button className="btn btn-default" onClick={()  => this.deleteCar(item.number)}>
                                            Удалить
                                        </button>
                                        <button className="btn btn-default" onClick={()  => {
                                            this.setState(
                                            {
                                                showAddComponent:false,
                                                showEditComponent:true
                                            });
                                            this.editCar(item.number)}}>
                                                Редактировать
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

