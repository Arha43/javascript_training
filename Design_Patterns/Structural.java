// class CPU{
//     void start(){
//         System.out.println("CPU started");
//     }
// }
// class Memory{
//     void load(){
//         System.out.println("Memory Loaded");}
// }
// class HardDrive{
//     void read(){
//         System.out.println("Reading Data"); }
// }
// //create Facade class
// class ComputerFacade{
//     private CPU cpu;
//     private Memory memory;
//     private HardDrive hardDrive;

//     ComputerFacade(){
//         cpu = new CPU();
//         memory = new Memory();
//         hardDrive= new HardDrive();
//     }

//     void startComputer(){
//         cpu.start();
//         memory.load();
//         hardDrive.read();
//     }
// }

// //How to use it 
// public class Main{
//     public static void main(String[] args){
//         ComputerFacade computer = new ComputerFacade();
//         computer.startComputer(); //just one call we are doing now
//     }
// }



//Usage // problem too many steps , client must know everything
//complex to use
// CPU cpu = new CPU();
// Memory mem = new Memory();
// HardDrive hd = new HardDrive();

// cpu.start();
// mem.load();
// hd.read();



// class OldPrinter{
//     void printOld(){
//         System.out.println("Printing old way")
//     }
// }

// //Now our system expects , oldPrinter does not match interface
// //so we cant directly use it


// //Target interface (What we want)
// interface Printer{
//     void print();
// }

// //Existing class (incompatible)
// class OldPrinter{
//     void printOld(){
//         System.out.println("Printing old way")
//     }
// }

// //Adapter
// class PrintAdapter implements Printer{
//     private OldPrinter oldPrinter;

//     PrintAdapter(OldPrinter oldPrinter){
//         this.oldPrinter = oldPrinter
//     }

//     public void print(){
//         oldPrinter.oldPrinter(); //convert call
//     }
    
// }

// //To use it 
// public class Main{
//     public static void main(String[] args){
//         OldPrinter oldPrinter = new OldPrinter();

//         Printer printer = new PrintAdapter(oldPrinter);
//         printer.print();
//     }
// }

//Observer Pattern defines a one-to-many dependency
//where changes in one object notify all dependents
//Observer Interface
// interface Observer{
//     void update(String message);
// }

// //Concrete Observers
// class Subscriber implements Observer{
//     private String name;

//     Subscriber(String name){
//         this.name = name;
//     }

//     public void update(String message){
//         System.out.println(name + "received "+ message)
//     }
// }

// //Main Object
// class YoutubeChannel{
//     private List<Observer> subscribers = new ArrayList<>();

//     void subscribe(Observer o){
//         subscribers.add(o)
//     }
//     void unsubscribe(Observer o){
//         subscribers.remove(o)
//     }
//     void notifySubscribers(String message){
//         for(Observer o: subscribers){
//             o.update(message)
//         }
//     }
// }

// //Usage 
// public class Main{
//     public static void main(String[] args){
//         YoutubeChannel channel = new YoutubeChannel();
//         Observer user1 = new Subscriber("Ali");
//         Observer user2 = new Subscriber("Ahmed");

//         channel1.subscribe(user1);
//         channel1.subscribe(user2);
//         channel.notifySubscribers("New video uploaded")
//     }
// }

//Ali received: New video uploaded
//Ahmed received: New video uploaded


//Strategy Pattern
//too many if else , hard to add new methods and not flexible
// class Payment {
//     void pay(String type){
//         if(type.equals("card")){
//             System.out.println("Paid with Card");
//         } else if (type.equals("jazzcash")){
//             System.out.println("Paid with jazzcash")
//         }
//     }
// }


//Strategy interface
interface PaymentStrategy {
    void pay();
}

//Different Strategies
class CardPayment implements PaymentStrategy{
    public void pay(){
        System.out.print("Paid with Card");
    }
}

class JazzCashPayment implements PaymentStrategy{
    public void pay(){
        System.out.println("Paid with Jazzcash")
    }
}

//Context Class
class PaymentContext{
    private PaymentStrategy strategy;

    PaymentContext(PaymentStrategy strategy){
        this.strategy = strategy;
    }

    void executePayment(){
        statregy.pay()
    }
}

//use
public class Main{
    public static void main(String[] args){
        PaymentStrategy strategy = new CardPayment()
        PaymentContext context= new PaymentContext(strategy)
        context.executePayment();

        //change the strategy at runtime
        context = new PaymentContext(new JazzCashPayment());
        context.executePayment();
    }
}