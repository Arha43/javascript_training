//Two Pointer Algo
//Reverse an Array

// function reverseArray(arr){
//  let left = 0;
//  let right=arr.length - 1;

//  while(left<right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right]=temp;

//     left++;
//     right--;
//  }
//  return arr;
// }
// console.log(reverseArray([1,2,3,4,5]));

// function isPalindrome(str){
//     let left=0;
//     let right = str.length -1

//     while(left<right){
//         if(str[left]!=str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }

// console.log(isPalindrome("aba"))


//Count Frequency of each element

// function countFrequency(arr){
//     let map = {}

//     for(let i=0;i<arr.length;i++){
//         if(map[arr[i]]){
//             map[arr[i]]++;
//         }else {
//             map[arr[i]]=1;
//         }
//     }

//     return map;
// }

// console.log(countFrequency([1,1,1,2,3,5,5,4,4]))

//Detects Duplicate if yes return true else false

// function containDuplicate(nums){
//     let map={}
//     for(let i = 0; i<nums.length;i++){
//         if(map[nums[i]]){
//             return true;
//         } else {
//             map[nums[i]]=true
//         }
//     }
//     return false;
// }
// console.log(containDuplicate([1,2,3,4,5]))


//Anagram 
// function isAnagram(s , t){
//     if(s.length !== t.length){
//         return false;
//     }
//     let map = {}
//     for(let i = 0; i<s.length;i++){
//         let char = s[i];
//         if(map[char]){
//             map[char]++;
//         } else {
//             map[char]=1
//         }
//     }

//     for (let char of t){
//         if(!map[char]){
//             return false;
//         }
//         map[char]--;;
//     }

//     return true;
// }

// console.log(isAnagram("silent","liste"))


//Max subarray of sum of k size

// function maxSum(arr,k){
//         let windowSum=0
//         let maxSum=0

//         for(let i=0;i<k;i++){
//           windowSum+=arr[i]
//         }
//         maxSum=windowSum;

//         for(let i=k;i<arr.length;i++){
//                 windowSum=windowSum+arr[i]-arr[i-k]
//                 maxSum=Math.max(maxSum,windowSum)
//         }

//         return maxSum
// }

// console.log(maxSum([1,2,3,4,5],3))


//Stack
//Stack is Linear Data Structure
// let stack =[]

// function insertAt(n){
//  return stack.push(n)
// }

// function popTop(){
//         if(stack.length===0){
//                 return false;
//         }
//   return stack.pop()
// }

// insertAt(5)
// insertAt(6)
// insertAt(7)
// console.log(stack)

//checing Brackets

// function isValid(str){
//         let stack=[]
//         for(let i=0;i<str.length;i++){
//                 let char=str[i];
//                 if(char==='('||char[i]==='{'||char[i]==='['){
//                         stack.push(char);
//                 }else{
//                         if(stack.length===0){
//                                 return false;
//                         }
//                         let top = stack.pop()
//                         if((char===')'&& top!=='(')||
//                          (char==='}'&&top!=='{') ||
//                          char===']' && top!=='['){
//                                 return false;
//                          }

//                 }

//         }
//         return stack.length===0;
// }

// console.log(isValid("()}"))

//Queue

// let queue=[]

// function enqueue(n){
//         queue.push(n)
// }
// function dequeue(){
//         if(queue.length===0){
//                 return null;
//         }
//         return queue.shift()
// }
// enqueue(5)
// enqueue(6)
// dequeue()
// dequeue()
// console.log(queue)

//Generate Binary Number till n using queue.

// function BinaryNumber(n){
//  let queue=[]
//  queue.push("1")
//  for(let i=0;i<n;i++){
//         let current = queue.shift()
//         console.log(current)
//         queue.push(current+'0')
//         queue.push(current+'1')
//  }
// }

// BinaryNumber(5)

//LinkedList
// class Node {
//        constructor(value) {
//               this.value = value
//               this.next = null
//        }
// }

