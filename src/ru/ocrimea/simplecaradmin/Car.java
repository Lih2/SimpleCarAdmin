package ru.ocrimea.simplecaradmin;


import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Car {
    private String number;
    private String name;
    private int year;
    private float price;


}
