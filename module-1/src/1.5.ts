const user : {
    readonly company: "programming hero" // this data is not changeable because of its read only and if i want set data with fixed value
    firstName: string;
    middleName?: string; //show optional tye, if data present in count it strip if data not  present in count undefine
    lastName: string;
    isMarried: boolean
} = {
    company: "programming hero", // its give me error if data not match type
    firstName: "Md.",
    // middleName: "kobirul",
    lastName: "Islam",
    isMarried: true
}