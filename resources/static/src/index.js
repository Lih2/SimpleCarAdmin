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
		  
		 this.handleChange = name => event => {
			this.setState({ [name]: event.target.value });
		  }
		  
		 this.handleDelete = event => {
			this.deleteCar(event.target.id);
		  }
		  
		 this.handleSubmit = event => {
			this.addCar(event);
		 }		  		  
	}
		
	componentDidMount() {
		this.loadData();
	}
	
    loadData() {
       this.carService.getCars().then(
           (data) =>
           {
               this.setState({cars: data });
           })
           .catch((error) =>
           {
               alert("Ошибка загрузки данных");
               console.log("Ошибка загрузки данных");
           });
   }
   
   addCar(e) {  
	  e.preventDefault();	      
      this.carService.addCar(this.state.number,this.state.name,this.state.year,this.state.price).then(
           (data) =>
           {
               this.setState({cars: data });
           })
           .catch((error) =>
           {
               alert("Ошибка добавления автомобиля");
               console.log("Ошибка добавления автомобиля");
           });	 	   
    }	
	
    deleteCar(number) {
		
      this.carService.deleteCar(number).then(
           (data) =>
           {
               this.setState({cars: data });
           })
           .catch((error) =>
           {
               alert("Ошибка удаления автомобиля");
               console.log("Ошибка удаления автомобиля");
           });	 
	}	   
	   	  
    render() {
        return (<div> <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col-xs-12 divfon">

                    <div className="form-group col-xs-2">
                        <input onChange={this.handleChange('number')} value={this.state.number} type="text" required
                               className="form-control" name="number" id="number" placeholder="Номер машины"
                               data-validation-required-message="Пожалуйста укажите номер машины"/>
                    </div>

                    <div className="form-group col-xs-4">
                        <input onChange={this.handleChange('name')} value={this.state.name} type="text" required
                               className="form-control" name="name" id="name" placeholder="Название машины"
                               data-validation-required-message="Пожалуйста укажите марку машины и двигатель"/>
                    </div>

                    <div className="form-group col-xs-3">
                        <input onChange={this.handleChange('year')} value={this.state.year} type="number" required
                               className="form-control" name="year" id="year" placeholder="Год выпуска"
                               pattern="[0-9]{4}"
                               data-validation-required-message="Пожалуйста укажите год выпуска, 4 цифры"/>
                    </div>

                    <div className="form-group col-xs-3">
                        <input onChange={this.handleChange('price')} value={this.state.price} type="number" required
                               className="form-control" name="price" id="price" placeholder="Стоимость"
                               pattern="[0-9]{1,}"
                               data-validation-required-message="Пожалуйста укажите стоимость, только цифры"/>
                    </div>

                    <div className="form-group col-xs-offset-9 col-xs-6">
                        <button className="btn btn-default" name="add" id="add">Все верно, отправить</button>
                    </div>

                    <input type="hidden" name="action" value="add"/>

                    <div className="clearfix"></div>

                </div>
            </div>
        </form>

        <table className="table">
          <thead >
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
                        <button className="btn btn-default" onClick={this.handleDelete} id={item.number}>Удалить
                        </button>
                    </td>
                </tr>
            );
        })
        }
        </tbody>
        </table></div>) ;
    }
}

ReactDOM.render( <CarList />,document.getElementById('carlist'));

