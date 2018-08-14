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

    addCar(number, name, year, price) {

        let JSONObject = {
            "name": name,
            "number": number,
            "price": price,
            "year": year
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