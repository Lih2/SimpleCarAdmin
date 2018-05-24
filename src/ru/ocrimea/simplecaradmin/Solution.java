package ru.ocrimea.simplecaradmin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Solution {

    public static void main(String[] args) {

        CarStorage carStorage=new CarStorage();
        carStorage.add("КУ197М777","Audi Q7 3.0TDI",2016,4000000);
        carStorage.add("КУ197М775","BMW X5 3.0TDI",2017,3000000);
        carStorage.add("КУ123М775","BMW X5 3.0TDI",2013,1500000);
        carStorage.add("ДА197М777","Smart Forfour 0.9t",2016,2000000);
        SpringApplication.run(Solution.class, args);
    }

}