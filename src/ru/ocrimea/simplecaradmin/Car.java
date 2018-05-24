package ru.ocrimea.simplecaradmin;

public class Car {

    private String name;
    private int year;
    private float price;
    private String number;

    public Car() {

    }

    public Car(String number,String name,int year,float price) {
        this.number = number;
        this.name = name;
        this.year = year;
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public int getYear() {
        return year;
    }

    public float getPrice() {
        return price;
    }

    public String getNumber() {
        return number;
    }

    public boolean equals(Object obj) {
        if (obj == this) return true;
        if (obj == null) return false;
        if (!(getClass() == obj.getClass())) return false;
        else {
            Car tmp = (Car) obj;
            if (this.name.equals(tmp.getName()) &&
                    (this.year == tmp.year) &&
                    (this.number.equals(tmp.number)) &&
                    (this.price == tmp.price)
                    ) return true;
            else return false;
        }
    }

}
