const juftToq = (num) => {
    if(num % 2 == 0){
        return `${num} - bu juft son`
    } else {
        return `${num} - bu toq son`
    }
}

function User(){
    this.name = 'Muhammadqodir',
    this.age = 16,
    this.job = 'Pupil'
}

export {
    juftToq,
    User
}