// class LinkedList {
//        constructor() {
//               this.head = null
//        }
//        insertAtHead(value) {
//               let newNode = new Node(value)
//               newNode.next = this.head
//               this.head = newNode
//        }
//        deleteHead(){
//               if(this.head===null) return null;
//               this.head=this.head.next
//        }
//        insertAtTail(value){
//               let newNode = new Node(value);
//               if(this.head===null){
//                      this.head=newNode
//                      return
//               }
//               let current=this.head
//               while(current.next!==null){
//                      current=current.next
//               }
//               current.next=newNode
//        }

//        reverseList(){
//               let prev=null
//               let current = this.head
//               let next=null
//               while(current!==null){
//                next=current.next
//                current.next=prev

//                prev=current
//                current=next
//               }
              
//               while(prev!==null){
//                      console.log(prev.value)
//                      prev=prev.next
//               }
//        }

//        findMiddle(){
//               let slow=this.head
//               let fast=this.head
//               while(fast!==null&&fast.next!==null){
//                      slow=slow.next
//                      fast=fast.next.next
//               }
//               return slow.value
//        }
//        printList(){
//               let current = this.head

//               while(current!==null){
//                      console.log(current.value)
//                      current=current.next
//               }
//        }
// }

// let list = new LinkedList()
// list.insertAtHead(5)
// list.insertAtHead(6)
// list.insertAtHead(9)

// list.printList()
// // list.deleteHead()
// // console.log("After delete")
// // list.printList()
// // list.insertAtTail(3)
// // console.log("After Insert At tail")
// list.reverseList()

//Binary Trees

// class TreeNode{
//        constructor(value){
//               this.value=value;
//               this.left=null
//               this.right = null
//        }
// }
// let root = new TreeNode(5);
// root.left=new TreeNode(6);
// root.right=new TreeNode(8);

// function inorder(root){
//        if(root===null){
//               return;
//        }
//        inorder(root.left)
//        console.log(root.value)
//        inorder(root.right)
       
// }

// function preOrder(root){
//        if(root===null) return;

//        console.log(root.value)
//        preOrder(root.left)
//        preOrder(root.right)
// }

// function postOrder(root){
//        if(root===null) return
//        postOrder(root.left)
//        postOrder(root.right)
//        console.log(root.value)
// }
// inorder(root)


//OOP
// class Student{
//        constructor(name,age){
//               this.name=name
//               this.age=age
//        }
//        introduce(){
//               console.log("My Name is "+this.name)
//        }
// }

// let obj1 = new Student("Arham",22)
// obj1.introduce()

//Encapsulation
//Protect data and control how data is modified and hide internal state

// class BankAccount{
//        #balance = 0;
//        deposit(amount){
//               this.#balance+=amount
//        }
//        getBalance(){
//               return this.#balance
//        }
// }

// let s1=new BankAccount();
// s1.deposit(50)
// console.log(s1.getBalance())

//Inheritance
//reuse code allows child class to reuse properties and methods from a parent class.

// class Animal{
//        eat(){
//               console.log("Eating")
//        }
// }
// class Dog extends Animal{

// }

// let obj1 = new Dog()
// obj1.eat()

//abstraction 
// class Car{
//        start(){
//               this.#checkFuel()
//               this.#ingniteEngine()
//               console.log("Car Started")
//        }
//        #checkFuel(){
//               console.log("Fuel Checking")
//        }
//        #ingniteEngine(){
//               console.log("Igniting engine")
//        }
// }

// let car = new Car()
// car.start()



// class Singelton {

//     //create a static variable to store one object
//     static Singleton obj;

//     //make constructor private no one can create object directly
//     private Singelton() {}

//     //Create a method to give the object
//     static Singelton getInstance(){
//         if(obj == null){
//             obj = new Singelton(); // create only once
//         }
//         return this.obj;
//     }
// }
// //To use it
// public class Main{
//     public static void main(String[] args){
//         Singleton a = Singelton.getInstance();
//         Singelton b = Singelton.getInstance();
//         FileSystem.out.println(a==b) //true
//     }
// }




