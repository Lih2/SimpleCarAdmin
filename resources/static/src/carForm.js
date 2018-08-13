import React from 'react';
import PropTypes from 'prop-types';

export class CarForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            number: '',
            name: '',
            year: '',
            price: ''
        };

    }

    render() {
        return (<form onSubmit={(e) => {e.preventDefault(); this.props.addCar(this.state)}}>
                <div className="row">
                    <div className="col-xs-12 divfon">

                        <div className="form-group col-xs-2">
                            <input onChange={(e) => this.setState({number: e.target.value})} value={this.state.number} type="text" required
                                   className="form-control" placeholder="Номер машины"/>
                        </div>

                        <div className="form-group col-xs-4">
                            <input onChange={(e) => this.setState({name: e.target.value}) } value={this.state.name} type="text" required
                                   className="form-control" placeholder="Название машины"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.setState({year: e.target.value}) } value={this.state.year} type="number" required
                                   className="form-control" placeholder="Год выпуска"/>
                        </div>

                        <div className="form-group col-xs-3">
                            <input onChange={(e) => this.setState({price: e.target.value}) } value={this.state.price} type="number" required
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
    addCar: PropTypes.func
}
