import React from 'react';
import ReactDOM from 'react-dom';

class CarApp extends React.Component {
	
    constructor(props) {
          super(props);			  
		  this.state = {
	        cars: []        			
            };	 
          this.addCar = this.addCar.bind(this);				
          this.deleteCar = this.deleteCar.bind(this);			  
	}
	
	componentDidMount() {
		this.loadData();
	}  
			 
   loadData() {
     fetch('/caradmin').then(results => { return results.json() }).then(data => {
          this.setState({cars: data });
     }).catch(() => {
          alert('Ошибка!');
     });
   }
       
  deleteCar(number) {
	     let JSONObject= {
             "number":number,
             };	   	 		 		 		 
		 fetch("/cardel", {
			method: "POST",		
			body: JSON.stringify(JSONObject),			
			headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
			},						
		}).then(results => { return results.json() }).then(data => {
          this.setState({cars: data });
     }).catch(() => {
          alert('Ошибка выполнения запроса!');
     });	  
  }
    
  addCar(number,name,year,price) {
	     let JSONObject= {
             "name":name,
             "number":number,
             "price":price,
             "year":year
             };	   	 		 		 		 
		 fetch("/caradd", {
			method: "POST",		
			body: JSON.stringify(JSONObject),			
			headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
			},						
		}).then(results => { return results.json() }).then(data => {
          this.setState({cars: data });
     }).catch(() => {
          alert('Ошибка выполнения запроса!');
     });
			
    }
       		
   render() {
		return <div>
		         <UserForm handleAddCar={this.addCar} />
				 <CarData cars={this.state.cars} handleDeleteCar={this.deleteCar} />
			   </div>;
	}
	
}


class UserForm extends React.Component {

     constructor(props) {
          super(props);
		  
		  this.state = {
            number: '',
            name: '',
            year: '',
            price: ''				
            };	 
			
          this.handleChangeNumber = this.handleChangeNumber.bind(this);			  	
		  this.handleChangeName = this.handleChangeName.bind(this);			  	
		  this.handleChangeYear = this.handleChangeYear.bind(this);			  			  
		  this.handleChangePrice = this.handleChangePrice.bind(this);			  			  		  
				  
          this.addCar = this.addCar.bind(this);	
     }
	 
	handleChangeNumber(event) {
        this.setState({
            number: event.target.value,
        });
    }	 
	handleChangeName(event) {
        this.setState({
            name: event.target.value,
        });
    }	 
	handleChangeYear(event) {
        this.setState({
            year: event.target.value,
        });
    }	 
	handleChangePrice(event) {
        this.setState({
            price: event.target.value,
        });
    }		 
	 	 
	addCar(e) {   
      e.preventDefault();	
	  this.props.handleAddCar(this.state.number,this.state.name,this.state.year,this.state.price);			 
    }		 
	
   render() {	   
	   return <form onSubmit={this.addCar}>

        <div class="row">
            <div class="col-xs-12 divfon">

                <div class="form-group col-xs-2">
                    <input onChange={this.handleChangeNumber} value={this.state.number} type="text" required class="form-control" name="number" id="number" placeholder="Номер машины" data-validation-required-message="Пожалуйста укажите номер машины" />
                </div>

                <div class="form-group col-xs-4">
                    <input onChange={this.handleChangeName} value={this.state.name} type="text" required class="form-control" name="name" id="name" placeholder="Название машины" data-validation-required-message="Пожалуйста укажите марку машины и двигатель" />
                </div>

                <div class="form-group col-xs-3">
                    <input onChange={this.handleChangeYear} value={this.state.year} type="number" required class="form-control" name="year" id="year" placeholder="Год выпуска" pattern="[0-9]{4}" data-validation-required-message="Пожалуйста укажите год выпуска, 4 цифры" />
                </div>

                <div class="form-group col-xs-3">
                    <input onChange={this.handleChangePrice} value={this.state.price} type="number" required class="form-control" name="price" id="price" placeholder="Стоимость" pattern="[0-9]{1,}" data-validation-required-message="Пожалуйста укажите стоимость, только цифры" />
                </div>

                <div class="form-group col-xs-offset-9 col-xs-6">
                    <button class="btn btn-default" name="add" id="add">Все верно, отправить</button>
                </div>

                <input type="hidden" name="action" value="add" />

                <div class="clearfix"></div>


            </div>
        </div>
    </form> ;
	
   }		
}

class CarData extends React.Component {

     constructor(props) {	
	  super(props);	
	  
      this.deleteCar = this.deleteCar.bind(this);		  
    }
	
	deleteCar(number) {   
	  this.props.handleDeleteCar(number);			 		
	}
		
  render() {
        return (
            <table className="table" >
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
            {this.props.cars.map(item => {
                return (
                    <tr key={item.number}>
                        <td>{item.number}</td>
                        <td>{item.name}</td>
                        <td>{item.year}</td>
                        <td>{item.price}</td>                       
                        <td><button class="btn btn-default" onClick={this.deleteCar.bind(null,item.number)}>Удалить</button></td>                       						
                        </tr>
                    );
                })
            }
        </tbody>
    </table>);
	}  
}


//ReactDOM.render( <UserForm />, document.getElementById('userform'));
//ReactDOM.render( <CarData />, document.getElementById('cardata'));
ReactDOM.render( <CarApp />,document.getElementById('carapp'));

