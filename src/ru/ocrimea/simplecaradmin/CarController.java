package ru.ocrimea.simplecaradmin;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;

@RestController

public class CarController {

    final public CarStorage carStorage;

    public CarController(CarStorage carStorage) {
        this.carStorage=carStorage;
    }

    @RequestMapping("/caradmin")
    public ArrayList<Car> caradmin(
            @RequestParam(value="data", required=false, defaultValue="view") String data) {
        return carStorage.getCars();
    }

    @RequestMapping(value = "/caradd", method = RequestMethod.POST)
    public ArrayList<Car> caradd (
            @RequestBody Car car ) throws IOException  {
        carStorage.add(car);
        return carStorage.getCars();
    }

    @RequestMapping(value = "/cardel", method = RequestMethod.POST)
    public ArrayList<Car> cardel (
            @RequestBody Car car ) throws IOException {
        carStorage.delete(car.getNumber());
        return carStorage.getCars();
    }

    @RequestMapping(value = "/caredit", method = RequestMethod.POST)
    public Car caredit (
            @RequestBody Car car ) throws IOException {
        return carStorage.getCarForNumber(car.getNumber());
    }





}