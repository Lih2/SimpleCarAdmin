package ru.ocrimea.simplecaradmin;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.type.TypeReference;

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

    private Map<String,String> getCarInfoFromString(String carString) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        Map <String,String> carMap = new HashMap<>();
        carMap = objectMapper.readValue(carString, new TypeReference<Map<String,String>>() {});
        return carMap;
    }

    @RequestMapping("/caradmin")
    public ArrayList<Car> caradmin(
            @RequestParam(value="data", required=false, defaultValue="view") String data) {
        CarStorage carStorage=new CarStorage();
        return carStorage.getCars();
    }

    @RequestMapping(value = "/caradd", method = RequestMethod.POST)
    public ArrayList<Car> caradd (
            @RequestBody String carString ) throws IOException  {

        Map<String, String> carMap = getCarInfoFromString(carString);
        CarStorage carStorage=new CarStorage();
        Car car = new Car(carMap.get("number"),carMap.get("name"),Integer.parseInt(carMap.get("year")),Float.parseFloat(carMap.get("price")));
        carStorage.add(car);
        return carStorage.getCars();
    }

    @RequestMapping(value = "/cardel", method = RequestMethod.POST)
    public ArrayList<Car> cardel (
            @RequestBody String carString ) throws IOException {

        Map<String, String> carMap = getCarInfoFromString(carString);
        CarStorage carStorage=new CarStorage();
        carStorage.delete(carMap.get("number"));
        return carStorage.getCars();
    }

    @RequestMapping(value = "/caredit", method = RequestMethod.POST)
    public Car caredit (
            @RequestBody String carString ) throws IOException {

        Map<String, String> carMap = getCarInfoFromString(carString);
        CarStorage carStorage=new CarStorage();
        return carStorage.getCarForNumber(carMap.get("number"));
    }





}