package ru.ocrimea.simplecaradmin;

import java.util.*;

public class CarStorage {

    private static ArrayList<Car> cars = new ArrayList<>();

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
