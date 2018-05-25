package ru.ocrimea.simplecaradmin;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;

@Configuration
public class CarStorageConfiguration {

    @Bean
    CarStorage carStorage() {
            return new CarStorage();
    }
}
