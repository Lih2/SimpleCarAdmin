import React from 'react';
import PropTypes from 'prop-types';

export class CarForm extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {
        return (<form onSubmit={(e) => {e.preventDefault(); this.props.addCar()}}>
                <div className="row">
                    <div className="col-xs-12 divfon">

                        <div className="form-group col-xs-2">
                            <input onChange={(e) => this.props.changeCar('carnumber',e.target.value)} value={this.props.carnumber} type="text" required
                                   className="form-control" placeholder="Номер машины"/>
                        </div>

                        <div className="form-group col-xs-4">
                            <input onChange={(e) => this.props.changeCar('carname',e.target.value)} value={this.props.carname} type="text" required
                                   className="form-control" placeholder="Название машины"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.props.changeCar('caryear',e.target.value)} value={this.props.caryear} type="number" required
                                   className="form-control" placeholder="Год выпуска"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.props.changeCar('carprice',e.target.value)} value={this.props.carprice} type="number" required
                                   className="form-control" placeholder="Стоимость"/>
                        </div>

                        <div className="form-group col-xs-offset-9 col-xs-6">
                            <button className="btn btn-default">Все верно, отправить</button>
                        </div>

                        <div className="clearfix"></div>

                    </div>
                </div>
            </form>);
    }
}

CarForm.propTypes = {
    addCar: PropTypes.func,
    changeCar: PropTypes.func,
	carname: PropTypes.string,
	carnumber: PropTypes.string,
	caryear: PropTypes.number,
	carprice: PropTypes.number
}
