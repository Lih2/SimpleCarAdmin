export class CarService {


    getCars() {
        return new Promise((resolve, reject) => {
            $.ajax('/caradmin', {
                type: 'GET',
                contentType: "application/json",
                dataType: "json",
                success: resolve,
                error: reject
            })
        });
    }

    getCar(number) {

        let JSONObject = {
               "number": number,
            };

         return new Promise((resolve, reject) => {
                $.ajax('/caredit', {
                    data: JSON.stringify(JSONObject),
                    type: 'POST',
                    contentType: "application/json",
                    dataType: "json",
                    success: resolve,
                    error: reject
                })
            });
    }

    addCar(carItem) {

        let JSONObject = {
            "name": carItem.name,
            "number": carItem.number,
            "price": carItem.price,
            "year": carItem.year
        };

        return new Promise((resolve, reject) => {
            $.ajax('/caradd', {
                type: 'POST',
                data: JSON.stringify(JSONObject),
                contentType: "application/json",
                dataType: "json",
                success: resolve,
                error: reject
            })
        });
    }

    deleteCar(number) {

        let JSONObject = {
            "number": number,
        };

        return new Promise((resolve, reject) => {
            $.ajax('/cardel', {
                type: 'POST',
                data: JSON.stringify(JSONObject),
                contentType: "application/json",
                dataType: "json",
                success: resolve,
                error: reject
            })
        });
    }


}