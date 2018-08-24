import React from 'react';
import PropTypes from 'prop-types';

export class CarForm extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return ( <div className="row">
                    <div className="col-xs-12 divfon">

                        <div className="form-group col-xs-2">
                            <input onChange={(e) => {let car=this.props.car; car.number=e.target.value; this.props.changeCar(car);}} value={this.props.car.number} type="text" required
                                   className="form-control" placeholder="Номер машины"/>
                        </div>

                        <div className="form-group col-xs-4">

                            <input onChange={(e) => {let car=this.props.car; car.name=e.target.value; this.props.changeCar(car);}} value={this.props.car.name} type="text" required
                                   className="form-control" placeholder="Название машины"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => {let car=this.props.car; car.year=e.target.value; this.props.changeCar(car);}} value={this.props.car.year} type="number" required
                                   className="form-control" placeholder="Год выпуска"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => {let car=this.props.car; car.price=e.target.value; this.props.changeCar(car);}} value={this.props.car.price} type="number" required
                                   className="form-control" placeholder="Стоимость"/>
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>
                );
    }
}

CarForm.propTypes = {
    changeCar: PropTypes.func,
	carItem: PropTypes.object
}
