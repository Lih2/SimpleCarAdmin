package ru.ocrimea.simplecaradmin;

import java.util.*;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository

public class CarStorage {

    private ArrayList<Car> cars = new ArrayList<>();

    public CarStorage() {
        add("КУ197М777","Audi Q7 3.0TDI",2016,4000000);
        add("КУ197М775","BMW X5 3.0TDI",2017,3000000);
        add("КУ123М775","BMW X5 3.0TDI",2013,1500000);
        add("ДА197М777","Smart Forfour 0.9t",2016,2000000);
    }

    public ArrayList<Car> getCars() {
        return cars;
    }

    public void add(Car car) {
        delete(car.getNumber());
        cars.add(car);
    }

    public void add (String number,String name,int year,float price) {
        add(new Car(number,name,year,price));
    }

    public void delete(String number) {

        Iterator<Car> carIterator=cars.iterator();
        while(carIterator.hasNext()) {
            Car car = carIterator.next();
            if( car.getNumber().equals(number))
                carIterator.remove();
        }
    }

    public Car getCarForNumber(String number) {
        Iterator<Car> carIterator=cars.iterator();
        while(carIterator.hasNext()) {
            Car car = carIterator.next();
            if( car.getNumber().equals(number)) return car;
        }
        return new Car("","",2018,0);
    }


    public void empty() {
        cars.clear();
    }


}
