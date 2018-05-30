export class User{
    userId: number;
    userName: string;
    password: string;
    email: string;
    location: string;
    mobile: string;
    gender: string;
    age: String;

    user(userId,name,password,email,location,mobile)
    {
        this.userId=userId;
        this.userName=name;
        this.password=password;
        this.email=email;
        this.location=location;
        this.mobile=mobile;
        this.age=this.age;
        this.gender=this.gender;
    }
}