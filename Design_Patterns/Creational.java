// //Problem without Builder

// class User{
//     String name;
//     int age;
//     String email;
//     String phone;

//     User(String name, int age, String email, String phone){
//         this.name= name;
//         this.age = age;
//         this.email = email;
//         this.phone = phone;
//     }
// }
// //Problem
// User u = new User("Arham",23, null , null)
// //hard to read , many null values and confusing


// class User {

//     private String name;
//     private int age;
//     private String email;

//     // Private constructor
//     private User(Builder builder) {
//         this.name = builder.name;
//         this.age = builder.age;
//         this.email = builder.email;
//     }

//     // Static Builder class
//     static class Builder {

//         private String name;
//         private int age;
//         private String email;

//         Builder(String name) { // required field
//             this.name = name;
//         }

//         Builder setAge(int age) {
//             this.age = age;
//             return this;
//         }

//         Builder setEmail(String email) {
//             this.email = email;
//             return this;
//         }

//         User build() {
//             return new User(this);
//         }
//     }
// }


// //How to use it 
// User user = new User.Builder("Ali")
//                     .setAge(22)
//                     .setEmail("ali@gmail.com")
//                     .build();

// class Dog {
//     void speak() {
//         System.out.println("Bark");
//     }
// }

// class Cat {
//     void speak() {
//         System.out.println("Meow");
//     }
// }

// Dog d = new Dog();
// Cat c = new Cat();

// //Problem you must know which to class to create
// // code becomes tighly coupled.



// common interface
interface Animal{
    void speak();
}

//classes
class Dog implements Animal{
    public void speak(){
        System.out.println("Bark")
    }
}

class Cat implements Animal{
    public void speak(){
        System.out.println("Meow")
    }
}

//Factory Class
class AnimalFactory{
    static Animal getAnimal(String type){
        if(type.equals("dog")){
            return new Dog();
        } else if(type.equals("cat")) {
            return new Cat();
        }
        return null
    }
}

Animal a1 = AnimalFactory.getAnimal("dog")
a1.speak()

Animal a2= AnimalFactory.getAnimal("cat");
a2.speak()