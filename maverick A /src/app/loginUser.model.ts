export class LoginUser{
    id: number;
    userName: string;
    password: string;
    email: string;
    location: string;
    mobile: string;
    gender: string;
    age: number;

    user(name,password,email,location,mobile)
    {
        this.userName=name;
        this.password=password;
        this.email=email;
        this.location=location;
        this.mobile=mobile;
        this.age=this.age;
        this.gender=this.gender;
    }
}