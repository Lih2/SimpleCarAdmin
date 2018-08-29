package ru.ocrimea.simplecaradmin;


import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Document
public class Car {
    @Id
    private String number;
    private String name;
    private int year;
    private float price;


}
