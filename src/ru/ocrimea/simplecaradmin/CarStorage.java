package ru.ocrimea.simplecaradmin;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;

import lombok.extern.slf4j.Slf4j;

@Component
@Service
@Slf4j
public class CarStorage {

    ///private ArrayList<Car> cars = new ArrayList<>();

    @Autowired
    CarRepository repository;

    public CarStorage() {
    }

    @PostConstruct
    public void init(){
        add("КУ197М777","Audi Q7 3.0TDI",2016,4000000);
        add("КУ197М775","BMW X5 3.0TDI",2017,3000000);
        add("КУ123М775","BMW X5 3.0TDI",2013,1500000);
        add("ДА197М777","Smart Forfour 0.9t",2016,2000000);
    }

    public ArrayList<Car> getCars() {
        return new ArrayList(repository.findAll());
    }

    public void add(Car car) {
        repository.save(car);
        log.info("Adding Car" + car.getNumber());
    }

    public void add (String number,String name,int year,float price) {
        add(new Car(number,name,year,price));
    }

    public void delete(String number) {
        repository.deleteById(number);
        log.info("Deleting Car" + number);
    }

    public Car getCarForNumber(String number) {
        return repository.findById(number).orElse(new Car());
    }

    public void empty() {
        repository.deleteAll();
    }


}
