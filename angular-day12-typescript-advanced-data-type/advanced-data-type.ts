function listen(port: unknown) {
    if (typeof port === 'string') { //type guard
        port = parseInt(port, 10);
    }

    //do something with port
}

listen('123');
listen(123);
//...

// let port: unknown;
// (port as []).forEach((p: any) => console.log(p));

type StringOrNumber = string | number;

function lis(port: StringOrNumber) {
    if (typeof port === 'string') { //type guard
        port = parseInt(port, 10);
    }
}

typeof 'string'; // string
typeof 123; // number
typeof true; // boolean
typeof {}; // object
typeof []; // object
typeof (() => { }); // function
typeof null; // object
typeof undefined; // undefined
typeof new Date(); // object

typeof String; // function
typeof Boolean; // function
typeof NaN; // number

typeof typeof 123; // string


function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
    return { ...o1, ...o2 };
}

const result = merge({ foo: 'bar' }, { bar: 'foo' });
result.bar;
result.foo;


type ObjectDictionary<T> = { [key: string]: T }; // {foo: T, bar: T}
type ArrayDictionary<T> = { [key: string]: T[] }; // {foo: T[], bar: T[]}
export type Dictionary<T> = T extends []
    ? ArrayDictionary<T[number]>
    : ObjectDictionary<T>;


// File khác
type StringDictionary = Dictionary<string>; // {[key: string]: string} {foo: '123}, bar: '1234
type NumberArrayDictionary = Dictionary<number[]>; // {[key: string]: number[]}
type UserEntity = Dictionary<StringOrNumber>; // {[key: string]: User}
// type UserEntity = ObjectDictionary<string | number>

const entity: UserEntity = {
    foo: 'bar',
    bar: '123'
}



// Exclude/Extract
type Exclude<T, U> = T extends U ? never : T;
type Extract<T, U> = T extends U ? T : never;

interface User {
    firstName: string;
    lastName: string;
    password: string;
    age?: number
}

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type SomeDiff = Exclude<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.
type SomeUser = Exclude<keyof User, 'password'>

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type SomeFilter = Extract<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
// type NonNullable<T> = Exclude<T, null | undefined>; // loại bỏ null và undefined từ T
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrNumberOrUnderfiend = StringOrNumber | undefined;
type Test = NonNullable<StringOrNumberOrUnderfiend>;


type Readonly<T> = { readonly [P in keyof T]: T[P] }; // làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
type Partial<T> = { [P in keyof T]?: T[P] }; // làm tất cả các props trong type thành optional. Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
type Nullable<T> = { [P in keyof T]: T[P] | null }; // cái này tương tự như Partial, Partial sẽ trả về T[P] | undefined. Còn Nullable sẽ trả về T[P] | null
const readonlyUser: Readonly<User> = {
    firstName: 'Zendy',
    lastName: 'Jurry',
    password: '27'
}

const partialUser: Partial<User> = {

}

const nullableUser: Nullable<User> = {
    firstName: null,
    lastName: null,
    password: null
}

const requiredUser: Required<User> = {
    firstName: 'Zendy',
    lastName: 'Jurry',
    password: '123',
    age: 27,
}


type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Record<K extends keyof any, T> = { [P in K]: T };

// Pick: Pick từ trong T những type có key là K
type Person = {
    firstName: string;
    lastName: string;
    password: string;
};

type PersonWithNames = Pick<Person, 'firstName' | 'lastName'>; // {firstName: string, lastName: string}

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
// { prop1: string, prop2: string, prop3: string }

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

// ReturnType: trả về type của giá trị mà function T trả về.
type Result = ReturnType<() => string>; // string
type Test2 = ReturnType<() => StringOrNumber>;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Omit: loại bỏ type có key là K trong T
type PersonWithoutPassword = Omit<Person, 'password'>; // {firstName: string, lastName: string}