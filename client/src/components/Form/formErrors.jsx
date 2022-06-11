export class PriorityQueue {
    constructor() { this.queue = []; }

    getQueue() { return this.queue; }
    isEmpty() { return !!!this.queue.length; }
    add(error, index) { this.queue.splice(index, 0, error); }
    remove() { queue.shift(); }
    addMultiple(errors) {
        errors.forEach(error => this.enqueue(error));
    }
    enqueue([error, priority, display]) {
        if (this.isEmpty()) return this.queue.push([error, priority, display]);
        let added = false;
        this.queue.forEach((element, index) => {
            if (priority > element[1]) return;
            this.add([error, priority, display], index);
            added = true;
        });
        if (!added) this.queue.push([error, priority, display]);
    }
    dequeue() { queue.shift(); }
    getFirst() {
        const filteredArray = this.queue.filter(element => element[2] === true);
        return filteredArray.length ? filteredArray[0][0] : "";
    }
}

export const formErrors = {
    required: "Field is required!",
    email: "Email is invalid!",
    none: "",
    match: "Passwords don't match!"
}

export const setErrorsQueue = (data) => {
    const username = new PriorityQueue();
    const email = new PriorityQueue();
    const password = new PriorityQueue();
    const repeatPassword = new PriorityQueue();
    const status = data.status.data;
    username.enqueue([formErrors.required, 1, data.username.required.display]);
    email.enqueue([formErrors.required, 1, data.email.required.display]);
    email.enqueue([formErrors.email, 10, data.email.invalid.display]);
    console.log(email);
    // email.addMultiple([[formErrors.required, 1, data.email.required.display], [formErrors.email, 10, data.email.invalid.display]]);
    password.enqueue([formErrors.required, 1, data.password.required.display]);
    repeatPassword.addMultiple([[formErrors.required, 1, data.repeatPassword.required.display], [formErrors.match, 10, true]]);

    return { status, username, email, password, repeatPassword }
}

export const defaultErrors = setErrorsQueue({
    status: { data: false },
    username: {
        required: { data: formErrors.required, display: false }
    },
    email: {
        required: { data: formErrors.required, display: false },
        invalid: { data: formErrors.email, display: false },
    },
    password: {
        required: { data: formErrors.required, display: false },
        match: { data: formErrors.passwords, display: false }
    },
    repeatPassword: {
        required: { data: formErrors.required, display: false },
        match: { data: formErrors.match, display: false }
    }
});